import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiLinkedin, FiYoutube, FiTwitter } from 'react-icons/fi'
import { HiAcademicCap } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'

const footerLinks = {
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Our Team', path: '/about' },
    { label: 'Testimonials', path: '/student-success' },
    { label: 'Blog', path: '/blog' },
    { label: 'Careers', path: '/contact' },
  ],
  services: [
    { label: 'Study Abroad Counselling', path: '/services' },
    { label: 'Visa Processing', path: '/services' },
    { label: 'Scholarship Assistance', path: '/services' },
    { label: 'PTE Training', path: '/pte-training' },
    { label: 'Migration Advice', path: '/services' },
  ],
  destinations: [
    { label: 'Australia', path: '/destinations/australia' },
    { label: 'Canada', path: '/destinations/canada' },
    { label: 'United Kingdom', path: '/destinations/uk' },
    { label: 'United States', path: '/destinations/usa' },
    { label: 'New Zealand', path: '/destinations/new-zealand' },
    { label: 'Malta', path: '/destinations/malta' },
  ],
}

const socials = [
  { icon: FiFacebook, href: '#', label: 'Facebook' },
  { icon: FiInstagram, href: '#', label: 'Instagram' },
  { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FiYoutube, href: '#', label: 'YouTube' },
  { icon: FiTwitter, href: '#', label: 'Twitter' },
]

export default function Footer() {
  const { isDark } = useTheme()

  return (
    <footer className={`relative overflow-hidden border-t transition-colors duration-300 ${
      isDark
        ? 'bg-copper-950 border-copper-600/20'
        : 'bg-copper-100/70 border-copper-300/40'
    }`}>
      {/* Glow */}
      <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
        isDark ? 'bg-copper-600/[0.03]' : 'bg-copper-400/[0.04]'
      }`} />
      <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
        isDark ? 'bg-copper-600/[0.02]' : 'bg-copper-300/[0.03]'
      }`} />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top section */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b ${
          isDark ? 'border-white/[0.04]' : 'border-copper-200/30'
        }`}>
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-10 h-10">
                <div className={`absolute inset-0 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300 ${
                  isDark ? 'bg-copper-700' : 'bg-copper-700'
                }`} />
                <div className={`absolute inset-0 rounded-xl flex items-center justify-center bg-gradient-to-br ${
                  isDark ? 'from-copper-600 to-copper-500' : 'from-copper-600 to-copper-500'
                }`}>
                  <HiAcademicCap className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <span className={`text-xl font-bold font-poppins ${isDark ? 'text-white' : 'text-copper-900'}`}>
                  Global <span className="gradient-text">Talent</span>
                </span>
                <p className={`text-xs leading-none ${isDark ? 'text-slate-500' : 'text-copper-600/60'}`}>Study Abroad Experts</p>
              </div>
            </Link>
            <p className={`text-sm leading-relaxed mb-6 max-w-xs ${isDark ? 'text-slate-500' : 'text-copper-700/60'}`}>
              Your trusted partner for study abroad, visa processing, and scholarship guidance. Helping students achieve their global education dreams since 2010.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-200 ${
                    isDark
                      ? 'bg-white/[0.04] border-white/[0.06] text-slate-500 hover:text-white hover:bg-copper-600/10 hover:border-copper-500/20'
                      : 'bg-copper-50 border-copper-200/40 text-copper-500 hover:text-copper-800 hover:bg-copper-100 hover:border-copper-300/40'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className={`text-sm font-semibold mb-4 uppercase tracking-wider ${
                isDark ? 'text-white' : 'text-copper-900'
              }`}>
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ label, path }) => (
                  <li key={label}>
                    <Link
                      to={path}
                      className={`text-sm hover:translate-x-1 inline-block transition-all duration-200 ${
                        isDark ? 'text-slate-500 hover:text-slate-300' : 'text-copper-600/60 hover:text-copper-800'
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-b ${
          isDark ? 'border-white/[0.04]' : 'border-copper-200/30'
        }`}>
          {[
            { icon: FiPhone, label: 'Call Us', value: '+61 2 3456 7890', href: 'tel:+61234567890' },
            { icon: FiMail, label: 'Email Us', value: 'info@globaltalent.com.au', href: 'mailto:info@globaltalent.com.au' },
            { icon: FiMapPin, label: 'Visit Us', value: '123 Collins St, Melbourne VIC 3000', href: '#' },
          ].map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} className="flex items-center gap-3 group">
              <div className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-colors ${
                isDark
                  ? 'bg-copper-600/[0.08] border-copper-500/15 text-copper-400 group-hover:bg-copper-600/15'
                  : 'bg-copper-100/60 border-copper-200/40 text-copper-600 group-hover:bg-copper-100'
              }`}>
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <p className={`text-xs ${isDark ? 'text-slate-600' : 'text-copper-500/60'}`}>{label}</p>
                <p className={`text-sm transition-colors ${
                  isDark ? 'text-slate-400 group-hover:text-white' : 'text-copper-700/70 group-hover:text-copper-900'
                }`}>{value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`text-xs ${isDark ? 'text-slate-600' : 'text-copper-500/50'}`}>
            © {new Date().getFullYear()} Global Talent Education. All rights reserved.
          </p>
          <div className={`flex items-center gap-6 text-xs ${isDark ? 'text-slate-600' : 'text-copper-500/50'}`}>
            <Link to="#" className={`transition-colors ${isDark ? 'hover:text-slate-400' : 'hover:text-copper-700'}`}>Privacy Policy</Link>
            <Link to="#" className={`transition-colors ${isDark ? 'hover:text-slate-400' : 'hover:text-copper-700'}`}>Terms of Service</Link>
            <Link to="#" className={`transition-colors ${isDark ? 'hover:text-slate-400' : 'hover:text-copper-700'}`}>Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
