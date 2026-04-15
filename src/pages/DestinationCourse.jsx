import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiCheckCircle, FiBook, FiDollarSign, FiUsers, FiBriefcase, FiExternalLink } from 'react-icons/fi'
import { getCourseGuide } from '../data/courseGuides'

function formatLabel(value = '') {
  return value
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

export default function DestinationCourse() {
  const { country = '', course = '' } = useParams()
  const guide = getCourseGuide(country, course)

  const countryLabel = guide?.countryName || formatLabel(country)
  const courseLabel = guide?.courseName || formatLabel(course)

  const quickStats = guide
    ? [
        { label: 'Programs', value: `${guide.programs?.length || 0}+`, icon: FiBook },
        { label: 'Budget Universities', value: `${guide.cheapestUniversities?.length || 0}+`, icon: FiDollarSign },
        { label: 'Top Universities', value: `${guide.topUniversities?.length || 0}+`, icon: FiUsers },
        { label: 'Career Paths', value: `${guide.careerPaths?.length || 0}+`, icon: FiBriefcase },
      ]
    : []

  if (!guide) {
    return (
      <div className="pt-20">
        <section aria-label="Course page unavailable message" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-copper-900/20 to-copper-700/10 pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <Link to={`/destinations/${country}`} className="inline-flex items-center gap-2 text-sm text-copper-500 hover:text-copper-400 transition-colors mb-6">
              <FiArrowLeft className="w-4 h-4" /> Back to {countryLabel}
            </Link>
            <div className="glass-card p-10 md:p-12 text-center rounded-3xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                {courseLabel} in <span className="gradient-text">{countryLabel}</span>
              </h1>
              <p className="text-white/60 mb-8 max-w-2xl mx-auto">
                Detailed content for this course is being prepared. Please book a free consultation for personalized guidance.
              </p>
              <Link to="/book-consultation" className="btn-primary inline-flex px-6 py-3">Book Free Consultation</Link>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="pt-20">
      <section aria-label="Course guide hero" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-copper-900/30 to-copper-700/10 pointer-events-none" />
        <div className="absolute -top-24 -right-20 w-80 h-80 bg-copper-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-copper-700/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link to={`/destinations/${country}`} className="inline-flex items-center gap-2 text-sm text-copper-400 hover:text-copper-300 transition-colors mb-6 glass-card px-4 py-2 rounded-xl">
            <FiArrowLeft className="w-4 h-4" /> Back to {countryLabel}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-3xl p-8 md:p-10"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-poppins text-white mb-4 leading-tight">
              Study {guide.courseName} in <span className="gradient-text">{guide.countryName}</span>
            </h1>
            <p className="text-copper-400/90 max-w-3xl text-base sm:text-lg mb-8">
              Complete guide for international students with fees, universities, admissions, placements, and career pathways.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickStats.map(({ label, value, icon: Icon }) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="w-9 h-9 rounded-xl bg-copper-500/15 border border-copper-500/20 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-copper-400" />
                  </div>
                  <p className="text-xl font-bold text-white leading-none mb-1">{value}</p>
                  <p className="text-xs text-white/55 uppercase tracking-wider">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section aria-label="Course guide details" className="pb-24 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="glass-card p-6 md:p-8 rounded-3xl">
            <h2 className="text-2xl font-bold text-white mb-5">Why Study {guide.courseName} in {guide.countryName}?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {guide.whyStudy?.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 flex items-start gap-3 text-white/70">
                  <FiCheckCircle className="w-4 h-4 text-copper-400 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {guide.cheapestUniversities?.length > 0 && (
            <div className="glass-card p-6 md:p-8 overflow-x-auto rounded-3xl">
              <h2 className="text-2xl font-bold text-white mb-5">Top Cheapest Universities</h2>
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-white/60 border-b border-white/10">
                    <th className="py-3 pr-4">University</th>
                    <th className="py-3 pr-4">Approx Tuition (AUD/year)</th>
                    <th className="py-3 pr-4">Location</th>
                    <th className="py-3 text-right">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {guide.cheapestUniversities.map((uni) => (
                    <tr key={uni.name} className="border-b border-white/5 hover:bg-white/[0.03]">
                      <td className="py-3 pr-4 text-copper-500 font-semibold">{uni.name}</td>
                      <td className="py-3 pr-4 text-white/70">{uni.tuition}</td>
                      <td className="py-3 pr-4 text-white/70">{uni.location}</td>
                      <td className="py-3 text-right">
                        <a href={uni.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-copper-400 hover:text-copper-300">
                          Visit <FiExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {guide.budgetOptions?.length > 0 && (
                <div className="mt-5 p-4 rounded-xl bg-copper-600/10 border border-copper-500/20">
                  <p className="text-copper-400 font-semibold mb-2">Cheapest Options (Best for Budget Students)</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white/70 text-sm">
                    {guide.budgetOptions.map((name) => (
                      <li key={name} className="flex items-center gap-2">
                        <FiCheckCircle className="w-3.5 h-3.5 text-copper-400 flex-shrink-0" />
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass-card p-6 md:p-8 rounded-3xl">
              <h2 className="text-2xl font-bold text-white mb-5">Programs Available</h2>
              <div className="space-y-5 text-white/70">
                {guide.programs?.map((program) => (
                  <div key={program.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                    <h3 className="text-copper-500 font-semibold">{program.title}</h3>
                    <p>Duration: {program.duration}</p>
                    {program.details?.map((detail) => <p key={detail}>{detail}</p>)}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-3xl">
              <h2 className="text-2xl font-bold text-white mb-5">Tuition Fees</h2>
              <ul className="space-y-3 text-white/70">
                {guide.tuition?.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <FiCheckCircle className="w-4 h-4 text-copper-400 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass-card p-6 md:p-8 rounded-3xl">
              <h2 className="text-2xl font-bold text-white mb-5">Admission Requirements</h2>
              <h3 className="text-copper-500 font-semibold mb-2">Bachelor</h3>
              <ul className="space-y-2 text-white/70 mb-5">
                {guide.admission?.bachelor?.map((item) => (
                  <li key={item} className="flex items-start gap-2"><FiCheckCircle className="w-4 h-4 text-copper-400 mt-1" />{item}</li>
                ))}
              </ul>
              <h3 className="text-copper-500 font-semibold mb-2">Master</h3>
              <ul className="space-y-2 text-white/70">
                {guide.admission?.master?.map((item) => (
                  <li key={item} className="flex items-start gap-2"><FiCheckCircle className="w-4 h-4 text-copper-400 mt-1" />{item}</li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-3xl">
              <h2 className="text-2xl font-bold text-white mb-5">English & Clinical Training</h2>
              <ul className="space-y-3 text-white/70">
                {guide.englishAndClinical?.map((item) => (
                  <li key={item} className="flex items-start gap-3"><FiCheckCircle className="w-4 h-4 text-copper-400 mt-1" />{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass-card p-6 md:p-8 rounded-3xl">
              <h2 className="text-2xl font-bold text-white mb-5">Top Universities</h2>
              <ul className="space-y-2 text-white/70">
                {guide.topUniversities?.map((item) => (
                  <li key={item} className="flex items-start gap-2"><FiCheckCircle className="w-4 h-4 text-copper-400 mt-1" />{item}</li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-3xl">
              <h2 className="text-2xl font-bold text-white mb-5">Career Opportunities</h2>
              <ul className="space-y-2 text-white/70 mb-4">
                {guide.careerPaths?.map((item) => (
                  <li key={item} className="flex items-start gap-2"><FiCheckCircle className="w-4 h-4 text-copper-400 mt-1" />{item}</li>
                ))}
              </ul>
              <p className="text-copper-500 font-semibold mb-2">Major employers</p>
              <ul className="space-y-2 text-white/70">
                {guide.employers?.map((item) => (
                  <li key={item} className="flex items-start gap-2"><FiCheckCircle className="w-4 h-4 text-copper-400 mt-1" />{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="glass-card p-8 md:p-10 text-center rounded-3xl border border-copper-500/20 bg-gradient-to-br from-copper-600/10 to-copper-900/10">
            <h3 className="text-2xl font-bold text-white mb-3">Need help with your application?</h3>
            <p className="text-white/60 mb-6">Get guidance for course selection, admission, scholarships, and visa process.</p>
            <Link to="/book-consultation" className="btn-primary inline-flex px-6 py-3">Book Free Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
