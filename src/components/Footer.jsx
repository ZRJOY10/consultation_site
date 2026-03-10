import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiLinkedin, FiYoutube, FiTwitter } from 'react-icons/fi'
import { HiAcademicCap } from 'react-icons/hi'

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
  return (
    <footer className="relative bg-[#080e1a] border-t border-white/[0.04] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-600/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.04]">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
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
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              Your trusted partner for study abroad, visa processing, and scholarship guidance. Helping students achieve their global education dreams since 2010.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-500 hover:text-white hover:bg-sky-600/10 hover:border-sky-500/20 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ label, path }) => (
                  <li key={label}>
                    <Link
                      to={path}
                      className="text-sm text-slate-500 hover:text-slate-300 hover:translate-x-1 inline-block transition-all duration-200"
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-b border-white/[0.04]">
          {[
            { icon: FiPhone, label: 'Call Us', value: '+61 2 3456 7890', href: 'tel:+61234567890' },
            { icon: FiMail, label: 'Email Us', value: 'info@counsil.com.au', href: 'mailto:info@counsil.com.au' },
            { icon: FiMapPin, label: 'Visit Us', value: '123 Collins St, Melbourne VIC 3000', href: '#' },
          ].map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-sky-600/[0.08] border border-sky-500/15 flex items-center justify-center text-sky-400 group-hover:bg-sky-600/15 transition-colors">
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-slate-600">{label}</p>
                <p className="text-sm text-slate-400 group-hover:text-white transition-colors">{value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Counsil Global Education. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-600">
            <Link to="#" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-slate-400 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
