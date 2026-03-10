import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiGlobe, FiFileText, FiDollarSign, FiBriefcase, FiHome, FiBook } from 'react-icons/fi'
import AnimatedSection from '../AnimatedSection'

const services = [
  {
    icon: FiGlobe,
    title: 'Study Abroad Counselling',
    description: 'Personalized guidance to choose the right country, university and course that aligns with your career goals.',
    link: '/services',
    color: 'from-blue-600 to-blue-400',
    features: ['Course selection', 'University shortlisting', 'Application support'],
  },
  {
    icon: FiFileText,
    title: 'Visa Processing',
    description: 'Complete visa application management from documentation to interview preparation with a 98% success rate.',
    link: '/services',
    color: 'from-green-600 to-green-400',
    features: ['Document checklist', 'SOP writing', 'Mock interviews'],
  },
  {
    icon: FiDollarSign,
    title: 'Scholarship Assistance',
    description: 'We identify and help you apply for scholarships worth thousands. Our students have won $5M+ in grants.',
    link: '/services',
    color: 'from-amber-600 to-amber-400',
    features: ['Scholarship search', 'Essay writing', 'Application review'],
  },
  {
    icon: FiBriefcase,
    title: 'Career Counselling',
    description: 'Strategic career planning to ensure your international degree translates to maximum career growth.',
    link: '/services',
    color: 'from-purple-600 to-purple-400',
    features: ['Career mapping', 'CV preparation', 'LinkedIn optimization'],
  },
  {
    icon: FiHome,
    title: 'Migration Advice',
    description: 'Expert PR and migration pathways. We help you plan strategically for permanent residency.',
    link: '/services',
    color: 'from-rose-600 to-rose-400',
    features: ['PR pathways', 'Points assessment', 'Migration planning'],
  },
  {
    icon: FiBook,
    title: 'PTE / IELTS Training',
    description: 'Score-boosting preparation courses with experienced trainers. Get the score you need, guaranteed.',
    link: '/pte-training',
    color: 'from-cyan-600 to-cyan-400',
    features: ['Mock tests', '1-on-1 coaching', 'Score guarantee'],
  },
]

export default function ServicesSection() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-green-600/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="section-title mb-4">
            Everything You Need to <span className="gradient-text">Study Abroad</span>
          </h2>
          <p className="section-subtitle">
            From initial consultation to landing at your dream university – we handle every step of your journey.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description, link, color, features }, i) => (
            <AnimatedSection key={title} delay={i * 0.1}>
              <Link to={link}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="glass-card-hover p-8 h-full group relative overflow-hidden"
                >
                  {/* BG gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none`} />

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} p-0.5 mb-6 shadow-lg`}>
                    <div className="w-full h-full bg-[#0f172a] rounded-2xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-xs text-slate-500">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${color}`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className={`flex items-center gap-2 text-sm font-medium bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                    Learn more <FiArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
