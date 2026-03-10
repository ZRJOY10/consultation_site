import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSearch, FiClock, FiUser, FiTag, FiArrowRight } from 'react-icons/fi'
import AnimatedSection from '../components/AnimatedSection'
import ConsultationForm from '../components/home/ConsultationForm'

const categories = ['All', 'Visa Guide', 'Scholarships', 'University Life', 'Career', 'PTE/IELTS', 'Destinations']

const posts = [
  { id: 1, title: 'Australia Student Visa 500: Complete Guide for 2024-25', excerpt: 'Everything you need to know about applying for the Australian Student Visa - requirements, documents, processing times and pro tips from our expert counsellors.', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=80', category: 'Visa Guide', author: 'Sarah Mitchell', date: 'Dec 15, 2024', readTime: '8 min read', featured: true },
  { id: 2, title: 'Top 10 Scholarships for International Students in 2025', excerpt: 'A comprehensive list of fully-funded and partial scholarships available for international students across Australia, Canada, UK and USA worth up to $50,000.', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80', category: 'Scholarships', author: 'Priya Kapoor', date: 'Dec 10, 2024', readTime: '10 min read', featured: false },
  { id: 3, title: 'Life as an International Student in Melbourne: A Real Account', excerpt: 'From finding accommodation to making friends and managing finances - here is the honest truth about student life in Melbourne from our alumni.', image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=600&q=80', category: 'University Life', author: 'David Chen', date: 'Dec 5, 2024', readTime: '6 min read', featured: false },
  { id: 4, title: 'PTE Academic Score 65+: Strategy that Actually Works', excerpt: 'Our expert PTE trainers share the proven strategy that helped 89% of our students achieve their target PTE score in one attempt.', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80', category: 'PTE/IELTS', author: 'Michael Torres', date: 'Nov 28, 2024', readTime: '7 min read', featured: false },
  { id: 5, title: 'Canada PR Pathways for International Students: 2025 Update', excerpt: 'The complete guide to permanent residency pathways in Canada for international students - Express Entry, PNP, and the Canadian Experience Class.', image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&q=80', category: 'Visa Guide', author: 'Sarah Mitchell', date: 'Nov 20, 2024', readTime: '12 min read', featured: false },
  { id: 6, title: 'Best IT Courses in Australia for International Students', excerpt: 'Explore the top computer science and IT programs in Australia offering excellent graduate employment outcomes and PR-friendly occupations list alignment.', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80', category: 'Career', author: 'Priya Kapoor', date: 'Nov 15, 2024', readTime: '9 min read', featured: false },
  { id: 7, title: 'Malta: Europe\'s Hidden Gem for Affordable Quality Education', excerpt: 'Why more students are choosing Malta for EU-recognized degrees at a fraction of the cost. Everything you need to know about studying in Malta.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', category: 'Destinations', author: 'David Chen', date: 'Nov 8, 2024', readTime: '8 min read', featured: false },
  { id: 8, title: 'Writing a Winning Statement of Purpose for Australian Universities', excerpt: 'Our admission experts reveal what top Australian universities look for in an SOP and share a proven structure with real examples.', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80', category: 'University Life', author: 'Michael Torres', date: 'Oct 30, 2024', readTime: '11 min read', featured: false },
]

export default function Blog() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = posts.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase())
    const matchCat = category === 'All' || p.category === category
    return matchSearch && matchCat
  })

  const featured = filtered.find(p => p.featured)
  const rest = filtered.filter(p => !p.featured)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 to-blue-900/20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-black font-poppins mb-6">
            Latest <span className="gradient-text">Insights</span> & News
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            Expert guides, visa updates, scholarship news and study abroad tips from our counsellors.
          </motion.p>
          {/* Search */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="max-w-lg mx-auto relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="input-field pl-12 py-4"
            />
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${category === c ? 'bg-blue-600 text-white' : 'glass-card-hover text-slate-400'}`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Featured */}
          {featured && (
            <AnimatedSection className="mb-10">
              <motion.div whileHover={{ scale: 1.01 }} className="glass-card-hover overflow-hidden rounded-2xl grid grid-cols-1 lg:grid-cols-2 cursor-pointer group">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1e293b]/80 hidden lg:block" />
                  <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Featured</span>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-xs text-blue-400 font-medium mb-3">{featured.category}</span>
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{featured.title}</h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-6">
                    <span className="flex items-center gap-1"><FiUser className="w-3 h-3" /> {featured.author}</span>
                    <span className="flex items-center gap-1"><FiClock className="w-3 h-3" /> {featured.readTime}</span>
                    <span>{featured.date}</span>
                  </div>
                  <button className="btn-primary self-start text-sm">
                    Read Article <FiArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatedSection>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <AnimatedSection key={post.id} delay={i * 0.06}>
                <motion.div whileHover={{ y: -6 }} className="glass-card-hover overflow-hidden rounded-2xl cursor-pointer group h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/60 to-transparent" />
                    <span className="absolute top-3 left-3 bg-blue-600/80 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-slate-600 pt-3 border-t border-slate-700/40">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1"><FiUser className="w-3 h-3" /> {post.author}</span>
                        <span className="flex items-center gap-1"><FiClock className="w-3 h-3" /> {post.readTime}</span>
                      </div>
                      <FiArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ConsultationForm />
    </div>
  )
}
