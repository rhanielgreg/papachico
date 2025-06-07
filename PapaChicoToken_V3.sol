// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PapaChicoTokenV3 is ERC20, Ownable {
    uint256 private constant INITIAL_SUPPLY_BASE = 500_000_000_000;
    uint256 private constant INITIAL_BURN_BASE = 100_000_000_000;

    // Taxas imutáveis, definidas no deploy
    uint256 public immutable autoburnRate; // Ex: 100 para 1%
    uint256 public immutable buyTax;       // Ex: 150 para 1.5%
    uint256 public immutable sellTax;      // Ex: 250 para 2.5%
    address public immutable taxWallet;
    
    address public liquidityPair;
    uint256 public immutable maxBuyFromLPAmount;

    uint256 private constant TAX_DENOMINATOR = 10000;

    // Autoburn Cap
    uint256 public totalTokensAutoburned;
    uint256 public immutable maxTotalAutoburnAmount; // 50% of initial supply (after initial burn)

    mapping(address => bool) public isFeeExempt;

    event Autoburn(address indexed account, uint256 amount);
    event LiquidityPairSet(address indexed oldPair, address indexed newPair);
    event MaxAutoburnReached(uint256 totalBurned);

    constructor(
        address _initialOwner,
        address _taxWallet,
        address _liquidityPair, // Agora opcional no construtor
        uint256 _autoburnRate,
        uint256 _buyTax,
        uint256 _sellTax,
        uint256 _maxBuyFromLPAmount
    ) ERC20("Papa Chico", "$CHICO") Ownable(_initialOwner) {
        require(_taxWallet != address(0), "PapaChicoToken: Invalid tax wallet");
        require(_autoburnRate <= 1000, "PapaChicoToken: Autoburn rate must be <= 10%");
        require(_buyTax <= 1000, "PapaChicoToken: Buy tax must be <= 10%");
        require(_sellTax <= 1000, "PapaChicoToken: Sell tax must be <= 10%");
        require(_maxBuyFromLPAmount > 0, "PapaChicoToken: Max buy from LP amount must be greater than 0");

        taxWallet = _taxWallet;
        autoburnRate = _autoburnRate;
        buyTax = _buyTax;
        sellTax = _sellTax;
        maxBuyFromLPAmount = _maxBuyFromLPAmount;

        uint256 dec = decimals();
        uint256 initialTotalSupplyWithDecimals = INITIAL_SUPPLY_BASE * (10 ** dec);
        maxTotalAutoburnAmount = (initialTotalSupplyWithDecimals * 50) / 100; // 50% of total initial supply

        isFeeExempt[_initialOwner] = true;
        isFeeExempt[address(this)] = true;
        isFeeExempt[_taxWallet] = true;

        if (_liquidityPair != address(0)) {
            liquidityPair = _liquidityPair;
            isFeeExempt[_liquidityPair] = true;
        }

        _mint(_initialOwner, initialTotalSupplyWithDecimals);
        // Initial burn does not count towards autoburn cap
        _burn(_initialOwner, INITIAL_BURN_BASE * (10 ** dec)); 
    }

    function setLiquidityPair(address _newPair) public onlyOwner {
        require(_newPair != address(0), "PapaChicoToken: Invalid new liquidity pair address");
        address oldPair = liquidityPair;
        liquidityPair = _newPair;
        isFeeExempt[_newPair] = true;
        if (oldPair != address(0) && oldPair != _newPair) {
            isFeeExempt[oldPair] = false;
        }
        emit LiquidityPairSet(oldPair, _newPair);
    }

    function renounceOwnershipPublic() public onlyOwner {
        renounceOwnership();
    }

    function _update(address from, address to, uint256 amount) internal override {
        // Allow transfers if LP not set ONLY if it's a mint, burn, or involves exempt addresses
        if (liquidityPair == address(0) && 
            !(from == address(0) || to == address(0) || isFeeExempt[from] || isFeeExempt[to])) {
            revert("PapaChicoToken: Liquidity pair not set, transfers restricted");
        }

        if (from == address(0) || to == address(0) || isFeeExempt[from] || isFeeExempt[to]) {
            super._update(from, to, amount);
            return;
        }
        
        bool isBuyFromLP = (from == liquidityPair);
        if (isBuyFromLP && maxBuyFromLPAmount > 0) {
            require(amount <= maxBuyFromLPAmount, "PapaChicoToken: Transaction exceeds max buy limit from LP");
        }

        uint256 amountBeingTransferred = amount;
        uint256 amountToActuallySendToRecipient = amountBeingTransferred;
        
        uint256 taxCharged = 0;
        uint256 burnApplied = 0;

        bool isSellToLP = (to == liquidityPair);

        if (isBuyFromLP) { 
            taxCharged = (amountBeingTransferred * buyTax) / TAX_DENOMINATOR;
            if (autoburnRate > 0 && totalTokensAutoburned < maxTotalAutoburnAmount) {
                burnApplied = (amountBeingTransferred * autoburnRate) / TAX_DENOMINATOR;
                if (totalTokensAutoburned + burnApplied > maxTotalAutoburnAmount) {
                    burnApplied = maxTotalAutoburnAmount - totalTokensAutoburned;
                    emit MaxAutoburnReached(maxTotalAutoburnAmount);
                }
            }
        } else if (isSellToLP) { 
            taxCharged = (amountBeingTransferred * sellTax) / TAX_DENOMINATOR;
            if (autoburnRate > 0 && totalTokensAutoburned < maxTotalAutoburnAmount) {
                burnApplied = (amountBeingTransferred * autoburnRate) / TAX_DENOMINATOR;
                if (totalTokensAutoburned + burnApplied > maxTotalAutoburnAmount) {
                    burnApplied = maxTotalAutoburnAmount - totalTokensAutoburned;
                    emit MaxAutoburnReached(maxTotalAutoburnAmount);
                }
            }
        }

        uint256 totalFeesDeducted = taxCharged + burnApplied;

        if (totalFeesDeducted > 0) {
            require(amountBeingTransferred >= totalFeesDeducted, "PapaChicoToken: Amount too small for fees");
            amountToActuallySendToRecipient = amountBeingTransferred - totalFeesDeducted;

            if (burnApplied > 0) {
                totalTokensAutoburned += burnApplied; // Increment before burning
                _burn(from, burnApplied); 
                emit Autoburn(from, burnApplied);
            }

            if (taxCharged > 0) {
                _transfer(from, taxWallet, taxCharged);
            }
        }
        
        super._update(from, to, amountToActuallySendToRecipient);
    }
}
