import { motion } from 'framer-motion'
import AnimatedSection from '../AnimatedSection'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

const universities = [
  { name: 'University of Melbourne', country: 'Australia', rank: '#33 QS', color: 'bg-blue-900/30' },
  { name: 'University of Toronto', country: 'Canada', rank: '#25 QS', color: 'bg-red-900/30' },
  { name: 'University of Oxford', country: 'UK', rank: '#3 QS', color: 'bg-indigo-900/30' },
  { name: 'MIT', country: 'USA', rank: '#1 QS', color: 'bg-sky-900/30' },
  { name: 'Univ. of Auckland', country: 'New Zealand', rank: '#68 QS', color: 'bg-emerald-900/30' },
  { name: 'Monash University', country: 'Australia', rank: '#57 QS', color: 'bg-blue-900/30' },
  { name: 'McGill University', country: 'Canada', rank: '#45 QS', color: 'bg-red-900/30' },
  { name: 'Imperial College London', country: 'UK', rank: '#6 QS', color: 'bg-indigo-900/30' },
  { name: 'Stanford University', country: 'USA', rank: '#5 QS', color: 'bg-sky-900/30' },
  { name: 'RMIT University', country: 'Australia', rank: '#140 QS', color: 'bg-blue-900/30' },
  { name: 'UBC', country: 'Canada', rank: '#34 QS', color: 'bg-red-900/30' },
  { name: "King's College London", country: 'UK', rank: '#40 QS', color: 'bg-indigo-900/30' },
]

// Get initials for logo placeholder
const getInitials = (name) => name.split(' ').slice(0, 2).map(w => w[0]).join('')

export default function FeaturedUniversities() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium mb-4">
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
                className={`${uni.color} glass-card-hover p-5 flex flex-col items-center text-center gap-3 cursor-pointer`}
              >
                {/* Logo placeholder */}
                <div className="w-14 h-14 rounded-xl bg-slate-700/50 border border-slate-700/50 flex items-center justify-center text-lg font-bold text-white font-poppins">
                  {getInitials(uni.name)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white leading-tight mb-1">{uni.name}</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs text-slate-500">{uni.country}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-600/40" />
                    <span className="text-xs text-amber-400 font-medium">{uni.rank}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Show more */}
        <AnimatedSection className="text-center">
          <p className="text-slate-500 text-sm mb-6">And 188+ more partner universities worldwide</p>
          <Link to="/universities" className="btn-primary">
            View All Universities <FiArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}


