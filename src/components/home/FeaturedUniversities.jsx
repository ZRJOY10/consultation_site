import { motion } from 'framer-motion'
import AnimatedSection from '../AnimatedSection'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { useTheme } from '../../context/ThemeContext'

const universities = [
  { name: 'University of Melbourne', country: 'Australia', rank: '#33 QS', darkColor: 'bg-blue-900/30', lightColor: 'bg-blue-50 border border-blue-200/40' },
  { name: 'University of Toronto', country: 'Canada', rank: '#25 QS', darkColor: 'bg-red-900/30', lightColor: 'bg-red-50 border border-red-200/40' },
  { name: 'University of Oxford', country: 'UK', rank: '#3 QS', darkColor: 'bg-indigo-900/30', lightColor: 'bg-indigo-50 border border-indigo-200/40' },
  { name: 'MIT', country: 'USA', rank: '#1 QS', darkColor: 'bg-sky-900/30', lightColor: 'bg-sky-50 border border-sky-200/40' },
  { name: 'Univ. of Auckland', country: 'New Zealand', rank: '#68 QS', darkColor: 'bg-emerald-900/30', lightColor: 'bg-emerald-50 border border-emerald-200/40' },
  { name: 'Monash University', country: 'Australia', rank: '#57 QS', darkColor: 'bg-blue-900/30', lightColor: 'bg-blue-50 border border-blue-200/40' },
  { name: 'McGill University', country: 'Canada', rank: '#45 QS', darkColor: 'bg-red-900/30', lightColor: 'bg-red-50 border border-red-200/40' },
  { name: 'Imperial College London', country: 'UK', rank: '#6 QS', darkColor: 'bg-indigo-900/30', lightColor: 'bg-indigo-50 border border-indigo-200/40' },
  { name: 'Stanford University', country: 'USA', rank: '#5 QS', darkColor: 'bg-sky-900/30', lightColor: 'bg-sky-50 border border-sky-200/40' },
  { name: 'RMIT University', country: 'Australia', rank: '#140 QS', darkColor: 'bg-blue-900/30', lightColor: 'bg-blue-50 border border-blue-200/40' },
  { name: 'UBC', country: 'Canada', rank: '#34 QS', darkColor: 'bg-red-900/30', lightColor: 'bg-red-50 border border-red-200/40' },
  { name: "King's College London", country: 'UK', rank: '#40 QS', darkColor: 'bg-indigo-900/30', lightColor: 'bg-indigo-50 border border-indigo-200/40' },
]

// Get initials for logo placeholder
const getInitials = (name) => name.split(' ').slice(0, 2).map(w => w[0]).join('')

export default function FeaturedUniversities() {
  const { isDark } = useTheme()

  return (
    <section className="py-28 relative overflow-hidden">
      <div className={`absolute inset-0 pointer-events-none ${
        isDark ? 'bg-gradient-to-b from-blue-950/10 to-transparent' : 'bg-gradient-to-b from-copper-100/30 to-transparent'
      }`} />
      <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none ${
        isDark ? 'bg-purple-600/5' : 'bg-copper-300/10'
      }`} />

      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 border ${
            isDark ? 'bg-purple-600/20 border-purple-500/30 text-purple-400' : 'bg-copper-600/10 border-copper-400/20 text-copper-700'
          }`}>
            Our University Partners
          </span>
          <h2 className="section-title mb-4">
            Top <span className="gradient-text">Universities</span> We Work With
          </h2>
          <p className="section-subtitle">
            Direct partnerships with 200+ world-ranked universities giving you access to exclusive admission advantages.
          </p>
        </AnimatedSection>

        {/* Marquee-style grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
          {universities.map((uni, i) => (
            <AnimatedSection key={uni.name} delay={i * 0.05}>
              <motion.div
                whileHover={{ scale: 1.04, y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`${isDark ? uni.darkColor + ' glass-card-hover' : uni.lightColor + ' rounded-2xl shadow-sm hover:shadow-md'} p-5 flex flex-col items-center text-center gap-3 cursor-pointer`}
              >
                {/* Logo placeholder */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-lg font-bold font-poppins ${
                  isDark ? 'bg-slate-700/50 border border-slate-700/50 text-white' : 'bg-copper-100 text-copper-800'
                }`}>
                  {getInitials(uni.name)}
                </div>
                <div>
                  <p className={`text-sm font-semibold leading-tight mb-1 ${isDark ? 'text-white' : 'text-copper-900'}`}>{uni.name}</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-copper-700/60'}`}>{uni.country}</span>
                    <span className={`w-1 h-1 rounded-full ${isDark ? 'bg-slate-600/40' : 'bg-copper-400/30'}`} />
                    <span className={`text-xs font-medium ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>{uni.rank}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Show more */}
        <AnimatedSection className="text-center">
          <p className={`text-sm mb-6 ${isDark ? 'text-slate-500' : 'text-copper-700/60'}`}>And 188+ more partner universities worldwide</p>
          <Link to="/universities" className="btn-primary">
            View All Universities <FiArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}


