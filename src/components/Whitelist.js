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
  DocumentCheckIcon
} from '@heroicons/react/24/outline';
import { FaTelegram, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import logo from '../logo1.png';
import genesisImage from '../genesis.jpg';
import vaticanRingImage from '../vaticanring.jpg';

function Whitelist() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className="min-h-screen bg-gradient-to-b from-papa-yellow to-white font-fredoka">
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
                  <Link
                    key={item.text}
                    to={`/#${item.text.toLowerCase().replace(' ', '-')}`}
                    className="font-righteous flex items-center gap-2 text-papa-dark hover:text-papa-hover transition-colors duration-300"
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
                className="bg-papa-gold bg-opacity-50 px-4 py-2 rounded-full font-righteous text-sm flex items-center gap-1 text-papa-dark hover:bg-papa-gold transition-all duration-300"
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
              className="hidden md:flex bg-papa-gold bg-opacity-50 px-6 py-2 rounded-full font-righteous items-center gap-2 text-papa-dark hover:bg-papa-gold transition-all duration-300"
            >
              <CurrencyDollarIcon className="h-5 w-5" />
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
                  <Link
                    key={item.text}
                    to={`/#${item.text.toLowerCase().replace(' ', '-')}`}
                    className="font-righteous flex items-center gap-2 text-papa-dark hover:text-papa-hover transition-colors duration-300 py-2"
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
        {/* Content Container */}
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block"
            >
              <h1 className="text-3xl md:text-4xl font-righteous mb-3 text-papa-dark relative">
                NFT COLLECTION
                <motion.div
                  className="absolute -top-3 -right-3 text-papa-gold"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <SparklesIcon className="h-6 w-6" />
                </motion.div>
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto"
            >
              Join the exclusive circle of Papa Chico believers and unlock premium benefits
            </motion.p>
          </motion.div>

          {/* NFT Collection Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Genesis Ring */}
              <motion.div
                className="bg-white bg-opacity-90 p-6 rounded-xl shadow-lg transform hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-4">
                  <motion.div
                    className="relative group aspect-square max-w-[300px] mx-auto"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-papa-gold opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300" />
                    <img
                      src={genesisImage}
                      alt="Genesis Ring"
                      className="w-full h-full object-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                    />
                    <motion.div
                      className="absolute top-3 right-3 bg-papa-gold text-white px-3 py-1.5 rounded-full font-righteous text-sm"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      Limited: 777
                    </motion.div>
                  </motion.div>

                  <div className="space-y-4">
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <SparklesIcon className="h-6 w-6 text-papa-gold animate-pulse" />
                      <h2 className="text-xl md:text-2xl font-righteous text-papa-dark">
                        NFT Genesis: Ring of Saint Chico
                      </h2>
                    </motion.div>
                    <p className="text-sm text-gray-600">
                      A symbol of origin, legacy, and elite status within the Papa Chico ecosystem.
                    </p>
                    <div className="space-y-2">
                      {[
                        { icon: CurrencyDollarIcon, text: "Premium Staking Boost: Up to +50% APR in $CHICO staking pools" },
                        { icon: UsersIcon, text: "DAO Governance: 3x voting power compared to regular holders" },
                        { icon: GiftIcon, text: "Passive Revenue Share: Quarterly ecosystem revenue distribution" },
                        { icon: RocketLaunchIcon, text: "Launchpad Access: Priority allocation in future token/NFT launches" },
                        { icon: SparklesIcon, text: "Exclusive Airdrops: Dedicated distributions of future collections" },
                        { icon: ShieldCheckIcon, text: "Private Events & Whitelist Access: Early access to all Papa Chico experiences" }
                      ].map((benefit, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-2 p-2 rounded-lg hover:bg-papa-gold hover:bg-opacity-10 transition-colors duration-300"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <benefit.icon className="h-5 w-5 text-papa-hover flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-600">{benefit.text}</p>
                        </motion.div>
                      ))}
                    </div>
                    <motion.div
                      className="bg-papa-gold bg-opacity-10 p-3 rounded-lg border-2 border-papa-gold"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-sm text-papa-dark italic">
                        "Owning this NFT means being part of Papa Chico's founding circle — a symbol of honor, reward, and lasting advantage."
                      </p>
                    </motion.div>
                    <motion.button
                      className="w-full bg-papa-gold bg-opacity-50 py-2 rounded-lg font-righteous text-papa-dark flex items-center justify-center gap-2 cursor-not-allowed"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      disabled
                    >
                      <CurrencyDollarIcon className="h-5 w-5" />
                      BUY SOON
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Vatican Ring */}
              <motion.div
                className="bg-white bg-opacity-90 p-6 rounded-xl shadow-lg transform hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-4">
                  <motion.div
                    className="relative group aspect-square max-w-[300px] mx-auto"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-papa-gold opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300" />
                    <img
                      src={vaticanRingImage}
                      alt="Vatican Ring"
                      className="w-full h-full object-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                    />
                    <motion.div
                      className="absolute top-3 right-3 bg-papa-gold text-white px-3 py-1.5 rounded-full font-righteous text-sm"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      Limited: 1,000
                    </motion.div>
                  </motion.div>

                  <div className="space-y-4">
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <SparklesIcon className="h-6 w-6 text-papa-gold animate-pulse" />
                      <h2 className="text-xl md:text-2xl font-righteous text-papa-dark">
                        Vatican Ring NFT
                      </h2>
                    </motion.div>
                    <p className="text-sm text-gray-600">
                      A symbol of faith, support, and engagement with Papa Chico's mission.
                    </p>
                    <div className="space-y-2">
                      {[
                        { icon: CurrencyDollarIcon, text: "Staking Boost: Up to +25% APR in $CHICO staking pools" },
                        { icon: UsersIcon, text: "DAO Governance: Standard voting power (1x)" },
                        { icon: GiftIcon, text: "Seasonal Airdrops: Access to periodic community distributions" },
                        { icon: ChartBarIcon, text: "Community Mission Access: Earn rewards through engagement activities" },
                        { icon: ShieldCheckIcon, text: "Level 2 Whitelist: Secondary access to mints and collaborations" }
                      ].map((benefit, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-2 p-2 rounded-lg hover:bg-papa-gold hover:bg-opacity-10 transition-colors duration-300"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <benefit.icon className="h-5 w-5 text-papa-hover flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-600">{benefit.text}</p>
                        </motion.div>
                      ))}
                    </div>
                    <motion.div
                      className="bg-papa-gold bg-opacity-10 p-3 rounded-lg border-2 border-papa-gold"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-sm text-papa-dark italic">
                        "Created for those who believe and wish to walk alongside Papa Chico's journey with blessings and rewards."
                      </p>
                    </motion.div>
                    <motion.button
                      className="w-full bg-papa-gold bg-opacity-50 py-2 rounded-lg font-righteous text-papa-dark flex items-center justify-center gap-2 cursor-not-allowed"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      disabled
                    >
                      <CurrencyDollarIcon className="h-5 w-5" />
                      BUY SOON
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Strategic Notes Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-lg transform hover:shadow-2xl transition-all duration-300">
              <motion.h2
                className="text-xl md:text-2xl font-righteous text-papa-dark mb-4 flex items-center gap-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <ChartBarIcon className="h-6 w-6 text-papa-gold animate-pulse" />
                Strategic Notes
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  {[
                    "All NFTs will be minted on-chain with metadata stored on IPFS",
                    "No additional Genesis NFTs (Ring of Saint Chico) will be created"
                  ].map((note, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-2 p-2 rounded-lg hover:bg-papa-gold hover:bg-opacity-10 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircleIcon className="h-5 w-5 text-papa-hover flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600">{note}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="space-y-2">
                  {[
                    "Both NFTs are tradable, with rarity tracked via blockchain",
                    "Utility will expand with ecosystem growth (staking dApps, games, products, governance dApps)"
                  ].map((note, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-2 p-2 rounded-lg hover:bg-papa-gold hover:bg-opacity-10 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircleIcon className="h-5 w-5 text-papa-hover flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600">{note}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-lg transform hover:shadow-2xl transition-all duration-300">
              <motion.h2
                className="text-xl md:text-2xl font-righteous text-papa-dark mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Join Our Community
              </motion.h2>
              <div className="flex justify-center gap-6">
                {[
                  {
                    icon: GlobeAltIcon,
                    link: "https://papachico.top",
                    label: "Website"
                  },
                  {
                    icon: EnvelopeIcon,
                    link: "mailto:contact@papachico.top",
                    label: "Email"
                  },
                  {
                    icon: FaTelegram,
                    link: "https://t.me/MEMEBOOMCOMUNIDADE",
                    label: "Telegram"
                  },
                  {
                    icon: FaXTwitter,
                    link: "https://twitter.com/memeboomhub",
                    label: "Twitter"
                  }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-papa-gold bg-opacity-10 rounded-full transform hover:scale-110 transition-all duration-300 hover:bg-papa-gold hover:bg-opacity-20"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6 text-papa-dark" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

export default Whitelist;