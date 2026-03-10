import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight, FiMapPin, FiUsers, FiBriefcase, FiBook, FiDollarSign, FiCheckCircle } from 'react-icons/fi'
import AnimatedSection from '../components/AnimatedSection'
import ConsultationForm from '../components/home/ConsultationForm'

const countryData = {
  australia: {
    name: 'Australia', flag: '🇦🇺', color: 'from-blue-700 to-blue-900',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&q=80',
    tagline: 'World-class education, stunning lifestyle',
    description: 'Australia offers world-class universities, a multicultural society, and excellent post-study work opportunities. With 8 universities in the global top 100, Australia is the third most popular destination for international students.',
    stats: [{ label: 'International Students', value: '700K+' }, { label: 'Top 100 Universities', value: '8' }, { label: 'Work Hours/Week', value: '48hrs' }, { label: 'Post-Study Visa', value: '4 yrs' }],
    intakes: ['February (Main)', 'July (Secondary)'],
    popular: ['Business & Commerce', 'Engineering', 'IT & Computer Science', 'Health & Medicine', 'Education'],
    cost: { tuition: 'AUD 20,000 – 45,000/year', living: 'AUD 18,000 – 25,000/year', total: 'AUD 38,000 – 70,000/year' },
    visa: { type: 'Student Visa (Subclass 500)', duration: 'Duration of course', work: '48 hrs/fortnight during study', processing: '4–6 weeks' },
    requirements: ['Offer of enrollment from registered provider', 'English proficiency (IELTS/PTE)', 'Genuine Temporary Entrant (GTE) statement', 'Financial capacity evidence', 'Health insurance (OSHC)', 'Health examinations'],
  },
  canada: {
    name: 'Canada', flag: '🇨🇦', color: 'from-red-700 to-red-900',
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
    name: 'United Kingdom', flag: '🇬🇧', color: 'from-indigo-700 to-indigo-900',
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
    name: 'United States', flag: '🇺🇸', color: 'from-sky-700 to-sky-900',
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
    name: 'New Zealand', flag: '🇳🇿', color: 'from-emerald-700 to-emerald-900',
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
    name: 'Malta', flag: '🇲🇹', color: 'from-amber-700 to-amber-900',
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

export default function Destinations() {
  const { country: paramCountry } = useParams()
  const [selected, setSelected] = useState(paramCountry || null)
  const [activeTab, setActiveTab] = useState('overview')

  const data = selected ? countryData[selected] : null

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 to-blue-900/20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-black font-poppins mb-6">
            Study <span className="gradient-text-gold">Destinations</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-white/60 max-w-2xl mx-auto">
            Explore top study destinations and find your perfect country to begin your international journey.
          </motion.p>
        </div>
      </section>

      {/* Country selector */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {allCountries.map(c => {
              const d = countryData[c]
              return (
                <button
                  key={c}
                  onClick={() => { setSelected(c === selected ? null : c); setActiveTab('overview') }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                    selected === c
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
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
                <div className="relative rounded-3xl overflow-hidden h-64 md:h-80 mb-8">
                  <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${data.color} opacity-70`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-5xl">{data.flag}</span>
                      <h2 className="text-4xl font-black text-white font-poppins">{data.name}</h2>
                    </div>
                    <p className="text-white/80">{data.tagline}</p>
                  </div>
                  {/* Stats */}
                  <div className="absolute right-8 bottom-8 z-10 flex gap-3">
                    {data.stats.map(s => (
                      <div key={s.label} className="glass-card px-3 py-2 text-center min-w-[80px]">
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
                        activeTab === tab ? 'bg-blue-600 text-white' : 'glass-card-hover text-white/60'
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
                            {data.intakes.map(i => <span key={i} className="px-3 py-1 glass-card text-sm text-blue-300">{i}</span>)}
                          </div>
                        </div>
                        <div className="glass-card p-6">
                          <h3 className="font-semibold text-white mb-4">Popular Courses</h3>
                          <ul className="space-y-2">
                            {data.popular.map(c => (
                              <li key={c} className="flex items-center gap-2 text-sm text-white/60">
                                <FiCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" /> {c}
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
                        <div className="lg:col-span-2 glass-card p-6">
                          <h3 className="font-semibold text-white mb-6">Cost Breakdown</h3>
                          <div className="space-y-4">
                            {[
                              { label: 'Tuition Fees', value: data.cost.tuition, icon: FiBook, color: 'text-blue-400' },
                              { label: 'Living Expenses', value: data.cost.living, icon: FiMapPin, color: 'text-green-400' },
                              { label: 'Total Estimated', value: data.cost.total, icon: FiDollarSign, color: 'text-amber-400' },
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

                    {activeTab === 'visa' && (
                      <>
                        <div className="lg:col-span-2 glass-card p-6">
                          <h3 className="font-semibold text-white mb-6">Visa Information</h3>
                          <div className="grid grid-cols-2 gap-4 mb-6">
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
                                <FiCheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" /> {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}

                    {activeTab === 'courses' && (
                      <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {data.popular.map((course, i) => (
                          <motion.div
                            key={course}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="glass-card-hover p-4 text-center"
                          >
                            <FiBook className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                            <p className="text-sm text-white/70">{course}</p>
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
                    <motion.div
                      whileHover={{ y: -6, scale: 1.02 }}
                      onClick={() => setSelected(c)}
                      className="country-card h-64 cursor-pointer"
                    >
                      <img src={d.image} alt={d.name} className="absolute inset-0 w-full h-full object-cover" />
                      <div className={`absolute inset-0 bg-gradient-to-t ${d.color} opacity-60`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-6 left-6 z-10">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-3xl">{d.flag}</span>
                          <h3 className="text-xl font-bold text-white">{d.name}</h3>
                        </div>
                        <p className="text-sm text-white/60">{d.tagline}</p>
                      </div>
                    </motion.div>
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
