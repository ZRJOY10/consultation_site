import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight, FiMapPin, FiUsers, FiBriefcase, FiBook, FiDollarSign, FiCheckCircle } from 'react-icons/fi'
import AnimatedSection from '../components/AnimatedSection'
import ConsultationForm from '../components/home/ConsultationForm'
import { australiaCostTierUniversities, australiaUniversitiesDetailed, universityLinkMap } from '../data/universityList'
import { toCourseSlug } from '../data/courseGuides'
import { optimizeImageUrl } from '../utils/imageOptimization'

const countryData = {
  australia: {
    name: 'Australia', flag: '🇦🇺', color: 'from-copper-700 to-copper-900',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&q=80',
    tagline: 'World-class education, stunning lifestyle',
    description: 'Australia is one of the most popular destinations for international students, offering world-class education, diverse cultural experiences, and excellent career opportunities. With globally recognized universities such as the University of Melbourne, University of Sydney, and Monash University, students gain qualifications that are respected around the world. Australian institutions provide a wide range of programs across fields including business, engineering, information technology, health sciences, and education. The country is known for its strong academic standards, modern facilities, and research-driven learning environment. International students in Australia also benefit from flexible study pathways, scholarship opportunities, and the ability to work part-time while studying. After graduation, many students may access post-study work opportunities that allow them to gain valuable international work experience. With a welcoming multicultural society, safe cities, and a high quality of life, Australia provides an ideal environment for students to develop academically, professionally, and personally. Our consultancy supports students through every stage of the journey—from course selection and university applications to visa guidance and pre-departure preparation—helping them achieve their goal of studying in Australia.',
    stats: [{ label: 'International Students', value: '700K+' }, { label: 'Top 100 Universities', value: '8' }, { label: 'Work Hours/Week', value: '48hrs' }, { label: 'Post-Study Visa', value: '4 yrs' }],
    intakes: ['February (Main)', 'July (Secondary)'],
    popular: ['Nursing','Social Work','Business Analytics','Laboratory Medicine','Early Childhood Education', 'Business Management', 'Fintech', 'Engineering', 'IT & Computer Science', 'Health & Medicine', 'Education'],
    cost: { tuition: 'AUD 20,000 – 45,000/year', living: 'AUD 18,000 – 25,000/year', total: 'AUD 38,000 – 70,000/year' },
    visa: { type: 'Student Visa (Subclass 500)', duration: 'Duration of course', work: '48 hrs/fortnight during study', processing: '4–6 weeks' },
    requirements: ['Offer of enrollment from registered provider', 'English proficiency (IELTS/PTE)', 'Genuine Temporary Entrant (GTE) statement', 'Financial capacity evidence', 'Health insurance (OSHC)', 'Health examinations'],
    costTiers: {
      lower: {
        range: 'Under AUD $20,000/year',
        description: 'Budget-Friendly Australian Universities',
        universities: australiaCostTierUniversities.lower,
        note: 'Most affordable options with quality education. International scholarships can reduce tuition by 15–30%.',
      },
      middle: {
        range: 'AUD $20,000 - $30,000/year',
        description: '20 Australian Universities in the Mid-Range',
        universities: australiaCostTierUniversities.middle,
        note: 'Good quality universities with competitive fees, strong industry connections, and scholarship opportunities.',
      },
      higher: {
        range: 'Above AUD $30,000/year',
        description: 'Premium Australian Universities',
        universities: australiaCostTierUniversities.higher,
        note: 'World-renowned institutions with excellent global rankings, Go8 universities, and exceptional research opportunities.',
      },
    },
    // Full university list with tuition, typical scholarship and estimated net tuition (international students)
        universities: australiaUniversitiesDetailed,
        scholarships: [
          { uni: 'University of Adelaide', detail: 'Global Citizens Scholarship 15–30%' },
          { uni: 'University of Queensland', detail: 'Merit scholarships 25–50% (some programs)' },
          { uni: 'Monash University', detail: 'Merit scholarships with automatic consideration' },
          { uni: 'University of Sydney', detail: 'International scholarships up to 20%' },
          { uni: 'UNSW Sydney', detail: 'International scholarships up to 30%' },
          { uni: 'RMIT University', detail: 'Future Leaders Scholarship 20%' },
          { uni: 'University of Technology Sydney', detail: 'Academic Merit Scholarship ≈20%' },
          { uni: 'Deakin University', detail: 'STEM Scholarship 20%' },
          { uni: 'Swinburne University', detail: 'International Scholarship 20–30%' },
          { uni: 'La Trobe University', detail: 'International Scholarship 20–30%' },
        ],
          universitiesNote: 'Tuition ranges are indicative. Scholarships and waivers vary by program and availability; use university pages for latest figures.',
        },
  canada: {
    name: 'Canada', flag: '🇨🇦', color: 'from-copper-700 to-copper-900',
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&q=80',
    tagline: 'Quality education meets PR pathways',
    description: 'Canada combines world-class education with one of the most immigrant-friendly environments in the world. Its diverse cities, affordable tuition compared to the US, and streamlined PR pathways make it a top choice.',
    stats: [{ label: 'International Students', value: '800K+' }, { label: 'Top 100 Universities', value: '6' }, { label: 'Work Hours/Week', value: '20hrs' }, { label: 'Post-Grad Permit', value: '3 yrs' }],
    intakes: ['September (Fall)', 'January (Winter)', 'May (Summer)'],
    popular: ['Business & Management', 'Computer Science', 'Health Sciences', 'Engineering', 'Arts'],
    cost: { tuition: 'CAD 15,000 – 35,000/year', living: 'CAD 12,000 – 18,000/year', total: 'CAD 27,000 – 53,000/year' },
    visa: { type: 'Study Permit', duration: 'Course duration + 90 days', work: '20 hrs/week during study', processing: '8–12 weeks' },
    requirements: ['Acceptance letter from DLI', 'Proof of finances', 'Language test scores', 'Valid passport', 'Statement of purpose', 'Clean criminal record'],
  },
  uk: {
    name: 'United Kingdom', flag: '🇬🇧', color: 'from-copper-700 to-copper-900',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80',
    tagline: 'Prestigious institutions, rich heritage',
    description: 'The UK is home to some of the world\'s most prestigious universities including Oxford, Cambridge and Imperial College. UK degrees are recognized globally and the Graduate Route visa offers 2-year post-study work rights.',
    stats: [{ label: 'Universities', value: '160+' }, { label: 'Top 10 World Uni', value: '4' }, { label: 'Work Hours/Week', value: '20hrs' }, { label: 'Graduate Route', value: '2 yrs' }],
    intakes: ['September (Main)', 'January (Secondary)'],
    popular: ['Law', 'Business & Finance', 'Engineering', 'Medicine', 'Arts & Design'],
    cost: { tuition: 'GBP 12,000 – 30,000/year', living: 'GBP 12,000 – 15,000/year', total: 'GBP 24,000 – 45,000/year' },
    visa: { type: 'Student Visa', duration: 'Course + 4 months', work: '20 hrs/week term time', processing: '3 weeks' },
    requirements: ['CAS from UK institution', 'English proficiency', 'Financial evidence', 'Valid passport', 'No immigration violations', 'ATAS certificate (some subjects)'],
  },
  usa: {
    name: 'United States', flag: '🇺🇸', color: 'from-copper-700 to-copper-900',
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&q=80',
    tagline: 'World\'s top universities, global careers',
    description: 'The USA houses the world\'s top universities including MIT, Stanford and Harvard. With over 4,000 accredited institutions and the largest higher education system globally, the US offers unmatched diversity and opportunities.',
    stats: [{ label: 'Accredited Institutions', value: '4,000+' }, { label: 'Top 10 World Uni', value: '7' }, { label: 'On-campus Work', value: '20hrs' }, { label: 'STEM OPT', value: '3 yrs' }],
    intakes: ['August/September (Fall)', 'January (Spring)'],
    popular: ['STEM Programs', 'Business (MBA)', 'Computer Science', 'Medicine', 'Law'],
    cost: { tuition: 'USD 20,000 – 55,000/year', living: 'USD 15,000 – 25,000/year', total: 'USD 35,000 – 80,000/year' },
    visa: { type: 'F-1 Student Visa', duration: 'Duration of Status (D/S)', work: '20 hrs/week on-campus', processing: '2–3 months' },
    requirements: ['Form I-20 from SEVP institution', 'SEVIS fee payment', 'Financial documents', 'DS-160 application', 'Visa interview', 'English proficiency'],
  },
  'new-zealand': {
    name: 'New Zealand', flag: '🇳🇿', color: 'from-copper-700 to-copper-900',
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1200&q=80',
    tagline: 'Safe, scenic, and internationally recognized',
    description: 'New Zealand offers a safe environment, stunning natural scenery, and internationally recognized qualifications. With a growing economy and welcoming immigration policies, NZ is increasingly popular for international students.',
    stats: [{ label: 'Universities', value: '8' }, { label: 'QS Top 500', value: '6' }, { label: 'Work Hours/Week', value: '20hrs' }, { label: 'Post-Study Visa', value: '3 yrs' }],
    intakes: ['February (Main)', 'July (Secondary)'],
    popular: ['Agriculture & Horticulture', 'Business', 'IT', 'Engineering', 'Tourism'],
    cost: { tuition: 'NZD 22,000 – 35,000/year', living: 'NZD 15,000 – 20,000/year', total: 'NZD 37,000 – 55,000/year' },
    visa: { type: 'Student Visa', duration: 'Course duration', work: '20 hrs/week during study', processing: '4–6 weeks' },
    requirements: ['Offer letter', 'English proficiency', 'Financial evidence', 'Health & character certificate', 'Travel insurance', 'Return ticket'],
  },
  malta: {
    name: 'Malta', flag: '🇲🇹', color: 'from-copper-700 to-copper-900',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    tagline: 'Affordable EU education, Mediterranean lifestyle',
    description: 'Malta offers affordable EU-recognized education in an English-speaking Mediterranean island nation. As an EU member, Maltese qualifications are recognized across Europe, opening doors to 27+ countries.',
    stats: [{ label: 'English Speaking', value: '100%' }, { label: 'EU Recognition', value: '27 countries' }, { label: 'Tuition', value: 'Affordable' }, { label: 'Safe Index', value: 'Top 10' }],
    intakes: ['September/October (Main)', 'February (Secondary)'],
    popular: ['Business', 'IT & Computing', 'Gaming & Digital Arts', 'Healthcare', 'English Language'],
    cost: { tuition: 'EUR 8,000 – 18,000/year', living: 'EUR 10,000 – 15,000/year', total: 'EUR 18,000 – 33,000/year' },
    visa: { type: 'Student Visa / D-Visa', duration: 'Up to 1 year (renewable)', work: 'Part-time during study', processing: '2–4 weeks' },
    requirements: ['Acceptance letter', 'Financial proof', 'Accommodation evidence', 'Health insurance', 'Valid passport', 'No criminal record'],
  },
}

const allCountries = Object.keys(countryData)

// Mapping of university display names to official website URLs (fallback for tier cards)
const uniLinks = universityLinkMap

export default function Destinations() {
  const { country: paramCountry } = useParams()
  const [selected, setSelected] = useState(paramCountry || null)
  const [activeTab, setActiveTab] = useState('overview')

  const data = selected ? countryData[selected] : null

  return (
    <div className="pt-20">
      {/* Hero */}
      <section aria-label="Destinations page hero" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-copper-900/10 to-copper-900/20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-poppins leading-tight mb-6">
            Study <span className="gradient-text-gold">Destinations</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-base sm:text-lg md:text-xl text-copper-500 max-w-2xl mx-auto">
            Explore top study destinations and find your perfect country to begin your international journey.
          </motion.p>
        </div>
      </section>

      {/* Country selector */}
      <section aria-label="Destination comparison and country details" className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Compare Study Destinations by Country</h2>
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {allCountries.map(c => {
              const d = countryData[c]
              return (
                <button
                  key={c}
                  onClick={() => { setSelected(c === selected ? null : c); setActiveTab('overview') }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                    selected === c
                      ? 'bg-copper-600 text-white shadow-lg shadow-copper-500/30'
                      : 'glass-card-hover text-white/70 hover:text-white'
                  }`}
                >
                  <span className="text-lg">{d.flag}</span>
                  {d.name}
                </button>
              )
            })}
          </div>

          {/* Country detail */}
          <AnimatePresence mode="wait">
            {data && (
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Hero banner */}
                <div className="relative rounded-3xl overflow-hidden min-h-[320px] md:h-80 mb-8">
                  <img
                    src={optimizeImageUrl(data.image, { width: 1600, height: 900 })}
                    alt={`Study in ${data.name} destination banner`}
                    width="1600"
                    height="900"
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${data.color} opacity-70`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute left-4 right-4 md:left-8 md:right-auto bottom-20 md:bottom-8 z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-5xl">{data.flag}</span>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-poppins leading-tight">{data.name}</h2>
                    </div>
                    <p className="text-sm sm:text-base text-white/80">{data.tagline}</p>
                  </div>
                  {/* Stats */}
                  <div className="absolute left-4 right-4 md:left-auto md:right-8 bottom-4 md:bottom-8 z-10 flex gap-2 md:gap-3 overflow-x-auto pb-1">
                    {data.stats.map(s => (
                      <div key={s.label} className="glass-card px-3 py-2 text-center min-w-[88px]">
                        <p className="text-lg font-bold text-white">{s.value}</p>
                        <p className="text-xs text-white/50">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                  {['overview', 'costs', 'visa', 'courses'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-5 py-2 rounded-xl text-sm font-medium capitalize whitespace-nowrap transition-all ${
                        activeTab === tab ? 'bg-copper-600 text-white' : 'glass-card-hover text-white/60'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Tab content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                  >
                    {activeTab === 'overview' && (
                      <>
                        <div className="lg:col-span-2 glass-card p-6">
                          <h3 className="font-semibold text-white mb-4">About Studying in {data.name}</h3>
                          <p className="text-white/60 leading-relaxed mb-6">{data.description}</p>
                          <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">Intake Periods</h4>
                          <div className="flex gap-2 mb-6">
                            {data.intakes.map(i => <span key={i} className="px-3 py-1 glass-card text-sm text-copper-400">{i}</span>)}
                          </div>
                        </div>
                        <div className="glass-card p-6">
                          <h3 className="font-semibold text-white mb-4">Popular Courses</h3>
                          <ul className="space-y-2">
                            {data.popular.map(c => (
                              <li key={c} className="text-sm text-white/60">
                                <Link
                                  to={`/destinations/${selected}/${toCourseSlug(c)}`}
                                  className="flex items-center justify-between gap-2 hover:text-copper-400 transition-colors"
                                >
                                  <span className="flex items-center gap-2">
                                    <FiCheckCircle className="w-4 h-4 text-copper-400 flex-shrink-0" /> {c}
                                  </span>
                                  <FiArrowRight className="w-4 h-4 text-copper-400" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-6 pt-4 border-t border-white/5">
                            <Link to="/book-consultation" className="btn-primary w-full justify-center text-sm">
                              Apply Now
                            </Link>
                          </div>
                        </div>
                      </>
                    )}

                    {activeTab === 'costs' && (
                      <>
                        {data.costTiers ? (
                          <div className="lg:col-span-3 space-y-6">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                              <div className="lg:col-span-2 space-y-6">
                                {/* Cost Overview */}
                                <div className="glass-card p-6">
                                  <h3 className="font-semibold text-white mb-6">Cost Breakdown</h3>
                                  <div className="space-y-4">
                                    {[
                                      { label: 'Tuition Fees', value: data.cost.tuition, icon: FiBook, color: 'text-copper-400' },
                                      { label: 'Living Expenses', value: data.cost.living, icon: FiMapPin, color: 'text-copper-500' },
                                      { label: 'Total Estimated', value: data.cost.total, icon: FiDollarSign, color: 'text-copper-600' },
                                    ].map(({ label, value, icon: Icon, color }) => (
                                      <div key={label} className="flex items-center justify-between p-4 glass-card">
                                        <div className="flex items-center gap-3">
                                          <Icon className={`w-5 h-5 ${color}`} />
                                          <span className="text-white/70">{label}</span>
                                        </div>
                                        <span className={`font-semibold ${color}`}>{value}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* University Cost Tiers */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                  {Object.entries(data.costTiers).map(([tierKey, tier]) => (
                                    <motion.div
                                      key={tierKey}
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      className="glass-card p-6"
                                    >
                                      <div className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold mb-3 ${
                                        tierKey === 'lower' ? 'bg-copper-500 text-white' :
                                        tierKey === 'middle' ? 'bg-copper-500 text-white' :
                                        'bg-copper-500 text-white'
                                      }`}>
                                        {tierKey.charAt(0).toUpperCase() + tierKey.slice(1)} Tier
                                      </div>
                                      <h4 className="text-lg font-semibold text-white mb-2">{tier.range}</h4>
                                      <p className="text-xs text-white/50 mb-4">{tier.description}</p>

                                      <div className="space-y-2 mb-4 max-h-64 overflow-y-auto">
                                        {tier.universities.map((uni, idx) => {
                                          const link = uni.link || uniLinks[uni.name]
                                          if (link) {
                                            return (
                                              <a
                                                key={idx}
                                                href={link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${uni.name} website`}
                                                className="block relative p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                                              >
                                                <span className="absolute top-2 right-2 text-[11px] bg-white/10 text-white/80 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Click to visit</span>
                                                <p className="text-sm font-semibold text-copper-500 group-hover:text-copper-400 transition-colors">{uni.name}</p>
                                                <p className="text-xs text-white/55 mt-0.5">{uni.tuition}</p>
                                              </a>
                                            )
                                          }

                                          return (
                                            <div key={idx} className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group">
                                              <p className="text-sm font-semibold text-copper-500 group-hover:text-copper-400 transition-colors">{uni.name}</p>
                                              <p className="text-xs text-white/55 mt-0.5">{uni.tuition}</p>
                                            </div>
                                          )
                                        })}
                                      </div>

                                      {tier.note && (
                                        <p className="text-xs text-white/40 italic border-t border-white/10 pt-3">{tier.note}</p>
                                      )}
                                    </motion.div>
                                  ))}
                                </div>
                              </div>

                              {/* Scholarships column */}
                              <div className="glass-card p-6 h-full flex flex-col">
                                <h3 className="font-semibold text-white mb-4">Scholarships & Awards</h3>
                                <p className="text-sm text-white/60 mb-3">{data.universitiesNote}</p>
                                <ul className="space-y-3 flex-1 overflow-y-auto pr-1">
                                  {data.scholarships && data.scholarships.map((s, i) => (
                                    <li key={i} className="text-sm text-white/60 border-b border-white/5 pb-2 last:border-b-0 last:pb-0">
                                      <span className="block font-semibold text-copper-500 mb-0.5">{s.uni}</span>
                                      <span>{s.detail}</span>
                                    </li>
                                  ))}
                                </ul>
                                <div className="mt-6 pt-4 border-t border-white/5">
                                  <Link to="/book-consultation" className="btn-gold w-full justify-center text-sm">Get Scholarship Advice</Link>
                                </div>
                              </div>
                            </div>

                            {/* Tuition Comparison Table */}
                            <div className="glass-card p-6">
                              <h3 className="font-semibold text-white mb-4">Tuition Comparison (International Students)</h3>
                              <div className="overflow-x-auto">
                                <table className="min-w-full text-sm table-fixed">
                                  <thead>
                                    <tr className="text-left text-xs text-white/60">
                                      <th className="px-3 py-2">University</th>
                                      <th className="px-3 py-2">Typical Tuition</th>
                                      <th className="px-3 py-2">Scholarship / Waiver</th>
                                      <th className="px-3 py-2">Estimated Net Tuition</th>
                                      <th className="px-3 py-2 text-right">Visit</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {data.universities.map((u, i) => (
                                      <tr key={i} className="border-t border-white/5 hover:bg-white/5">
                                        <td className="px-3 py-3 text-copper-500 font-semibold">{u.name}</td>
                                        <td className="px-3 py-3 text-white/60">{u.tuition}</td>
                                        <td className="px-3 py-3 text-white/60">{u.scholarship}</td>
                                        <td className="px-3 py-3 text-white/60">{u.net}</td>
                                        <td className="px-3 py-3 text-right">
                                          {u.link ? (
                                            <a href={u.link} target="_blank" rel="noopener noreferrer" className="inline-block px-3 py-1 text-xs bg-white/5 rounded hover:bg-white/10">Visit</a>
                                          ) : (
                                            <span className="text-xs text-white/40">—</span>
                                          )}
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                              <p className="text-xs text-white/40 mt-3 italic">{data.universitiesNote}</p>
                            </div>
                          </div>
                        ) : (
                          <>
                            <div className="lg:col-span-2 glass-card p-6">
                              <h3 className="font-semibold text-white mb-6">Cost Breakdown</h3>
                              <div className="space-y-4">
                                {[
                                  { label: 'Tuition Fees', value: data.cost.tuition, icon: FiBook, color: 'text-copper-400' },
                                  { label: 'Living Expenses', value: data.cost.living, icon: FiMapPin, color: 'text-copper-500' },
                                  { label: 'Total Estimated', value: data.cost.total, icon: FiDollarSign, color: 'text-copper-600' },
                                ].map(({ label, value, icon: Icon, color }) => (
                                  <div key={label} className="flex items-center justify-between p-4 glass-card">
                                    <div className="flex items-center gap-3">
                                      <Icon className={`w-5 h-5 ${color}`} />
                                      <span className="text-white/70">{label}</span>
                                    </div>
                                    <span className={`font-semibold ${color}`}>{value}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="glass-card p-6">
                              <h3 className="font-semibold text-white mb-4">Scholarship Options</h3>
                              <p className="text-sm text-white/50 mb-4">Multiple scholarship opportunities available to reduce costs significantly.</p>
                              <Link to="/book-consultation" className="btn-gold w-full justify-center text-sm">
                                Find Scholarships
                              </Link>
                            </div>
                          </>
                        )}
                      </>
                    )}

                    {activeTab === 'visa' && (
                      <>
                        <div className="lg:col-span-2 glass-card p-6">
                          <h3 className="font-semibold text-white mb-6">Visa Information</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            {[
                              { label: 'Visa Type', value: data.visa.type },
                              { label: 'Duration', value: data.visa.duration },
                              { label: 'Work Rights', value: data.visa.work },
                              { label: 'Processing Time', value: data.visa.processing },
                            ].map(({ label, value }) => (
                              <div key={label} className="glass-card p-3">
                                <p className="text-xs text-white/40 mb-1">{label}</p>
                                <p className="text-sm font-medium text-white">{value}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="glass-card p-6">
                          <h3 className="font-semibold text-white mb-4">Requirements</h3>
                          <ul className="space-y-2">
                            {data.requirements.map(r => (
                              <li key={r} className="flex items-start gap-2 text-xs text-white/60">
                                <FiCheckCircle className="w-3.5 h-3.5 text-copper-400 flex-shrink-0 mt-0.5" /> {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}

                    {activeTab === 'courses' && (
                      <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {data.popular.map((course, i) => (
                          <motion.div
                            key={course}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="glass-card-hover p-4 text-center"
                          >
                            <Link
                              to={`/destinations/${selected}/${toCourseSlug(course)}`}
                              className="block hover:text-copper-400 transition-colors"
                            >
                              <FiBook className="w-6 h-6 text-copper-400 mx-auto mb-2" />
                              <p className="text-sm text-white/70">{course}</p>
                              <p className="text-xs text-copper-500 mt-1 inline-flex items-center gap-1">
                                View details <FiArrowRight className="w-3 h-3" />
                              </p>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

          {/* If no country selected, show grid */}
          {!selected && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allCountries.map((c, i) => {
                const d = countryData[c]
                return (
                  <AnimatedSection key={c} delay={i * 0.08}>
                    <motion.article
                      whileHover={{ y: -6, scale: 1.02 }}
                      onClick={() => setSelected(c)}
                      className="country-card h-64 cursor-pointer"
                    >
                      <img
                        src={optimizeImageUrl(d.image, { width: 800, height: 512 })}
                        alt={`Study destination image for ${d.name}`}
                        width="800"
                        height="512"
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${d.color} opacity-60`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-6 left-6 z-10">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-3xl">{d.flag}</span>
                          <h3 className="text-xl font-bold text-white">{d.name}</h3>
                        </div>
                        <p className="text-sm text-white/60">{d.tagline}</p>
                      </div>
                    </motion.article>
                  </AnimatedSection>
                )
              })}
            </div>
          )}
        </div>
      </section>

      <ConsultationForm />
    </div>
  )
}
