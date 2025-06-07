import React, { useState, useEffect } from 'react';
import logo from './logo1.png';
import canaveralLogo from './canaveral.png';
import Whitepaper from './components/Whitepaper';
import Whitelist from './components/Whitelist';
import Audit from './components/Audit';
import {
  RocketLaunchIcon,
  ChartBarIcon,
  UserGroupIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  CurrencyDollarIcon,
  GiftIcon,
  ShieldCheckIcon,
  SparklesIcon,
  Bars3Icon,
  XMarkIcon,
  FireIcon,
  ChartPieIcon,
  BuildingLibraryIcon,
  UsersIcon,
  CheckCircleIcon,
  LockClosedIcon,
  DocumentCheckIcon,
  InformationCircleIcon,
  ChevronUpIcon,
  GlobeAltIcon,
  ClipboardDocumentIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Tooltip from './components/Tooltip';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });
  const [copySuccess, setCopySuccess] = useState(false);

  const contractAddress = '0x51E9476fD6f14ae68B02B47A44d7da60752Ffbc9';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('main');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowBackToTop(heroBottom < 0);
        setIsScrolled(window.scrollY > 50);
      } else {
        setShowBackToTop(window.scrollY > 100);
        setIsScrolled(window.scrollY > 50);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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

  const openModal = (type) => {
    if (type === 'terms') {
      setModalContent({
        title: 'Terms of Service',
        content: 'By using Papa Chico Token, you agree to these terms. The token is for entertainment purposes only. Always do your own research before investing. We are not responsible for any financial losses.'
      });
    } else if (type === 'privacy') {
      setModalContent({
        title: 'Privacy Policy',
        content: 'We respect your privacy. We do not collect personal data. All transactions are handled through the Solana blockchain. Your wallet information is never stored on our servers.'
      });
    }
    setShowModal(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
    <div className="min-h-screen bg-gradient-to-b from-papa-yellow to-white font-fredoka">
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

              {/* Fixed Navigation - dynamic top based on scroll */}
              <nav className={`fixed ${isScrolled ? 'top-0' : 'top-[40px]'} left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white bg-opacity-90 shadow-lg' : 'bg-transparent'
              }`}>
                <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
                    <Link to="/">
                      <img src={logo} alt="Papa Chico" className="h-12 md:h-16 animate-float rounded-full shadow-lg border-2 border-papa-gold bg-white cursor-pointer" />
                    </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {menuItems.map((item) => (
                        item.path ? (
                          <Link
                            key={item.text}
                            to={item.path}
                            className="font-righteous flex items-center gap-2 text-papa-dark hover:text-papa-hover transition-colors duration-300"
                          >
                            <item.icon className="h-5 w-5" />
                            {item.text}
                          </Link>
                        ) : (
                <a
                  key={item.text}
                  href={`#${item.text.toLowerCase().replace(' ', '-')}`}
                  className="font-righteous flex items-center gap-2 text-papa-dark hover:text-papa-hover transition-colors duration-300"
                >
                  <item.icon className="h-5 w-5" />
                  {item.text}
                </a>
                        )
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <a
                href="https://presale.papachico.top"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-papa-gold border-2 border-papa-gold shadow-lg px-4 py-2 rounded-full font-righteous text-sm flex items-center gap-1 text-papa-dark hover:bg-[#E6B800] transition-all duration-300"
              >
                <CurrencyDollarIcon className="h-4 w-4" />
                BUY ON PRESALE
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-papa-dark hover:text-papa-hover transition-colors"
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
              className="hidden md:flex bg-papa-gold border-2 border-papa-gold shadow-lg px-6 py-2 rounded-full font-righteous items-center gap-2 text-papa-dark transition-all duration-300 hover:shadow-2xl hover:bg-[#E6B800]"
            >
              <CurrencyDollarIcon className="h-5 w-5 md:h-6 md:w-6" />
              BUY ON PRESALE
            </a>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
            <div className="flex flex-col space-y-4 bg-white bg-opacity-90 p-4 rounded-xl shadow-lg">
              {menuItems.map((item) => (
                        item.path ? (
                          <Link
                            key={item.text}
                            to={item.path}
                            className="font-righteous flex items-center gap-2 text-papa-dark hover:text-papa-hover transition-colors duration-300 py-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <item.icon className="h-5 w-5" />
                            {item.text}
                          </Link>
                        ) : (
                <a
                  key={item.text}
                  href={`#${item.text.toLowerCase().replace(' ', '-')}`}
                  className="font-righteous flex items-center gap-2 text-papa-dark hover:text-papa-hover transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  {item.text}
                </a>
                        )
              ))}
                    </div>
            </div>
          </div>
        </nav>

              {/* Add padding to account for fixed nav */}
              <div className="pt-32">
        {/* Hero Section */}
                <motion.main
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="container mx-auto px-4 py-8 md:py-16 text-center"
                >
          <h1 className="text-4xl md:text-6xl font-righteous mb-4 md:mb-6 animate-float text-papa-dark">
            DEFI, MEMES & BLESSINGS —<br />
            YOUR PATH TO CRYPTO SALVATION
          </h1>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto font-fredoka text-gray-700">
            Papa Chico Token is building the first faith-powered crypto ecosystem on Base, combining memes,
            real utility, and divine rewards for all believers
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-4">
            <a
              href="https://presale.papachico.top"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-papa-gold border-2 border-papa-gold shadow-lg px-6 md:px-8 py-3 rounded-full font-righteous text-base md:text-lg flex items-center justify-center gap-2 text-papa-dark transition-all duration-300 hover:shadow-2xl hover:bg-[#E6B800]"
            >
              <CurrencyDollarIcon className="h-5 w-5 md:h-6 md:w-6" />
              BUY ON PRESALE
            </a>
                    <Link
                      to="/whitepaper"
                      className="border-2 border-papa-gold px-6 md:px-8 py-3 rounded-full font-righteous text-base md:text-lg flex items-center justify-center gap-2 bg-white hover:bg-papa-gold hover:border-papa-gold text-papa-dark hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                    >
              <DocumentTextIcon className="h-5 w-5 md:h-6 md:w-6" />
              READ WHITEPAPER
                    </Link>
          </div>

          {/* Contract Address Section */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="bg-white bg-opacity-90 p-4 rounded-xl shadow-lg border-2 border-papa-gold">
              <h3 className="text-sm font-righteous text-papa-dark mb-3 text-center">CONTRACT ADDRESS</h3>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={contractAddress}
                  readOnly
                  className="flex-1 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm font-mono text-gray-700 focus:outline-none"
                />
                <button
                  onClick={copyToClipboard}
                  className="bg-papa-gold hover:bg-[#E6B800] text-papa-dark p-2 rounded-lg transition-all duration-300 flex items-center justify-center"
                  title="Copy to clipboard"
                >
                  <ClipboardDocumentIcon className="h-5 w-5" />
                </button>
                <a
                  href={`https://basescan.org/token/${contractAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-papa-hover hover:bg-blue-700 text-white p-2 rounded-lg transition-all duration-300 flex items-center justify-center"
                  title="View on BaseScan"
                >
                  <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                </a>
              </div>
              {copySuccess && (
                <p className="text-green-600 text-sm text-center mt-2 font-righteous">
                  Address copied to clipboard!
                </p>
              )}
            </div>
          </div>
                </motion.main>

        {/* Features Grid */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="container mx-auto px-4 py-8 md:py-16"
                >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white bg-opacity-90 p-6 md:p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 hover:bg-[#E6B800] hover:shadow-2xl group">
              <div className="text-papa-gold mb-4 group-hover:text-papa-hover transition-colors duration-300">
                <ShieldCheckIcon className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-righteous mb-2 text-papa-dark group-hover:text-papa-dark">Secure & Efficient</h3>
              <p className="text-gray-600 group-hover:text-papa-dark">Built on Base network with advanced security features and optimized gas fees</p>
            </div>
            <div className="bg-white bg-opacity-90 p-6 md:p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 hover:bg-[#E6B800] hover:shadow-2xl group">
              <div className="text-papa-gold mb-4 group-hover:text-papa-hover transition-colors duration-300">
                <FireIcon className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-righteous mb-2 text-papa-dark group-hover:text-papa-dark">Token Inquisition</h3>
              <p className="text-gray-600 group-hover:text-papa-dark">Weekly community-driven token burning events with a maximum cap of 50% of initial supply</p>
            </div>
            <div className="bg-white bg-opacity-90 p-6 md:p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 hover:bg-[#E6B800] hover:shadow-2xl group">
              <div className="text-papa-gold mb-4 group-hover:text-papa-hover transition-colors duration-300">
                <ChartPieIcon className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-righteous mb-2 text-papa-dark group-hover:text-papa-dark">Fair Tokenomics</h3>
              <p className="text-gray-600 group-hover:text-papa-dark">Initial supply of 500B tokens with 100B initial burn and balanced tax structure</p>
            </div>
          </div>
                </motion.section>

        {/* About Us Section */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="container mx-auto px-4 py-8 md:py-16"
                  id="about-us"
                >
          <h2 className="text-3xl md:text-4xl font-righteous mb-8 text-center text-papa-dark">
            ABOUT PAPA CHICO
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-white bg-opacity-90 p-6 md:p-8 rounded-xl shadow-lg">
                <h3 className="text-xl md:text-2xl font-righteous mb-4 text-papa-dark flex items-center gap-2">
                  <RocketLaunchIcon className="h-6 w-6 text-papa-gold" />
                  Launching with Canaveral
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={canaveralLogo}
                    alt="Canaveral Launch"
                    className="h-12 object-contain rounded-xl shadow-md border-2 border-papa-gold bg-white"
                  />
                  <div>
                    <p className="font-righteous text-papa-dark">Canaveral Launch</p>
                    <p className="text-sm text-gray-600">Official MemeBoom Hub Launchpad</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Papa Chico is proudly launching through Canaveral, the premier launchpad of MemeBoom Hub. Canaveral provides a secure, community-focused platform for innovative meme projects on Base blockchain.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <GlobeAltIcon className="h-5 w-5 text-papa-hover" />
                    <a
                      href="https://canaveral.memeboom.pro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-papa-hover underline hover:text-papa-dark transition-colors"
                    >
                      canaveral.memeboom.pro
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <UsersIcon className="h-5 w-5 text-papa-hover" />
                    <a
                      href="https://t.me/canaverallaunch"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-papa-hover underline hover:text-papa-dark transition-colors"
                    >
                      @canaverallaunch
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white bg-opacity-90 p-6 md:p-8 rounded-xl shadow-lg">
                <h3 className="text-xl md:text-2xl font-righteous mb-4 text-papa-dark flex items-center gap-2">
                  <SparklesIcon className="h-6 w-6 text-papa-gold" />
                  Canaveral Advantage
                </h3>
                <p className="text-gray-600 mb-4">
                  As part of the MemeBoom ecosystem, Papa Chico benefits from a robust infrastructure designed specifically for meme token success. Our launchpad ensures:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <ShieldCheckIcon className="h-5 w-5 text-papa-hover" />
                    <span>Advanced tokenomics implementation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <UsersIcon className="h-5 w-5 text-papa-hover" />
                    <span>Access to established meme community</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-papa-hover" />
                    <span>Professional marketing support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BuildingLibraryIcon className="h-5 w-5 text-papa-hover" />
                    <span>Long-term development backing</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white bg-opacity-90 p-6 md:p-8 rounded-xl shadow-lg">
                <h3 className="text-xl md:text-2xl font-righteous mb-4 text-papa-dark flex items-center gap-2">
                  <GiftIcon className="h-6 w-6 text-papa-gold" />
                  Community First Approach
                </h3>
                <p className="text-gray-600 mb-6">
                  Papa Chico combines the fun of meme culture with real utility and community value. Our mission is to create a blessed ecosystem where holders can thrive through:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-papa-gold bg-opacity-10 rounded-lg">
                    <h4 className="font-righteous text-papa-dark mb-2">Fair Launch</h4>
                    <p className="text-sm text-gray-600">Equal opportunity for all believers to join early</p>
                  </div>
                  <div className="p-4 bg-papa-gold bg-opacity-10 rounded-lg">
                    <h4 className="font-righteous text-papa-dark mb-2">Rewards System</h4>
                    <p className="text-sm text-gray-600">Continuous blessings through staking and events</p>
                  </div>
                  <div className="p-4 bg-papa-gold bg-opacity-10 rounded-lg">
                    <h4 className="font-righteous text-papa-dark mb-2">NFT Utilities</h4>
                    <p className="text-sm text-gray-600">Exclusive benefits for NFT holders</p>
                  </div>
                  <div className="p-4 bg-papa-gold bg-opacity-10 rounded-lg">
                    <h4 className="font-righteous text-papa-dark mb-2">DAO Governance</h4>
                    <p className="text-sm text-gray-600">Community-driven decision making</p>
                  </div>
                </div>
              </div>

              <div className="bg-papa-gold bg-opacity-10 p-6 md:p-8 rounded-xl border-2 border-papa-gold">
                <blockquote className="text-xl md:text-2xl font-righteous text-papa-dark italic text-center">
                  "Join the blessed revolution in meme tokens, where faith meets fun and rewards meet reality."
                  <footer className="text-papa-hover mt-2 text-base">— Papa Chico</footer>
                </blockquote>
              </div>
            </div>
          </div>
                </motion.section>

                {/* Technology Section */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="container mx-auto px-4 py-8 md:py-16"
                  id="technology"
                >
                  <h2 className="text-3xl md:text-4xl font-righteous mb-8 text-center text-papa-dark">
                    TECHNOLOGY
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white bg-opacity-90 p-6 md:p-8 rounded-xl shadow-lg"
                    >
                      <h3 className="text-xl md:text-2xl font-righteous mb-4 text-papa-dark flex items-center gap-2">
                        <SparklesIcon className="h-6 w-6 text-papa-gold" />
                        Base Network
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Built on Base, a secure and scalable Ethereum Layer 2 (L2) solution, fully EVM compatible and with low transaction fees. Security is inherited from Ethereum.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                          <CheckCircleIcon className="h-5 w-5 text-papa-hover" />
                          <span>Ethereum L2 (Optimistic Rollup)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircleIcon className="h-5 w-5 text-papa-hover" />
                          <span>Full EVM compatibility</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircleIcon className="h-5 w-5 text-papa-hover" />
                          <span>Low transaction fees</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircleIcon className="h-5 w-5 text-papa-hover" />
                          <span>Security inherited from Ethereum</span>
                        </li>
                      </ul>
                    </motion.div>
                    <div className="bg-white bg-opacity-90 p-6 md:p-8 rounded-xl shadow-lg">
                      <h3 className="text-xl md:text-2xl font-righteous mb-4 text-papa-dark flex items-center gap-2">
                        <ShieldCheckIcon className="h-6 w-6 text-papa-gold" />
                        Smart Contracts
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Our smart contracts are built in Solidity, following the ERC20 standard and using OpenZeppelin libraries for security and reliability.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                          <CheckCircleIcon className="h-5 w-5 text-papa-hover" />
                          <span>Solidity-based smart contracts</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircleIcon className="h-5 w-5 text-papa-hover" />
                          <span>ERC20 Standard (OpenZeppelin)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircleIcon className="h-5 w-5 text-papa-hover" />
                          <span>Ownable for secure ownership management</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircleIcon className="h-5 w-5 text-papa-hover" />
                          <span>Immutable parameters (taxes, tax wallet)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircleIcon className="h-5 w-5 text-papa-hover" />
                          <span>Auditable and transparent code</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Additional Technology Features */}
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-lg">
                      <div className="text-papa-gold mb-4">
                        <BuildingLibraryIcon className="h-10 w-10" />
                      </div>
                      <h3 className="text-lg font-righteous mb-2 text-papa-dark">DeFi Integration</h3>
                      <p className="text-sm text-gray-600">Seamless integration with Base's DeFi ecosystem</p>
                    </div>
                    <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-lg">
                      <div className="text-papa-gold mb-4">
                        <ShieldCheckIcon className="h-10 w-10" />
                      </div>
                      <h3 className="text-lg font-righteous mb-2 text-papa-dark">Security First</h3>
                      <p className="text-sm text-gray-600">Multi-layer security protocols and audits</p>
                    </div>
                    <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-lg">
                      <div className="text-papa-gold mb-4">
                        <SparklesIcon className="h-10 w-10" />
                      </div>
                      <h3 className="text-lg font-righteous mb-2 text-papa-dark">Future-Proof</h3>
                      <p className="text-sm text-gray-600">Designed for scalability and future upgrades</p>
                    </div>
                  </div>
                </motion.section>

        {/* Tokenomics Section */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="container mx-auto px-4 py-8 md:py-16"
                  id="tokenomics"
                >
                  <h2 className="text-3xl md:text-4xl font-righteous mb-8 text-center text-papa-dark">
                    TOKENOMICS
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Token Distribution (restaurar visual anterior) */}
                    <div className="bg-white bg-opacity-90 p-6 md:p-8 rounded-xl shadow-lg">
                      <h3 className="text-xl md:text-2xl font-righteous mb-6 text-papa-dark flex items-center gap-2">
                        <ChartPieIcon className="h-6 w-6 text-papa-gold" />
                        Token Distribution
                      </h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="font-righteous">Total Supply:</span>
                          <span className="font-mono">500,000,000,000 (500B) $CHICO</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <GlobeAltIcon className="h-5 w-5 text-papa-hover" />
                          <a
                            href="https://basescan.org/token/0x51e9476fd6f14ae68b02b47a44d7da60752ffbc9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-papa-hover underline font-righteous hover:text-papa-dark transition-colors"
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
                          <div key={item.name} className={`flex items-center gap-4 p-3 rounded-lg transition-colors ${item.name === 'Development Reserve' ? 'bg-papa-gold bg-opacity-10' : 'hover:bg-papa-gold hover:bg-opacity-10'}`}>
                            <item.icon className="h-5 w-5 text-papa-hover" />
                            <div className="flex-1">
                              <div className="font-righteous text-papa-dark">{item.name}</div>
                              <div className="text-sm text-gray-600">
                                {item.amount} <span className="text-papa-hover">({item.simplified})</span> ({item.percentage})
                              </div>
                              <a
                                href={`https://basescan.org/address/${item.address}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-papa-hover text-xs hover:text-papa-dark transition-colors block mt-1"
                              >
                                {item.address.slice(0, 6)}...{item.address.slice(-4)}
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Tax & Burn Mechanisms (atualizar apenas o conteúdo) */}
                    <div className="bg-white bg-opacity-90 p-6 md:p-8 rounded-xl shadow-lg">
                      <h3 className="text-xl md:text-2xl font-righteous mb-6 text-papa-dark flex items-center gap-2">
                        <FireIcon className="h-6 w-6 text-papa-gold" />
                        Tax & Token Inquisition
                      </h3>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-righteous text-papa-dark mb-3">Transaction Taxes</h4>
                          <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                              <CheckCircleIcon className="h-5 w-5 text-papa-hover" />
                              <span>Buy Tax: 150 (1.5%)</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircleIcon className="h-5 w-5 text-papa-hover" />
                              <span>Sell Tax: 250 (2.5%)</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircleIcon className="h-5 w-5 text-papa-hover" />
                              <span>Weekly Token Inquisition: Community-driven burns</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircleIcon className="h-5 w-5 text-papa-hover" />
                              <span>Taxes calculated using TAX_DENOMINATOR (10000)</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-righteous text-papa-dark mb-3">Fee Exemptions</h4>
                          <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                              <CheckCircleIcon className="h-5 w-5 text-papa-hover" />
                              <span>Contract Owner</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircleIcon className="h-5 w-5 text-papa-hover" />
                              <span>Contract Address</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircleIcon className="h-5 w-5 text-papa-hover" />
                              <span>Tax Wallet</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircleIcon className="h-5 w-5 text-papa-hover" />
                              <span>Liquidity Pair (when set)</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-righteous text-papa-dark mb-3">Token Inquisition Features</h4>
                          <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                              <CheckCircleIcon className="h-5 w-5 text-papa-hover" />
                              <span>Maximum Burn Cap: 50% of initial supply</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircleIcon className="h-5 w-5 text-papa-hover" />
                              <span>Weekly community events every Sunday</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircleIcon className="h-5 w-5 text-papa-hover" />
                              <span>Community voting determines burn amounts</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-righteous text-papa-dark mb-3">Security Features</h4>
                          <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                              <CheckCircleIcon className="h-5 w-5 text-papa-hover" />
                              <span>All tax parameters are immutable after deploy</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircleIcon className="h-5 w-5 text-papa-hover" />
                              <span>Tax wallet address is immutable</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircleIcon className="h-5 w-5 text-papa-hover" />
                              <span>LP buy limit configurable at deploy</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircleIcon className="h-5 w-5 text-papa-hover" />
                              <span>Transfer restrictions if LP not set</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>

        {/* Roadmap Section */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="container mx-auto px-4 py-8 md:py-16"
                  id="roadmap"
                >
          <h2 className="text-3xl md:text-4xl font-righteous mb-8 text-center text-papa-dark">
            ROADMAP TO SALVATION
          </h2>

          {/* Brand Concept */}
          <div className="bg-white bg-opacity-90 p-6 md:p-8 rounded-xl shadow-lg mb-8">
            <h3 className="text-xl md:text-2xl font-righteous mb-6 text-papa-dark flex items-center gap-2">
              <SparklesIcon className="h-6 w-6 text-papa-gold" />
              Brand Identity
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <GiftIcon className="h-5 w-5 text-papa-hover" />
                  <p className="font-righteous text-papa-dark">Slogan: "In Chico We Trust"</p>
                </div>
                <div className="flex items-center gap-3">
                  <SparklesIcon className="h-5 w-5 text-papa-hover" />
                  <p>Style: Comic, friendly, smart, with a touch of playful authority</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <ChartBarIcon className="h-5 w-5 text-papa-hover" />
                  <p>Colors: Golden, white, celestial blue, silver accents</p>
                </div>
                <div className="flex items-center gap-3">
                  <RocketLaunchIcon className="h-5 w-5 text-papa-hover" />
                  <p>Graphics: Refined cartoon style with sophisticated touches</p>
                </div>
              </div>
            </div>
          </div>

          {/* Phase Timeline */}
          <div className="space-y-8">
            {/* Pre-Launch Phase */}
            <div className="bg-white bg-opacity-90 p-6 md:p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-papa-gold rounded-full p-3">
                  <RocketLaunchIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-righteous text-papa-dark">Phase 1: Pre-Launch</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <GiftIcon className="h-5 w-5 text-papa-hover flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-righteous text-papa-dark">Presale Opening</p>
                      <p className="text-gray-600">Early access opportunity for believers to join Papa Chico's mission</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <SparklesIcon className="h-5 w-5 text-papa-hover flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-righteous text-papa-dark">Community Building</p>
                      <p className="text-gray-600">Social media presence, meme contests, community engagement</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                            <BuildingLibraryIcon className="h-5 w-5 text-papa-hover flex-shrink-0 mt-1" />
                    <div>
                              <p className="font-righteous text-papa-dark">Base Integration</p>
                              <p className="text-gray-600">Smart contract development and testing on Base testnet</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                            <ShieldCheckIcon className="h-5 w-5 text-papa-hover flex-shrink-0 mt-1" />
                    <div>
                              <p className="font-righteous text-papa-dark">Security Audit</p>
                              <p className="text-gray-600">Comprehensive audit of smart contracts and token mechanics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Launch Phase */}
            <div className="bg-white bg-opacity-90 p-6 md:p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-papa-gold rounded-full p-3">
                  <FireIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-righteous text-papa-dark">Phase 2: Launch</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <BuildingLibraryIcon className="h-5 w-5 text-papa-hover flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-righteous text-papa-dark">DEX Listings</p>
                      <p className="text-gray-600">Uniswap and BaseSwap listings with fair launch</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <SparklesIcon className="h-5 w-5 text-papa-hover flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-righteous text-papa-dark">NFT Collection</p>
                              <p className="text-gray-600">Papa Chico Blessings Series - Limited edition collectibles on Base</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <GiftIcon className="h-5 w-5 text-papa-hover flex-shrink-0 mt-1" />
                    <div>
                              <p className="font-righteous text-papa-dark">Blessed Events</p>
                              <p className="text-gray-600">"Blessed Sundays" and "Crypto Confessions" AMAs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                            <UsersIcon className="h-5 w-5 text-papa-hover flex-shrink-0 mt-1" />
                    <div>
                              <p className="font-righteous text-papa-dark">Community Growth</p>
                              <p className="text-gray-600">Expanding our presence in the Base ecosystem</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Post-Launch Phase */}
            <div className="bg-white bg-opacity-90 p-6 md:p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-papa-gold rounded-full p-3">
                  <SparklesIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-righteous text-papa-dark">Phase 3: Post-Launch Growth</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <DocumentTextIcon className="h-5 w-5 text-papa-hover flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-righteous text-papa-dark">Papa Chico's Sermons</p>
                      <p className="text-gray-600">Weekly updates, predictions, and reflections</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <GiftIcon className="h-5 w-5 text-papa-hover flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-righteous text-papa-dark">Blessed Events</p>
                      <p className="text-gray-600">"Blessed Sundays" and "Crypto Confessions" AMAs</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <BuildingLibraryIcon className="h-5 w-5 text-papa-hover flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-righteous text-papa-dark">Blessed Staking</p>
                      <p className="text-gray-600">Themed staking pools with enhanced rewards</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <UsersIcon className="h-5 w-5 text-papa-hover flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-righteous text-papa-dark">Strategic Partnerships</p>
                      <p className="text-gray-600">Collaborations with DeFi projects and content creators</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Long-term Vision */}
            <div className="bg-white bg-opacity-90 p-6 md:p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-papa-gold rounded-full p-3">
                  <ChartBarIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-righteous text-papa-dark">Phase 4: Long-term Vision</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <SparklesIcon className="h-5 w-5 text-papa-hover flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-righteous text-papa-dark">Utility Expansion</p>
                      <p className="text-gray-600">Mini-games, crypto marketplace, NFT utilities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <GiftIcon className="h-5 w-5 text-papa-hover flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-righteous text-papa-dark">Social Impact</p>
                      <p className="text-gray-600">NFTs supporting charities and social projects</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <RocketLaunchIcon className="h-5 w-5 text-papa-hover flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-righteous text-papa-dark">Ecosystem Growth</p>
                      <p className="text-gray-600">Cross-chain expansion and DeFi integrations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BuildingLibraryIcon className="h-5 w-5 text-papa-hover flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-righteous text-papa-dark">Community DAO</p>
                      <p className="text-gray-600">Full transition to community governance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Papa's Final Blessing */}
          <div className="mt-12 text-center">
            <blockquote className="text-xl md:text-2xl font-righteous text-papa-dark italic">
              "May your wallets be ever blessed, and your bags be always full!"
              <footer className="text-papa-hover mt-2">— Papa Chico</footer>
            </blockquote>
          </div>
                </motion.section>

        {/* FAQ Section */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="container mx-auto px-4 py-8 md:py-16"
                  id="faq"
                >
          <h2 className="text-3xl md:text-4xl font-righteous mb-8 text-center text-papa-dark">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What is Papa Chico Token?",
                        answer: "Papa Chico ($CHICO) is a next-generation memecoin built on Base that combines meme culture, DeFi tools, NFT utility, and community rewards into a unified Web3 experience. Inspired by the mythical charisma of Papa Chico, the token aims to bless holders with opportunities and passive income."
              },
              {
                question: "How can I get Papa Chico tokens?",
                        answer: "You can acquire $CHICO tokens through multiple ways: participating in the initial airdrop ('Blessings of Papa Chico'), buying on DEX platforms like Raydium and Jupiter after launch, or earning them through community events and missions."
              },
              {
                question: "What makes Papa Chico unique?",
                        answer: "Papa Chico combines humor with real utility on the Base blockchain, featuring weekly Token Inquisition burn events, NFT collections with actual benefits, themed staking pools, and a strong focus on community governance through DAO."
              },
              {
                question: "What are the 'Blessings of Papa Chico' NFTs?",
                answer: "These are limited edition NFTs that grant holders special privileges including boosted staking rewards (up to +50% APR), premium DAO governance access, passive income share from ecosystem revenue, and early access to future launches."
              },
              {
                question: "How does the tokenomics work?",
                answer: "The tokenomics include a 2.5% sell tax and 1.5% buy tax sent to the DAO treasury. Token burns happen weekly through community-driven Token Inquisition events, where holders vote on burn amounts up to 50% of initial supply."
              },
              {
                question: "What is Token Inquisition?",
                answer: "Token Inquisition is Papa Chico's weekly community-driven token burning event held every Sunday. The community votes on burn amounts, creating a deflationary mechanism that's transparent and democratic. This replaces traditional auto-burn with community governance."
              },
              {
                question: "What are 'Blessed Sundays' and 'Crypto Confessions'?",
                answer: "These are regular community events where holders can participate in rewards programs and AMAs. 'Blessed Sundays' features special giveaways and Token Inquisition events, while 'Crypto Confessions' are interactive sessions where the community can share stories and earn rewards."
              },
              {
                question: "How can I participate in the DAO?",
                answer: "Token holders and NFT owners can participate in governance decisions through the DAO, voting on treasury management, project development, and future initiatives. Higher involvement grants more voting power."
              },
              {
                question: "What are the staking benefits?",
                answer: "The 'Blessed Rewards' staking program offers passive income opportunities with enhanced APR for NFT holders. Different pools offer various reward structures, encouraging long-term holding and reducing selling pressure."
              },
              {
                question: "Is there a vesting period for team tokens?",
                answer: "Yes, the founding team's allocation (5% of total supply) is subject to a 24-month vesting period to ensure long-term commitment and align interests with the community."
              },
              {
                question: "What are the future plans for Papa Chico?",
                answer: "The roadmap includes expanding utility through mini-games, marketplace development, cross-chain integration, strategic partnerships, and social impact initiatives through charity-focused NFTs."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-90 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <QuestionMarkCircleIcon className="h-6 w-6 text-papa-hover flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-righteous text-lg md:text-xl text-papa-dark mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Support Links */}
          <div className="mt-12 text-center">
            <p className="text-xl font-righteous text-papa-dark mb-6">
              Still have questions?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/whitepaper"
                className="inline-flex items-center gap-2 px-6 py-3 bg-papa-gold rounded-full font-righteous hover:bg-papa-hover text-papa-dark hover:text-white transition-all duration-300"
              >
                <DocumentTextIcon className="h-5 w-5" />
                Read Whitepaper
              </Link>
              <a
                href="https://telegram.memeboom.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-papa-gold rounded-full font-righteous hover:bg-papa-hover hover:border-papa-hover text-papa-dark hover:text-white transition-all duration-300"
              >
                <UsersIcon className="h-5 w-5" />
                Join Community
              </a>
            </div>
          </div>
                </motion.section>
      </div>
            </div>
          </div>
        } />
        <Route path="/whitepaper" element={<Whitepaper />} />
        <Route path="/whitelist" element={<Whitelist />} />
        <Route path="/audit" element={<Audit />} />
      </Routes>

      {/* Enhanced Back to Top Button */}
      <AnimatePresence>
      {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-papa-gold p-4 rounded-full shadow-lg hover:bg-papa-hover text-papa-dark hover:text-white transition-all duration-300 transform hover:scale-110 z-50 flex items-center gap-2"
          aria-label="Back to top"
        >
            <ChevronUpIcon className="h-6 w-6" />
            <span className="font-righteous">TOP</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-righteous text-papa-dark">{modalContent.title}</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-papa-hover"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <p className="text-gray-600 mb-4">{modalContent.content}</p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-papa-gold py-2 rounded-lg font-righteous text-papa-dark hover:bg-papa-hover hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white bg-opacity-90 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Logo and Description */}
            <div className="text-center md:text-left">
              <img src={logo} alt="Papa Chico" className="h-12 md:h-16 mx-auto md:mx-0 mb-4 rounded-full shadow-lg border-2 border-papa-gold bg-white" />
              <p className="text-gray-600 mb-4">
                Your Path to Crypto Salvation
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <img
                  src={canaveralLogo}
                  alt="Canaveral Launch"
                  className="h-8 object-contain rounded-xl shadow-md border-2 border-papa-gold bg-white"
                />
                <span className="text-sm text-gray-600">Powered by Canaveral Launch</span>
    </div>
            </div>

            {/* Security Badges */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white p-4 rounded-xl shadow-lg flex items-center gap-2">
                  <ShieldCheckIcon className="h-6 w-6 text-papa-gold" />
                  <span className="text-sm font-righteous text-papa-dark">Audited</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg flex items-center gap-2">
                  <LockClosedIcon className="h-6 w-6 text-papa-gold" />
                  <span className="text-sm font-righteous text-papa-dark">Verified</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg flex items-center gap-2">
                  <DocumentCheckIcon className="h-6 w-6 text-papa-gold" />
                  <span className="text-sm font-righteous text-papa-dark">KYC</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white p-4 rounded-xl shadow-lg flex items-center gap-2">
                  <BuildingLibraryIcon className="h-6 w-6 text-papa-gold" />
                  <span className="text-sm font-righteous text-papa-dark">ERC20 Token</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg flex items-center gap-2">
                  <SparklesIcon className="h-6 w-6 text-papa-gold" />
                  <span className="text-sm font-righteous text-papa-dark">Base</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex flex-wrap justify-center md:justify-end gap-4">
                <Link to="/whitepaper" className="text-gray-600 hover:text-papa-hover transition-colors">
                  Whitepaper
                </Link>
                <a href="https://telegram.memeboom.pro" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-papa-hover transition-colors">
                  Telegram
                </a>
                <button onClick={() => openModal('terms')} className="text-gray-600 hover:text-papa-hover transition-colors">
                  Terms of Service
                </button>
                <button onClick={() => openModal('privacy')} className="text-gray-600 hover:text-papa-hover transition-colors">
                  Privacy Policy
                </button>
                <a href="https://telegram.memeboom.pro" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-papa-hover transition-colors">
                  Contact
                </a>
              </div>
              <p className="text-sm text-gray-500">
                © 2025 Papa Chico Token. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;