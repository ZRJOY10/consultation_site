import { motion } from 'framer-motion'
import AnimatedSection from '../AnimatedSection'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { useTheme } from '../../context/ThemeContext'
import { useState } from 'react'
import { featuredAustralianUniversities as universities } from '../../data/universityList'

// Get initials for logo placeholder
const getInitials = (name) => name.split(' ').slice(0, 2).map(w => w[0]).join('')
const getLogoUrl = (link) => {
  try {
    const hostname = new URL(link).hostname.replace('www.', '')
    return `https://logo.clearbit.com/${hostname}`
  } catch {
    return ''
  }
}

export default function FeaturedUniversities() {
  const { isDark } = useTheme()
  const [brokenLogos, setBrokenLogos] = useState({})

  return (
    <section className="py-28 relative overflow-hidden">
      <div className={`absolute inset-0 pointer-events-none ${
        isDark ? 'bg-gradient-to-b from-copper-950/10 to-transparent' : 'bg-gradient-to-b from-copper-100/30 to-transparent'
      }`} />
      <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none ${
        isDark ? 'bg-copper-600/5' : 'bg-copper-300/10'
      }`} />

      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 border ${
            isDark ? 'bg-copper-600/20 border-copper-500/30 text-copper-400' : 'bg-copper-600/10 border-copper-400/20 text-copper-700'
          }`}>
            Our University Partners
          </span>
          <h2 className="section-title mb-4">
            Top <span className="gradient-text">Universities</span> We Work With
          </h2>
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
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-lg font-bold font-poppins overflow-hidden ${
                    isDark ? 'bg-copper-800/60 border border-copper-700/60 text-white' : 'bg-copper-100 text-copper-800'
                  }`}>
                    {!brokenLogos[uni.name] && getLogoUrl(uni.link) ? (
                      <img
                        src={getLogoUrl(uni.link)}
                        alt={`${uni.name} logo`}
                        className="w-9 h-9 object-contain"
                        loading="lazy"
                        onError={() => setBrokenLogos(prev => ({ ...prev, [uni.name]: true }))}
                      />
                    ) : (
                      <span>{getInitials(uni.name)}</span>
                    )}
                  </div>
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


