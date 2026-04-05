import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiChevronDown, FiMail, FiSun, FiMoon, FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa6'
import { useTheme } from '../context/ThemeContext'
import mainLogo from '../assets/images/logo.png'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services', path: '/services',
    sub: [
      { label: 'Study Abroad Counselling', path: '/services' },
      { label: 'Visa Processing', path: '/services' },
      { label: 'Scholarship Guidance', path: '/services' },
      { label: 'PTE Training', path: '/pte-training' },
      { label: 'Career Counselling', path: '/services' },
      { label: 'Migration Advice', path: '/services' },
    ]
  },
  {
    label: 'Destinations', path: '/destinations',
    sub: [
      { label: '🇦🇺 Australia', path: '/destinations/australia' },
      { label: '🇨🇦 Canada', path: '/destinations/canada' },
      { label: '🇬🇧 United Kingdom', path: '/destinations/uk' },
      { label: '🇺🇸 United States', path: '/destinations/usa' },
      { label: '🇳🇿 New Zealand', path: '/destinations/new-zealand' },
      { label: '🇲🇹 Malta', path: '/destinations/malta' },
    ]
  },
  { label: 'Universities', path: '/universities' },
  // { label: 'Success Stories', path: '/student-success' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

const socialLinks = [
  { icon: FiFacebook, href: 'https://www.facebook.com/share/1HyZANYn9a/?mibextid=wwXIfr', label: 'Facebook' },
  { icon: FiInstagram, href: 'https://www.instagram.com/global_talent/', label: 'Instagram' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/company/global-talent', label: 'LinkedIn' },
  { icon: FiYoutube, href: 'https://www.youtube.com/@GlobalTalent', label: 'YouTube' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()
  const dropdownRef = useRef(null)
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location])

  const isActive = (path) => location.pathname === path

  return (
    <>
      {/* Top bar */}
      <div className={`hidden lg:block border-b backdrop-blur-sm transition-colors duration-300 ${
        isDark ? 'bg-copper-950/80 border-copper-600/20' : 'bg-copper-100/80 border-copper-300/30'
      }`}>
        <div className={`max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-xs ${
          isDark ? 'text-slate-500' : 'text-copper-700/60'
        }`}>
          <div className="flex items-center gap-4 xl:gap-6">
            <a
              href="https://wa.me/61414248167"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-1.5 transition-colors ${
                isDark ? 'hover:text-green-400' : 'hover:text-green-700'
              }`}
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp className="w-3.5 h-3.5" /> +61 414 248 167
            </a>
            <a href="mailto:info@globaltalentedu.au" className={`flex items-center gap-1.5 transition-colors ${
              isDark ? 'hover:text-slate-300' : 'hover:text-copper-800'
            }`}>
              <FiMail className="w-3 h-3" /> info@globaltalentedu.au
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span>Mon - Sat: 9AM - 6PM</span>
            <span className={`w-1 h-1 rounded-full ${isDark ? 'bg-slate-600' : 'bg-copper-400/40'}`} />
            <span className={isDark ? 'text-copper-400/70' : 'text-copper-600'}>Free consultation available</span>
            <span className={`w-1 h-1 rounded-full ${isDark ? 'bg-slate-600' : 'bg-copper-400/40'}`} />
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={`w-6 h-6 rounded-md border flex items-center justify-center transition-all duration-200 ${
                    isDark
                      ? 'bg-white/[0.03] border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.08]'
                      : 'bg-copper-50 border-copper-300/40 text-copper-700 hover:text-copper-900 hover:bg-copper-100'
                  }`}
                >
                  <Icon className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? isDark
            ? 'bg-copper-950/95 backdrop-blur-xl shadow-lg border-b border-copper-600/20'
            : 'bg-copper-100/90 backdrop-blur-xl shadow-md border-b border-copper-300/30'
          : 'bg-transparent'
      }`}>
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className={`rounded-xl transition-all duration-300 ${
                isDark ? '' : 'bg-copper-900/95 ring-1 ring-copper-700/40 px-2 py-1 shadow-sm'
              }`}>
                <img
                  src={mainLogo}
                  alt="Global Talent"
                  className="h-11 sm:h-12 lg:h-14 w-auto max-w-[170px] sm:max-w-[230px] lg:max-w-[280px] object-contain"
                  loading="eager"
                />
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.label} className="relative" ref={activeDropdown === link.label ? dropdownRef : null}>
                  {link.sub ? (
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive(link.path)
                          ? isDark ? 'text-white bg-white/10' : 'text-copper-900 bg-copper-600/10'
                          : isDark ? 'text-white/70 hover:text-white hover:bg-white/5' : 'text-copper-800/70 hover:text-copper-900 hover:bg-copper-100/50'
                      }`}
                      onMouseEnter={() => setActiveDropdown(link.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {link.label}
                      <FiChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                      {/* Dropdown */}
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className={`absolute top-full left-0 mt-2 w-56 backdrop-blur-xl rounded-xl shadow-lg overflow-hidden ${
                              isDark ? 'bg-copper-900/95 border border-copper-600/30' : 'bg-copper-50/95 border border-copper-300/30'
                            }`}
                          >
                            {link.sub.map((sub) => (
                              <Link
                                key={sub.label}
                                to={sub.path}
                                className={`flex items-center gap-2 px-4 py-3 text-sm transition-all duration-150 last:border-none ${
                                  isDark
                                    ? 'text-slate-400 hover:text-white hover:bg-white/[0.04] border-b border-white/[0.04]'
                                    : 'text-copper-700/70 hover:text-copper-900 hover:bg-copper-50 border-b border-copper-100/50'
                                }`}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive(link.path)
                          ? isDark ? 'text-white bg-white/10' : 'text-copper-900 bg-copper-600/10'
                          : isDark ? 'text-white/70 hover:text-white hover:bg-white/5' : 'text-copper-800/70 hover:text-copper-900 hover:bg-copper-100/50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Theme toggle + CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-xl transition-all duration-300 ${
                  isDark
                    ? 'bg-white/5 border border-white/10 text-slate-400 hover:text-copper-400 hover:bg-white/10'
                    : 'bg-copper-50 border border-copper-200/30 text-copper-600 hover:text-copper-700 hover:bg-copper-100'
                }`}
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDark ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
              </button>

              <Link to="/book-consultation" className="hidden sm:inline-flex btn-primary text-sm px-5 py-2.5">
                Book Free Consultation
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`xl:hidden p-2 rounded-lg transition-colors ${
                  isDark
                    ? 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                    : 'bg-copper-50 border border-copper-200/30 text-copper-800 hover:bg-copper-100'
                }`}
              >
                {mobileOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`xl:hidden backdrop-blur-xl overflow-hidden ${
                isDark ? 'bg-copper-950/98 border-t border-copper-600/20' : 'bg-copper-50/98 border-t border-copper-300/30'
              }`}
            >
              <div className="px-6 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive(link.path)
                          ? isDark ? 'text-white bg-copper-600/10 border border-copper-500/20' : 'text-copper-900 bg-copper-600/10 border border-copper-500/20'
                          : isDark ? 'text-slate-400 hover:text-white hover:bg-white/[0.04]' : 'text-copper-700/70 hover:text-copper-900 hover:bg-copper-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                    {link.sub && (
                      <div className={`ml-4 mt-1 space-y-1 border-l pl-4 ${
                        isDark ? 'border-white/[0.06]' : 'border-copper-200/30'
                      }`}>
                        {link.sub.map(sub => (
                          <Link
                            key={sub.label}
                            to={sub.path}
                            className={`block px-3 py-2 text-xs transition-colors ${
                              isDark ? 'text-slate-500 hover:text-slate-300' : 'text-copper-600/50 hover:text-copper-800'
                            }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
                <div className={`pt-4 border-t ${isDark ? 'border-white/[0.06]' : 'border-copper-200/20'}`}>
                  <Link to="/book-consultation" className="btn-primary w-full justify-center text-sm">
                    Book Free Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
