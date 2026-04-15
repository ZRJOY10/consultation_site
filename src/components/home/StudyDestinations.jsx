import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiMapPin, FiUsers, FiBookOpen, FiDollarSign } from 'react-icons/fi'
import AnimatedSection from '../AnimatedSection'
import SectionBadge from '../SectionBadge'
import { useTheme } from '../../context/ThemeContext'
import { optimizeImageUrl } from '../../utils/imageOptimization'

const destinations = [
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=80',
    tag: 'Most Popular',
    tagColor: 'bg-copper-500',
    students: '8,000+ students',
    courses: '1,100+ courses',
    avgCost: 'AUD 25K-45K/yr',
    color: 'from-copper-600 to-copper-900',
    highlight: 'Post-study work visa: 2-4 years',
  },
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&q=80',
    tag: 'PR Friendly',
    tagColor: 'bg-red-500',
    students: '5,000+ students',
    courses: '900+ courses',
    avgCost: 'CAD 20K-40K/yr',
    color: 'from-red-700 to-red-900',
    highlight: 'PGWP: Up to 3 years',
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80',
    tag: 'Prestigious',
    tagColor: 'bg-copper-500',
    students: '3,500+ students',
    courses: '700+ courses',
    avgCost: 'GBP 15K-35K/yr',
    color: 'from-copper-700 to-copper-900',
    highlight: 'Graduate route visa: 2 years',
  },
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&q=80',
    tag: 'World Class',
    tagColor: 'bg-copper-500',
    students: '2,800+ students',
    courses: '1,500+ courses',
    avgCost: 'USD 20K-55K/yr',
    color: 'from-copper-700 to-copper-900',
    highlight: 'OPT: 3 years STEM extension',
  },
  {
    id: 'new-zealand',
    name: 'New Zealand',
    flag: '🇳🇿',
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600&q=80',
    tag: 'Scenic & Safe',
    tagColor: 'bg-copper-500',
    students: '1,200+ students',
    courses: '450+ courses',
    avgCost: 'NZD 22K-35K/yr',
    color: 'from-copper-700 to-copper-900',
    highlight: 'Post-study work: 1-3 years',
  },
  {
    id: 'malta',
    name: 'Malta',
    flag: '🇲🇹',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    tag: 'Affordable EU',
    tagColor: 'bg-copper-500',
    students: '600+ students',
    courses: '200+ courses',
    avgCost: 'EUR 8K-18K/yr',
    color: 'from-copper-700 to-copper-900',
    highlight: 'EU work rights post-study',
  },
]

export default function StudyDestinations() {
  const { isDark } = useTheme()
  const [hovered, setHovered] = useState(null)

  return (
    <section aria-label="Top study destinations" className="py-28 relative overflow-hidden">
      <div className={`absolute inset-0 pointer-events-none ${isDark ? 'bg-gradient-to-b from-transparent to-copper-950/10' : 'bg-gradient-to-b from-transparent to-copper-100/20'}`} />

      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <SectionBadge variant="solid" size="lg">Explore Destinations</SectionBadge>
          {/* <h2 className="section-title mb-4">
            Explore <span className="gradient-text-gold">Top Countries</span>
          </h2> */}
          <p className="section-subtitle">
            Choose from 6 world-class destinations and find the perfect country that matches your career goals and lifestyle.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
            <AnimatedSection key={dest.id} delay={i * 0.08}>
              <Link to={`/destinations/${dest.id}`}>
                <motion.article
                  onHoverStart={() => setHovered(dest.id)}
                  onHoverEnd={() => setHovered(null)}
                  className="country-card h-72 md:h-80"
                >
                  {/* Background image */}
                  <motion.div
                    animate={{ scale: hovered === dest.id ? 1.08 : 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="absolute inset-0"
                  >
                    <img
                      src={optimizeImageUrl(dest.image, { width: 900, height: 600 })}
                      alt={`Study destination card image for ${dest.name}`}
                      width="900"
                      height="600"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${dest.color} opacity-70`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </motion.div>

                  {/* Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`${dest.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      {dest.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-3xl">{dest.flag}</span>
                      <h3 className={`text-xl font-bold font-poppins ${isDark ? 'text-white' : 'text-black'}`}>{dest.name}</h3>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: hovered === dest.id ? 1 : 0, height: hovered === dest.id ? 'auto' : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-3 gap-2 mt-3 mb-3">
                        {[
                          { icon: FiUsers, text: dest.students },
                          { icon: FiBookOpen, text: dest.courses },
                          { icon: FiDollarSign, text: 'Scholarships' },
                        ].map(({ icon: Icon, text }) => (
                          <div key={text} className={`flex flex-col items-center gap-1 rounded-lg p-2 ${isDark ? 'bg-copper-900/45' : 'bg-copper-600/30'}`}>
                            <Icon className={`w-3.5 h-3.5 ${isDark ? 'text-copper-200' : 'text-black'}`} />
                            <span className={`text-xs text-center leading-tight ${isDark ? 'text-white/80' : 'text-black'}`}>{text}</span>
                          </div>
                        ))}
                      </div>
                      <p className={`text-xs font-medium ${isDark ? 'text-copper-300' : 'text-black'}`}>{dest.highlight}</p>
                    </motion.div>

                    <div className="flex items-center justify-between mt-3">
                      <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-black'}`}>{dest.avgCost}</span>
                      <motion.div
                        animate={{ x: hovered === dest.id ? 0 : -5, opacity: hovered === dest.id ? 1 : 0 }}
                        className={`flex items-center gap-1 text-xs font-medium ${isDark ? 'text-white' : 'text-black'}`}
                      >
                        Explore <FiArrowRight className="w-3 h-3" />
                      </motion.div>
                    </div>
                  </div>
                </motion.article>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link to="/destinations" className="btn-secondary">
            View All Destinations <FiArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}

