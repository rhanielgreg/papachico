import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  SparklesIcon,
  GiftIcon,
  ShieldCheckIcon,
  UsersIcon,
  ChartBarIcon,
  BuildingLibraryIcon,
  CheckCircleIcon,
  RocketLaunchIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  FireIcon,
  GlobeAltIcon,
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon,
  UserGroupIcon,
  QuestionMarkCircleIcon,
  ArrowLeftIcon,
  ChevronUpIcon,
  DocumentCheckIcon
} from '@heroicons/react/24/outline';
import { FaTelegram, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import logo from '../logo1.png';
import canaveralLogo from '../canaveral.png';
import Tooltip from './Tooltip';

const Whitepaper = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 200);
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuItems = [
    { text: 'ABOUT US', icon: UserGroupIcon },
    { text: 'TECHNOLOGY', icon: BuildingLibraryIcon },
    { text: 'TOKENOMICS', icon: ChartBarIcon },
    { text: 'ROADMAP', icon: RocketLaunchIcon },
    { text: 'WHITEPAPER', icon: DocumentTextIcon, path: '/whitepaper' },
    { text: 'WHITELIST', icon: GiftIcon, path: '/whitelist' },
    { text: 'AUDIT', icon: DocumentCheckIcon, path: '/audit' },
    { text: 'FAQ', icon: QuestionMarkCircleIcon },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#000000] text-white">
      {/* Background Pattern */}
      <div
        className="fixed top-0 left-0 right-0 h-[800px] bg-papa-pattern bg-top bg-no-repeat opacity-5 pointer-events-none"
        style={{ backgroundSize: '800px' }}
      />

      {/* Top Banner */}
      <div className="bg-papa-gold py-2 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content">
            <span className="inline-flex items-center gap-2">
              <GiftIcon className="h-5 w-5" />
              JOIN OUR PLATFORM TODAY TO UNLOCK EXCLUSIVE BENEFITS
              <SparklesIcon className="h-5 w-5" />
              JOIN OUR PLATFORM TODAY TO UNLOCK EXCLUSIVE BENEFITS
              <GiftIcon className="h-5 w-5" />
              JOIN OUR PLATFORM TODAY TO UNLOCK EXCLUSIVE BENEFITS
            </span>
          </div>
        </div>
      </div>

      {/* Fixed Navigation */}
      <nav className={`fixed ${isScrolled ? 'top-0' : 'top-[40px]'} left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white bg-opacity-90 shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img src={logo} alt="Papa Chico" className="h-12 md:h-16 animate-float rounded-full shadow-lg border-2 border-[#FFD700] bg-white cursor-pointer" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {menuItems.map((item) => (
                item.path ? (
                  <Link
                    key={item.text}
                    to={item.path}
                    className={`font-righteous flex items-center gap-2 transition-colors duration-300 ${
                      isScrolled ? 'text-[#1a1a1a] hover:text-[#FFD700]' : 'text-white hover:text-[#FFD700]'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.text}
                  </Link>
                ) : (
                  <Link
                    key={item.text}
                    to={`/#${item.text.toLowerCase().replace(' ', '-')}`}
                    className={`font-righteous flex items-center gap-2 transition-colors duration-300 ${
                      isScrolled ? 'text-[#1a1a1a] hover:text-[#FFD700]' : 'text-white hover:text-[#FFD700]'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.text}
                  </Link>
                )
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <a
                href="https://presale.papachico.top"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFD700] border-2 border-[#FFD700] shadow-lg px-4 py-2 rounded-full font-righteous text-sm flex items-center gap-1 text-[#1a1a1a] hover:bg-[#E6B800] transition-all duration-300"
              >
                <CurrencyDollarIcon className="h-4 w-4" />
                BUY ON PRESALE
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`transition-colors ${
                  isScrolled ? 'text-[#1a1a1a] hover:text-[#FFD700]' : 'text-white hover:text-[#FFD700]'
                }`}
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-8 w-8" />
                ) : (
                  <Bars3Icon className="h-8 w-8" />
                )}
              </button>
            </div>

            {/* Desktop Buy Button */}
            <a
              href="https://presale.papachico.top"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex bg-[#FFD700] border-2 border-[#FFD700] shadow-lg px-6 py-2 rounded-full font-righteous items-center gap-2 text-[#1a1a1a] hover:bg-[#E6B800] transition-all duration-300"
            >
              <CurrencyDollarIcon className="h-5 w-5" />
              BUY ON PRESALE
            </a>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
            <div className={`flex flex-col space-y-4 p-4 rounded-xl shadow-lg ${
              isScrolled ? 'bg-white bg-opacity-90' : 'bg-[#2a2a2a]'
            }`}>
              {menuItems.map((item) => (
                item.path ? (
                  <Link
                    key={item.text}
                    to={item.path}
                    className={`font-righteous flex items-center gap-2 transition-colors duration-300 py-2 ${
                      isScrolled ? 'text-[#1a1a1a] hover:text-[#FFD700]' : 'text-white hover:text-[#FFD700]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.text}
                  </Link>
                ) : (
                  <Link
                    key={item.text}
                    to={`/#${item.text.toLowerCase().replace(' ', '-')}`}
                    className={`font-righteous flex items-center gap-2 transition-colors duration-300 py-2 ${
                      isScrolled ? 'text-[#1a1a1a] hover:text-[#FFD700]' : 'text-white hover:text-[#FFD700]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.text}
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Add padding to account for fixed nav */}
      <div className="pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-center mb-8">
            <DocumentTextIcon className="h-12 w-12 text-[#FFD700] mr-4" />
            <h1 className="text-4xl font-bold font-righteous text-[#FFD700]">Papa Chico Whitepaper</h1>
          </div>

          {/* Remover grid e deixar só o container centralizado */}
          <div className="mx-auto bg-[#2a2a2a] rounded-lg p-8 max-w-3xl w-full">
            <section id="introduction" className="mb-12">
              <h2 className="text-2xl font-bold font-righteous text-[#FFD700] mb-4">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                Papa Chico Token ($CHICO) is a faith-powered cryptocurrency built on the Base network (Ethereum L2). This whitepaper details the technical specifications, tokenomics, and unique features of the Papa Chico Token project.
              </p>
            </section>

            <section id="technology" className="mb-12">
              <h2 className="text-2xl font-bold font-righteous text-[#FFD700] mb-4">Network & Technology</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#333] p-6 rounded-lg">
                  <h3 className="text-xl font-righteous text-[#FFD700] mb-4 flex items-center gap-2"><SparklesIcon className="h-6 w-6 text-[#FFD700]" />Base Network</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li><CheckCircleIcon className="h-5 w-5 text-[#FFD700] inline" /> Built on Base (Ethereum Layer 2, Optimistic Rollup)</li>
                    <li><CheckCircleIcon className="h-5 w-5 text-[#FFD700] inline" /> Fully EVM compatible</li>
                    <li><CheckCircleIcon className="h-5 w-5 text-[#FFD700] inline" /> Low transaction fees</li>
                    <li><CheckCircleIcon className="h-5 w-5 text-[#FFD700] inline" /> Security inherited from Ethereum</li>
                  </ul>
                </div>
                <div className="bg-[#333] p-6 rounded-lg">
                  <h3 className="text-xl font-righteous text-[#FFD700] mb-4 flex items-center gap-2"><ShieldCheckIcon className="h-6 w-6 text-[#FFD700]" />Smart Contracts</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li><CheckCircleIcon className="h-5 w-5 text-[#FFD700] inline" /> Solidity-based smart contracts</li>
                    <li><CheckCircleIcon className="h-5 w-5 text-[#FFD700] inline" /> ERC20 Standard (OpenZeppelin)</li>
                    <li><CheckCircleIcon className="h-5 w-5 text-[#FFD700] inline" /> Ownable for secure ownership management</li>
                    <li><CheckCircleIcon className="h-5 w-5 text-[#FFD700] inline" /> Immutable parameters (taxes, tax wallet)</li>
                    <li><CheckCircleIcon className="h-5 w-5 text-[#FFD700] inline" /> Auditable and transparent code</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="tokenomics" className="mb-12">
              <h2 className="text-2xl font-bold font-righteous text-[#FFD700] mb-4">Token Distribution</h2>
              <div className="bg-[#333] p-6 rounded-lg mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-righteous text-[#FFD700]">Total Supply:</span>
                  <span className="font-mono text-white">500,000,000,000 (500B) $CHICO</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <GlobeAltIcon className="h-5 w-5 text-[#FFD700]" />
                  <a
                    href="https://basescan.org/token/0x51e9476fd6f14ae68b02b47a44d7da60752ffbc9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFD700] underline font-righteous hover:text-white transition-colors"
                  >
                    View on BaseScan
                  </a>
                </div>
                {[
                  { name: 'CEX Reserve', percentage: '20%', amount: '100,000,000,000', simplified: '100B', icon: BuildingLibraryIcon, address: '0x8F323Ef1D43ebeB61A20993d24a9dA5199DcEC4b' },
                  { name: 'DEX Liquidity', percentage: '20%', amount: '100,000,000,000', simplified: '100B', icon: BuildingLibraryIcon, address: '0xBb3a3f0445a1Cdf7f5dc1cFDAe536B5135B8dde5' },
                  { name: 'Community Airdrop', percentage: '20%', amount: '100,000,000,000', simplified: '100B', icon: GiftIcon, address: '0x631cd66f9E49F387901Cc6704d4E7df92d21A48C' },
                  { name: 'Development Reserve', percentage: '10%', amount: '50,000,000,000', simplified: '50B', icon: RocketLaunchIcon, address: '0xD77af050DEaa00a1b1EB3447f254021AAc18e6c4' },
                  { name: 'DAO Treasury', percentage: '5%', amount: '25,000,000,000', simplified: '25B', icon: ChartBarIcon, address: '0x0c4188130542681e203f9F768FA3a9087D6600dC' },
                  { name: 'Vesting Team', percentage: '5%', amount: '25,000,000,000', simplified: '25B', icon: UsersIcon, address: '0x7a4AdEf9DbB806329A7Ea84fEefb3eb9237Aaa7F' },
                ].map((item, idx) => (
                  <div key={item.name} className={`flex items-center gap-4 p-3 rounded-lg transition-colors ${item.name === 'Development Reserve' ? 'bg-[#FFD700] bg-opacity-10' : 'hover:bg-[#FFD700] hover:bg-opacity-10'}`}>
                    <item.icon className="h-5 w-5 text-[#FFD700]" />
                    <div className="flex-1">
                      <div className="font-righteous text-white">{item.name}</div>
                      <div className="text-sm text-gray-300">
                        {item.amount} <span className="text-[#FFD700]">({item.simplified})</span> ({item.percentage})
                      </div>
                      <a
                        href={`https://basescan.org/address/${item.address}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFD700] text-xs hover:text-white transition-colors block mt-1"
                      >
                        {item.address.slice(0, 6)}...{item.address.slice(-4)}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-[#333] p-6 rounded-lg">
                <h3 className="text-xl font-righteous text-[#FFD700] mb-4 flex items-center gap-2"><ChartBarIcon className="h-6 w-6 text-[#FFD700]" />Tokenomics & Fees</h3>
                <ul className="space-y-3 text-gray-300">
                  <li><span className="font-righteous text-white">Decimals:</span> 18</li>
                  <li><span className="font-righteous text-white">Initial Burn:</span> 100,000,000,000 tokens (20%)</li>
                  <li><span className="font-righteous text-white">Effective Initial Supply:</span> 400,000,000,000 tokens</li>
                  <li><span className="font-righteous text-white">Buy Tax:</span> 150 (1.5%)</li>
                  <li><span className="font-righteous text-white">Sell Tax:</span> 250 (2.5%)</li>
                  <li><span className="font-righteous text-white">Autoburn:</span> 100 (1%)</li>
                  <li><span className="font-righteous text-white">Taxes calculated using:</span> TAX_DENOMINATOR (10000)</li>
                  <li><span className="font-righteous text-white">Max Autoburn:</span> 50% of initial supply</li>
                  <li><span className="font-righteous text-white">Tax Wallet:</span> Immutable (set at deploy)</li>
                  <li><span className="font-righteous text-white">LP Buy Limit:</span> Configurable at deploy</li>
                  <li><span className="font-righteous text-white">Fee Exemptions:</span> Owner, contract, tax wallet, LP (when set)</li>
                  <li><span className="font-righteous text-white">All tax parameters are immutable after deploy</span></li>
                </ul>
              </div>
            </section>

            <section id="features" className="mb-12">
              <h2 className="text-2xl font-bold font-righteous text-[#FFD700] mb-4">Smart Contract Features</h2>
              <div className="bg-[#333] p-6 rounded-lg">
                <ul className="space-y-3 text-gray-300">
                  <li>ERC20 standard with custom fee and autoburn logic</li>
                  <li>Automatic token burning on transactions (autoburn)</li>
                  <li>Buy/sell taxes sent to tax wallet</li>
                  <li>Maximum autoburn cap (50% of initial supply after burn)</li>
                  <li>Fee exemption mapping for specific addresses</li>
                  <li>Ownership management (Ownable)</li>
                  <li>Liquidity pair management</li>
                  <li>Transparent event emission for burns and tax collection</li>
                </ul>
              </div>
            </section>

            <section id="security" className="mb-12">
              <h2 className="text-2xl font-bold font-righteous text-[#FFD700] mb-4">Security Considerations</h2>
              <div className="bg-[#333] p-6 rounded-lg">
                <ul className="space-y-3 text-gray-300">
                  <li>OpenZeppelin contracts for ERC20 and Ownable</li>
                  <li>Immutable critical parameters</li>
                  <li>Input validation for all critical functions</li>
                  <li>Reentrancy protection by design</li>
                  <li>OnlyOwner modifier for sensitive operations</li>
                </ul>
              </div>
            </section>

            <section id="roadmap" className="mb-12">
              <h2 className="text-2xl font-bold font-righteous text-[#FFD700] mb-4">Roadmap Highlights</h2>
              <div className="bg-[#333] p-6 rounded-lg">
                <ul className="space-y-3 text-gray-300">
                  <li>Launch on Base network</li>
                  <li>Community airdrop and fair launch</li>
                  <li>DEX/CEX liquidity provisioning</li>
                  <li>DAO and governance setup</li>
                  <li>Staking and rewards</li>
                  <li>Ongoing audits and security reviews</li>
                </ul>
              </div>
            </section>

            <section id="conclusion" className="mb-12">
              <h2 className="text-2xl font-bold font-righteous text-[#FFD700] mb-4">Conclusion</h2>
              <p className="text-gray-300 leading-relaxed">
                Papa Chico Token is designed for security, transparency, and community engagement, leveraging the Base network and robust ERC20 standards. The tokenomics and contract logic ensure a fair, deflationary, and sustainable ecosystem for all holders.
              </p>
            </section>
          </div>
        </div>
      </div>
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#FFD700] p-4 rounded-full shadow-lg hover:bg-[#ffec80] text-[#1a1a1a] hover:text-white transition-all duration-300 transform hover:scale-110 z-50 flex items-center gap-2"
          aria-label="Back to top"
        >
          <ChevronUpIcon className="h-6 w-6" />
          <span className="font-righteous">TOP</span>
        </button>
      )}
    </div>
  );
};

export default Whitepaper;