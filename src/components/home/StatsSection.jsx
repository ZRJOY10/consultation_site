import { useRef } from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'

const stats = [
  { value: 15000, suffix: '+', label: 'Students Placed', description: 'Across 6 countries worldwide' },
  { value: 98, suffix: '%', label: 'Visa Success Rate', description: 'Industry-leading approval rate' },
  { value: 200, suffix: '+', label: 'Partner Universities', description: 'World-ranked institutions' },
  { value: 5, suffix: 'M+', label: 'Scholarships Won', prefix: '$', description: 'Total value for our students' },
  { value: 14, suffix: '+', label: 'Years Experience', description: 'Trusted since 2010' },
  { value: 50, suffix: '+', label: 'Expert Counsellors', description: 'Certified professionals' },
]

export default function StatsSection() {
  const { isDark } = useTheme()
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section aria-label="Performance statistics" className="relative py-20 overflow-hidden" ref={ref}>
      {/* BG gradient */}
      <div className={`absolute inset-0 pointer-events-none ${isDark ? 'bg-gradient-to-r from-copper-900/20 via-copper-800/30 to-copper-900/20' : 'bg-gradient-to-r from-copper-100/30 via-copper-200/40 to-copper-100/30'}`} />
      <div className={`absolute inset-0 border-y pointer-events-none ${isDark ? 'border-slate-700/40' : 'border-copper-300/40'}`} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map(({ value, suffix, label, description, prefix }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center group"
            >
              <div className="text-3xl md:text-4xl font-black font-poppins gradient-text mb-1">
                {prefix && <span>{prefix}</span>}
                {inView && (
                  <CountUp
                    end={value}
                    duration={2.5}
                    delay={i * 0.1}
                    separator=","
                  />
                )}
                <span>{suffix}</span>
              </div>
              <p className={`text-sm font-semibold mb-1 ${isDark ? 'text-white' : 'text-copper-900'}`}>{label}</p>
              <p className={`text-xs hidden md:block ${isDark ? 'text-slate-500' : 'text-copper-700/70'}`}>{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
