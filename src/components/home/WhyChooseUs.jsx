import { motion } from 'framer-motion'
import { FiCheckCircle, FiTrendingUp, FiShield, FiBook, FiUsers, FiAward, FiGlobe } from 'react-icons/fi'
import AnimatedSection from '../AnimatedSection'
import SectionBadge from '../SectionBadge'
import { useTheme } from '../../context/ThemeContext'

const features = [
  {
    icon: FiShield,
    title: 'Highest Visa Success',
    description: 'Our expert visa counsellors ensure every application is flawless. Our success rate is a testament to our meticulous preparation and personalized approach.',
    color: 'from-copper-600 to-copper-400',
    glow: 'blue',
    stat: '98%',
  },
  {
    icon: FiGlobe,
    title: 'Global Universities',
    description: 'Partnerships with top-ranked universities across Australia, Canada, UK, USA, NZ and Malta.',
    color: 'from-copper-600 to-copper-400',
    glow: 'purple',
    stat: '200+',
  },
  {
    icon: FiUsers,
    title: 'Expert Counsellors',
    description: 'Certified education advisors with experience guiding students to their dream universities.',
    color: 'from-copper-600 to-copper-400',
    glow: 'cyan',
    stat: '50+',
  },
  {
    icon: FiAward,
    title: 'Scholarship Guidance',
    description: 'We\'ve helped students win scholarships. Our team knows exactly how to get you funded.',
    color: 'from-copper-600 to-copper-400',
    glow: 'amber',
    stat: '$5M+',
  },
  {
    icon: FiTrendingUp,
    title: 'Career Support',
    description: 'Post-study work visa guidance, PR pathways, and career counselling to maximize your global opportunities.',
    color: 'from-copper-600 to-copper-400',
    glow: 'green',
    stat: '100%',
  },
  {
    icon: FiBook,
    title: 'PTE / IELTS Prep',
    description: 'Dedicated test prep programs with expert instructors. Average student score improvement of 2 bands.',
    color: 'from-copper-600 to-copper-400',
    glow: 'rose',
    stat: '+2 bands',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    }
  }
}

export default function WhyChooseUs() {
  const { isDark } = useTheme()

  return (
    <section className="relative py-28 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-copper-950/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-copper-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <SectionBadge variant="solid" size="lg">Why Global Talent</SectionBadge>
          {/* <h2 className="section-title mb-4">
            Why Choose <span className="gradient-text">Us?</span>
          </h2> */}
          <p className="section-subtitle">
            We've helped over 15,000 students achieve their study abroad dreams with unmatched expertise and dedication.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map(({ icon: Icon, title, description, color, stat }, i) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="group glass-card-hover p-8 relative overflow-hidden"
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Icon + stat */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-lg`}>
                  <div className={`w-full h-full ${isDark ? 'bg-[#0f172a]' : 'bg-copper-50'} rounded-2xl flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${isDark ? 'text-white' : 'text-copper-600'}`} />
                  </div>
                </div>
                {/* <span className={`text-3xl font-black font-poppins bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                  {stat}
                </span> */}
              </div>

              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-copper-900'} mb-3 transition-colors`}>{title}</h3>
              <p className={`${isDark ? 'text-slate-500' : 'text-copper-700/70'} text-sm leading-relaxed`}>{description}</p>

              {/* Hover glow */}
              <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${color} opacity-0 group-hover:opacity-5 blur-xl rounded-full transition-opacity duration-500 pointer-events-none`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
