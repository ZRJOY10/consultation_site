import { motion } from 'framer-motion'
import AnimatedSection from '../AnimatedSection'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { useTheme } from '../../context/ThemeContext'
import { featuredAustralianUniversities as universities } from '../../data/universityList'
import SectionBadge from '../SectionBadge'
import UniversityLogo from '../UniversityLogo'

export default function FeaturedUniversities() {
  const { isDark } = useTheme()

  return (
    <section aria-label="Featured university partners" className="py-28 relative overflow-hidden">
      <div className={`absolute inset-0 pointer-events-none ${
        isDark ? 'bg-gradient-to-b from-copper-950/10 to-transparent' : 'bg-gradient-to-b from-copper-100/30 to-transparent'
      }`} />
      <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none ${
        isDark ? 'bg-copper-600/5' : 'bg-copper-300/10'
      }`} />

      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <SectionBadge variant="solid" size="lg">Our University Partners</SectionBadge>
          <p className="section-subtitle">
            Selected Australian universities from our destination cost section with direct website links.
          </p>
        </AnimatedSection>

        {/* Marquee-style grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
          {universities.map((uni, i) => (
            <AnimatedSection key={uni.name} delay={i * 0.05}>
              <a href={uni.link} target="_blank" rel="noopener noreferrer" className="block">
                <motion.div
                  whileHover={{ scale: 1.04, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={`${isDark ? 'bg-copper-900/30 glass-card-hover' : 'bg-copper-50 border border-copper-200/40 rounded-2xl shadow-sm hover:shadow-md'} p-5 flex flex-col items-center text-center gap-3 cursor-pointer`}
                >
                  <UniversityLogo
                    name={uni.name}
                    link={uni.link}
                    containerClassName={`w-14 h-14 rounded-xl flex items-center justify-center text-lg font-bold font-poppins ${
                      isDark ? 'bg-copper-800/60 border border-copper-700/60 text-white' : 'bg-copper-100 text-copper-800'
                    }`}
                    initialsClassName="inline-flex items-center justify-center w-full h-full"
                    imageClassName="absolute inset-0 w-full h-full object-contain p-2 bg-white"
                  />
                  <div>
                    <p className={`text-sm font-semibold leading-tight mb-1 ${isDark ? 'text-white' : 'text-copper-900'}`}>{uni.name}</p>
                    <div className="flex items-center justify-center gap-2">
                      <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-copper-700/60'}`}>Australia</span>
                      <span className={`w-1 h-1 rounded-full ${isDark ? 'bg-slate-600/40' : 'bg-copper-400/30'}`} />
                      <span className={`text-xs font-medium ${isDark ? 'text-copper-400' : 'text-copper-600'}`}>{uni.tuition}</span>
                    </div>
                  </div>
                </motion.div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        {/* Show more */}
        <AnimatedSection className="text-center">
          <p className={`text-sm mb-6 ${isDark ? 'text-slate-500' : 'text-copper-700/60'}`}>Open any card to visit the official university website.</p>
          <Link to="/universities" className="btn-primary">
            View All Universities <FiArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}


