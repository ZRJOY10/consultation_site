import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSearch, FiFilter } from 'react-icons/fi'
import AnimatedSection from '../components/AnimatedSection'
import ConsultationForm from '../components/home/ConsultationForm'
import UniversityLogo from '../components/UniversityLogo'
import { australiaUniversitiesForPage, globalUniversitiesForPage } from '../data/universityList'

const universities = [...australiaUniversitiesForPage, ...globalUniversitiesForPage]

const countries = ['All', 'Australia', 'Canada', 'United Kingdom', 'USA', 'New Zealand', 'Malta']

export default function Universities() {
  const [search, setSearch] = useState('')
  const [country, setCountry] = useState('All')
  const [sort, setSort] = useState('rank')

  const filtered = universities
    .filter(u => {
      const matchSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.country.toLowerCase().includes(search.toLowerCase())
      const matchCountry = country === 'All' || u.country === country
      return matchSearch && matchCountry
    })
    .sort((a, b) => {
      if (sort === 'rank') {
        const rankA = a.rank ?? Number.POSITIVE_INFINITY
        const rankB = b.rank ?? Number.POSITIVE_INFINITY
        return rankA - rankB
      }
      if (sort === 'name') return a.name.localeCompare(b.name)
      return 0
    })

  return (
    <div className="pt-20">
      {/* Hero */}
      <section aria-label="Universities page hero" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-copper-900/10 to-copper-900/20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-black font-poppins mb-6">
            Partner <span className="gradient-text">Universities</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-copper-500 max-w-2xl mx-auto">
            Access 200+ world-ranked partner universities with exclusive admission advantages through Global Talent.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section aria-label="University search and filters" className="pb-6">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-6">Find Your Best-Fit University</h2>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
              <input
                type="text"
                placeholder="Search universities..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="input-field pl-11"
              />
            </div>
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="input-field md:w-48 appearance-none cursor-pointer"
            >
              <option value="rank" className="bg-[#0f172a]">Sort by QS Rank</option>
              <option value="name" className="bg-[#0f172a]">Sort by Name</option>
            </select>
          </div>

          {/* Country filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {countries.map(c => (
              <button
                key={c}
                onClick={() => setCountry(c)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${country === c ? 'bg-copper-600 text-white' : 'chip-inactive'}`}
              >
                {c}
              </button>
            ))}
          </div>

          <p className="text-sm text-slate-500 mb-6">Showing {filtered.length} universities</p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((uni, i) => (
              <AnimatedSection key={uni.name} delay={i * 0.04}>
                <motion.a
                  href={uni.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="glass-card-hover p-5 h-full flex flex-col group cursor-pointer"
                >
                  {/* Logo */}
                  <div className="flex items-start justify-between mb-4">
                    <UniversityLogo
                      name={uni.name}
                      link={uni.link}
                      containerClassName="w-14 h-14 rounded-xl bg-copper-200/60 border border-copper-300/40 flex items-center justify-center text-base font-bold text-copper-900"
                      initialsClassName="inline-flex items-center justify-center w-full h-full"
                      imageClassName="absolute inset-0 w-full h-full object-contain p-1.5 bg-copper-50"
                    />
                    <div className="text-right">
                      <span className="text-xs text-copper-400 font-semibold block">{uni.rank ? `QS #${uni.rank}` : 'QS N/A'}</span>
                      <span className="text-lg">{uni.flag}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-1 group-hover:text-copper-300 transition-colors line-clamp-2">{uni.name}</h3>
                  <p className="text-xs text-slate-500 mb-3">{uni.country}</p>
                  <div className="mt-auto pt-3 border-t border-slate-700/40 grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-slate-600">Tuition</p>
                      <p className="text-xs text-slate-400 font-medium">{uni.tuition}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600">Courses</p>
                      <p className="text-xs text-slate-400 font-medium">{uni.courses ? `${uni.courses}+` : 'N/A'}</p>
                    </div>
                  </div>
                </motion.a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ConsultationForm />
    </div>
  )
}

