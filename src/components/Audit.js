import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  DocumentCheckIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  ArrowLeftIcon,
  ChevronUpIcon,
  Bars3Icon,
  XMarkIcon,
  UserGroupIcon,
  QuestionMarkCircleIcon,
  DocumentTextIcon,
  GiftIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  BuildingLibraryIcon,
  CurrencyDollarIcon,
  LockClosedIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
  InformationCircleIcon,
  HomeIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import logo from '../logo1.png';
import Tooltip from './Tooltip';

const Audit = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 100);
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
    { text: 'FAQ', icon: QuestionMarkCircleIcon },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black font-fredoka text-white">
      {/* Background Pattern */}
      <div 
        className="fixed top-0 left-0 right-0 h-[800px] bg-papa-pattern bg-top bg-no-repeat opacity-5 pointer-events-none"
        style={{ backgroundSize: '800px' }}
      />

      {/* Content Container */}
      <div className="relative">
        {/* Top Banner */}
        <div className="bg-papa-gold py-2 overflow-hidden">
          <div className="marquee-container">
            <div className="marquee-content">
              <span className="inline-flex items-center gap-2 text-black">
                <DocumentCheckIcon className="h-5 w-5" />
                SMART CONTRACT AUDIT REPORT - PAPA CHICO TOKEN
                <ShieldCheckIcon className="h-5 w-5" />
                SMART CONTRACT AUDIT REPORT - PAPA CHICO TOKEN
                <DocumentCheckIcon className="h-5 w-5" />
                SMART CONTRACT AUDIT REPORT - PAPA CHICO TOKEN
              </span>
            </div>
          </div>
        </div>

        {/* Fixed Navigation */}
        <nav className={`fixed ${isScrolled ? 'top-0' : 'top-[40px]'} left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gray-900 bg-opacity-90 shadow-lg' : 'bg-transparent'
        }`}>
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Link to="/" className="flex items-center gap-2 bg-papa-gold px-4 py-2 rounded-full hover:bg-papa-hover text-black hover:text-white transition-all duration-300">
                  <HomeIcon className="h-5 w-5" />
                  <span className="font-righteous">Home</span>
                </Link>
                <Link to="/">
                  <img src={logo} alt="Papa Chico" className="h-12 md:h-16 animate-float rounded-full shadow-lg border-2 border-papa-gold bg-white cursor-pointer" />
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <a href="#overview" className="font-righteous text-white hover:text-papa-gold transition-colors">Overview</a>
                <a href="#security" className="font-righteous text-white hover:text-papa-gold transition-colors">Security</a>
                <a href="#tokenomics" className="font-righteous text-white hover:text-papa-gold transition-colors">Tokenomics</a>
                <a href="#findings" className="font-righteous text-white hover:text-papa-gold transition-colors">Findings</a>
                <a href="#conclusion" className="font-righteous text-white hover:text-papa-gold transition-colors">Conclusion</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="pt-32">
          <div className="container mx-auto px-4 py-8">
            {/* Audit Header */}
            <div className="bg-gray-800 bg-opacity-90 p-8 rounded-xl shadow-lg mb-8">
              <h1 className="text-3xl md:text-4xl font-righteous mb-4 text-white">Smart Contract Audit Report</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-gray-400">Contract Name:</p>
                  <p className="font-righteous text-white">Papa Chico Token</p>
                </div>
                <div>
                  <p className="text-gray-400">Audit Date:</p>
                  <p className="font-righteous text-white">May 2025</p>
                </div>
                <div>
                  <p className="text-gray-400">Contract Version:</p>
                  <p className="font-righteous text-white">1.0.0</p>
                </div>
              </div>
            </div>

            {/* Executive Summary */}
            <div id="overview" className="bg-gray-800 bg-opacity-90 p-8 rounded-xl shadow-lg mb-8">
              <h2 className="text-2xl font-righteous mb-4 text-white flex items-center gap-2">
                <DocumentCheckIcon className="h-6 w-6 text-papa-gold" />
                Executive Summary
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-400">Critical Issues</p>
                  <p className="text-2xl font-righteous text-white">0</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-400">Medium Issues</p>
                  <p className="text-2xl font-righteous text-white">0</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-400">Low Issues</p>
                  <p className="text-2xl font-righteous text-white">3</p>
                </div>
              </div>
              <p className="text-gray-400">
                The Papa Chico Token contract has been audited focusing on security, transparency, and adherence to ERC20 standard best practices on the Base network. The contract uses OpenZeppelin libraries, implements buy/sell taxes and automatic burning (autoburn), immutable parameters, and investor protection mechanisms. No critical or medium issues were found, only recommendations for documentation and event clarity improvements.
              </p>
            </div>

            {/* Contract Overview */}
            <div className="bg-gray-800 bg-opacity-90 p-8 rounded-xl shadow-lg mb-8">
              <h2 className="text-2xl font-righteous mb-4 text-white flex items-center gap-2">
                <InformationCircleIcon className="h-6 w-6 text-papa-gold" />
                Contract Overview
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-righteous text-white mb-2">Technical Implementation</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Developed in Solidity (v0.8.24)</li>
                    <li>ERC20 standard (OpenZeppelin)</li>
                    <li>Ownership management via Ownable (OpenZeppelin)</li>
                    <li>Immutable parameters: taxes, tax wallet, autoburn limit, LP buy limit</li>
                    <li>Custom fee and autoburn logic in _update() function</li>
                    <li>Fee exemption for owner, contract, tax wallet, and LP</li>
                    <li>Events for autoburn, LP definition, autoburn limit reached</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-righteous text-white mb-2">Key Features</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Buy/sell taxes and autoburn configurable only at deploy (immutable)</li>
                    <li>Automatic burning (autoburn) limited to 50% of initial supply</li>
                    <li>Taxes sent to immutable tax wallet</li>
                    <li>LP can be set/updated by owner</li>
                    <li>Fee exemption for strategic addresses</li>
                    <li>Transfer restrictions if LP is not set</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Security Analysis */}
            <div id="security" className="bg-gray-800 bg-opacity-90 p-8 rounded-xl shadow-lg mb-8">
              <h2 className="text-2xl font-righteous mb-4 text-white flex items-center gap-2">
                <ShieldCheckIcon className="h-6 w-6 text-papa-gold" />
                Security Analysis
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-righteous text-white mb-2">Access Control</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Critical functions protected by onlyOwner (Ownable)</li>
                    <li>Tax wallet and tax parameters are immutable after deploy</li>
                    <li>Fee exemption and LP definition restricted to owner</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-righteous text-white mb-2">Tax & Autoburn Mechanism</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Buy tax: 150 (1.5%)</li>
                    <li>Sell tax: 250 (2.5%)</li>
                    <li>Autoburn: 100 (1%), maximum 50% of initial supply</li>
                    <li>Taxes and burning calculated per transaction using TAX_DENOMINATOR (10000)</li>
                    <li>Fee exemption for owner, contract, tax wallet, LP</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-righteous text-white mb-2">General Security</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Immutable parameters prevent post-deploy manipulation</li>
                    <li>Input validation for critical parameters</li>
                    <li>No external calls in fee logic (reentrancy protection)</li>
                    <li>Transparent events for all critical actions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tokenomics */}
            <div id="tokenomics" className="bg-gray-800 bg-opacity-90 p-8 rounded-xl shadow-lg mb-8">
              <h2 className="text-2xl font-righteous mb-4 text-white flex items-center gap-2">
                <ChartBarIcon className="h-6 w-6 text-papa-gold" />
                Tokenomics Analysis
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-righteous text-white mb-2">Token Distribution</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Total Supply: 500,000,000,000 (500B) $CHICO</li>
                    <li>Initial Burn: 100,000,000,000 (20%)</li>
                    <li>Effective Initial Supply: 400,000,000,000</li>
                    <li>Decimals: 18</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-righteous text-white mb-2">Fee & Burn Model</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Buy Tax: 150 (1.5%)</li>
                    <li>Sell Tax: 250 (2.5%)</li>
                    <li>Autoburn: 100 (1%)</li>
                    <li>Max Autoburn: 50% of initial supply after burn</li>
                    <li>Tax Wallet: immutable (set at deploy)</li>
                    <li>LP Buy Limit: configurable at deploy</li>
                    <li>Fee Exemptions: owner, contract, tax wallet, LP (when set)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Audit Findings */}
            <div id="findings" className="bg-gray-800 bg-opacity-90 p-8 rounded-xl shadow-lg mb-8">
              <h2 className="text-2xl font-righteous mb-4 text-white flex items-center gap-2">
                <ExclamationTriangleIcon className="h-6 w-6 text-papa-gold" />
                Audit Findings
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-righteous text-white mb-2">Low Severity (L-01 to L-03)</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-righteous text-white">L-01: Comments and Documentation</h4>
                      <p className="text-gray-400">It is recommended to add detailed comments about the tax and autoburn logic for better transparency.</p>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-righteous text-white">L-02: Events</h4>
                      <p className="text-gray-400">It is suggested to better detail the emitted events to facilitate off-chain monitoring.</p>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-righteous text-white">L-03: Error Messages</h4>
                      <p className="text-gray-400">Improve error messages to facilitate user understanding of failures.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Audit Conclusion */}
            <div id="conclusion" className="bg-gray-800 bg-opacity-90 p-8 rounded-xl shadow-lg mb-8">
              <h2 className="text-2xl font-righteous mb-4 text-white flex items-center gap-2">
                <CheckCircleIcon className="h-6 w-6 text-papa-gold" />
                Audit Conclusion
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-righteous text-white mb-2">Overall Assessment</h3>
                  <p className="text-gray-400">
                    The Papa Chico Token contract presents solid architecture, robust security, and transparency. All critical parameters are immutable, there are no hidden functions or undue privileges, and the tax/autoburn logic is clear. The recommendations are for documentation and event improvements, with no significant impact on security.
                  </p>
                </div>
                <div>
                  <h3 className="font-righteous text-white mb-2">Recommendations</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Add detailed code comments</li>
                    <li>Improve event documentation</li>
                    <li>Review error messages for better clarity</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-righteous text-white mb-2">Audit Score</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-700 p-4 rounded-lg">
                      <p className="text-gray-400">Code Quality</p>
                      <p className="text-2xl font-righteous text-white">96/100</p>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-lg">
                      <p className="text-gray-400">Security</p>
                      <p className="text-2xl font-righteous text-white">95/100</p>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-lg">
                      <p className="text-gray-400">Overall</p>
                      <p className="text-2xl font-righteous text-white">95/100</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-papa-gold p-4 rounded-full shadow-lg hover:bg-papa-hover text-black hover:text-white transition-all duration-300 transform hover:scale-110 z-50"
            aria-label="Back to top"
          >
            <ChevronUpIcon className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Audit; 