import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiSearch, FiClock, FiUser, FiArrowRight } from 'react-icons/fi'
import AnimatedSection from '../components/AnimatedSection'
import SectionBadge from '../components/SectionBadge'
import ConsultationForm from '../components/home/ConsultationForm'
import { optimizeImageUrl } from '../utils/imageOptimization'
import { blogPosts } from '../data/blogPosts'

const categories = ['All', 'Visa Guide', 'Scholarships', 'University Life', 'Career', 'PTE/IELTS', 'Destinations']

export default function Blog() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = blogPosts.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase())
    const matchCat = category === 'All' || p.category === category
    return matchSearch && matchCat
  })

  const featured = filtered[0]
  const rest = filtered.slice(1)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section aria-label="Blog page hero" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-copper-900/10 to-copper-900/20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-poppins leading-tight mb-6 text-white">
            Latest Insights & News
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Expert guides, visa updates, scholarship news and study abroad tips from our counsellors.
          </motion.p>
          {/* Search */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="max-w-lg mx-auto relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="input-field pl-12 py-4 text-white placeholder:text-white/50"
            />
          </motion.div>
        </div>
      </section>

      <section aria-label="Blog articles listing" className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-6">Study Abroad Articles and Guides</h2>
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${category === c ? 'bg-copper-600 text-white' : 'border border-white/10 bg-white/5 text-white hover:bg-white/10'}`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Featured */}
          {featured && (
            <AnimatedSection className="mb-10">
              <Link to={`/blog/${featured.slug}`} className="block">
                <motion.article whileHover={{ scale: 1.01 }} className="glass-card-hover overflow-hidden rounded-2xl grid grid-cols-1 lg:grid-cols-2 cursor-pointer group">
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={optimizeImageUrl(featured.image, { width: 1200, height: 675 })}
                      alt={`Featured article image: ${featured.title}`}
                      width="1200"
                      height="675"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1e293b]/80 hidden lg:block" />
                    <SectionBadge variant="solid" className="absolute top-4 left-4 px-3 py-1 text-xs font-bold mb-0">Featured</SectionBadge>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <span className="text-xs text-white font-medium mb-3">{featured.category}</span>
                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">{featured.title}</h2>
                    <p className="text-white/80 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-white/70 mb-6">
                      <span className="flex items-center gap-1"><FiUser className="w-3 h-3" /> {featured.author}</span>
                      <span className="flex items-center gap-1"><FiClock className="w-3 h-3" /> {featured.readTime}</span>
                      <span>{featured.date}</span>
                    </div>
                    <span className="btn-primary self-start text-sm">
                      Read Article <FiArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.article>
              </Link>
            </AnimatedSection>
          )}

          {!filtered.length && (
            <div className="glass-card rounded-2xl p-8 text-center text-white">
              No blog posts match your search or category filter.
            </div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <AnimatedSection key={post.id} delay={i * 0.06}>
                <Link to={`/blog/${post.slug}`} className="block h-full">
                  <motion.article whileHover={{ y: -6 }} className="glass-card-hover overflow-hidden rounded-2xl cursor-pointer group h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={optimizeImageUrl(post.image, { width: 900, height: 540 })}
                        alt={`Article image: ${post.title}`}
                        width="900"
                        height="540"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/60 to-transparent" />
                      <SectionBadge variant="solid" className="absolute top-3 left-3 bg-copper-600/80 backdrop-blur-sm px-2.5 py-1 text-xs mb-0">
                        {post.category}
                      </SectionBadge>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-semibold text-white mb-2 group-hover:text-white transition-colors line-clamp-2">{post.title}</h3>
                      <p className="text-xs text-white/80 leading-relaxed mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-white/70 pt-3 border-t border-white/10">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1"><FiUser className="w-3 h-3" /> {post.author}</span>
                          <span className="flex items-center gap-1"><FiClock className="w-3 h-3" /> {post.readTime}</span>
                        </div>
                        <FiArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ConsultationForm />
    </div>
  )
}
