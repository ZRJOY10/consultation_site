import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiChevronDown, FiPhone, FiMail } from 'react-icons/fi'
import { HiAcademicCap } from 'react-icons/hi'

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
  { label: 'Success Stories', path: '/student-success' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()
  const dropdownRef = useRef(null)

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
      <div className="hidden lg:block bg-[#080e1a]/80 border-b border-white/[0.04] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-xs text-slate-500">
          <div className="flex items-center gap-6">
            <a href="tel:+61234567890" className="flex items-center gap-1.5 hover:text-slate-300 transition-colors">
              <FiPhone className="w-3 h-3" /> +61 2 3456 7890
            </a>
            <a href="mailto:info@counsil.com.au" className="flex items-center gap-1.5 hover:text-slate-300 transition-colors">
              <FiMail className="w-3 h-3" /> info@counsil.com.au
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span>Mon - Sat: 9AM - 6PM</span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span className="text-sky-400/70">Free consultation available</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0c1222]/95 backdrop-blur-xl shadow-lg border-b border-white/[0.04]' : 'bg-transparent'
      }`}>
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-sky-700 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-sky-600 to-sky-500 rounded-xl flex items-center justify-center">
                  <HiAcademicCap className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold font-poppins text-white">
                  Coun<span className="gradient-text">sil</span>
                </span>
                <p className="text-xs text-slate-500 leading-none">Global Education</p>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.label} className="relative" ref={activeDropdown === link.label ? dropdownRef : null}>
                  {link.sub ? (
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive(link.path) ? 'text-white bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/5'
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
                            className="absolute top-full left-0 mt-2 w-56 bg-[#111827]/95 backdrop-blur-xl rounded-xl border border-white/[0.07] shadow-lg overflow-hidden"
                          >
                            {link.sub.map((sub) => (
                              <Link
                                key={sub.label}
                                to={sub.path}
                                className="flex items-center gap-2 px-4 py-3 text-sm text-slate-400 hover:text-white hover:bg-white/[0.04] transition-all duration-150 border-b border-white/[0.04] last:border-none"
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
                        isActive(link.path) ? 'text-white bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link to="/book-consultation" className="hidden sm:inline-flex btn-primary text-sm px-5 py-2.5">
                Book Free Consultation
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="xl:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
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
              className="xl:hidden bg-[#0c1222]/98 backdrop-blur-xl border-t border-white/[0.04] overflow-hidden"
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
                        isActive(link.path) ? 'text-white bg-sky-600/10 border border-sky-500/20' : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      {link.label}
                    </Link>
                    {link.sub && (
                      <div className="ml-4 mt-1 space-y-1 border-l border-white/[0.06] pl-4">
                        {link.sub.map(sub => (
                          <Link
                            key={sub.label}
                            to={sub.path}
                            className="block px-3 py-2 text-xs text-slate-500 hover:text-slate-300 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
                <div className="pt-4 border-t border-white/[0.06]">
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
