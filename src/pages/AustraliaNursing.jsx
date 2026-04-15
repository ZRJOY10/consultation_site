import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiCheckCircle, FiArrowLeft, FiExternalLink } from 'react-icons/fi'

const cheapestUniversities = [
  { name: 'Federation University Australia', tuition: '~27,600', location: 'Victoria', link: 'https://www.federation.edu.au/' },
  { name: 'University of Southern Queensland', tuition: '~28,800', location: 'Queensland', link: 'https://www.unisq.edu.au/' },
  { name: 'Charles Sturt University', tuition: '~29,200', location: 'NSW', link: 'https://www.csu.edu.au/' },
  { name: 'CQUniversity Australia', tuition: '~29,600', location: 'Queensland', link: 'https://www.cqu.edu.au/' },
  { name: 'Southern Cross University', tuition: '~28,000', location: 'NSW / QLD', link: 'https://www.scu.edu.au/' },
  { name: 'Charles Darwin University', tuition: '~26,000', location: 'Northern Territory', link: 'https://www.cdu.edu.au/' },
  { name: 'University of the Sunshine Coast', tuition: '~31,000', location: 'Queensland', link: 'https://www.usc.edu.au/' },
  { name: 'University of New England', tuition: '~30,400', location: 'NSW', link: 'https://www.une.edu.au/' },
  { name: 'Western Sydney University', tuition: '~34,000 (often scholarship available)', location: 'NSW', link: 'https://www.westernsydney.edu.au/' },
  { name: 'Central Queensland University', tuition: '~33,450', location: 'Queensland', link: 'https://www.cqu.edu.au/' },
  { name: 'James Cook University', tuition: '~34,960', location: 'Queensland', link: 'https://www.jcu.edu.au/' },
  { name: 'Flinders University', tuition: '~38,300', location: 'South Australia', link: 'https://www.flinders.edu.au/' },
  { name: 'Edith Cowan University', tuition: '~40,800', location: 'Western Australia', link: 'https://www.ecu.edu.au/' },
  { name: 'University of Tasmania', tuition: '~35,950', location: 'Tasmania', link: 'https://www.utas.edu.au/' },
  { name: 'Victoria University', tuition: '~30,000 - 32,000', location: 'Melbourne', link: 'https://www.vu.edu.au/' },
]

const budgetOptions = [
  'Federation University Australia',
  'Charles Darwin University',
  'University of Southern Queensland',
  'CQUniversity Australia',
  'Southern Cross University',
]

const topUniversities = [
  'University of Sydney',
  'Monash University',
  'University of Queensland',
  'Deakin University',
  'Griffith University',
]

const admissionRequirements = {
  bachelor: [
    'Completion of Year 12 or equivalent',
    'Science subjects (Biology preferred)',
    'Minimum 60-70% academic score',
  ],
  master: [
    'Bachelor degree (science/health preferred)',
    'Minimum 60-70% GPA equivalent',
  ],
}

const careerPaths = [
  'Registered Nurse (RN)',
  'Clinical Nurse',
  'Community Health Nurse',
  'Mental Health Nurse',
  'Aged Care Nurse',
  'Emergency / ICU Nurse',
]

const employers = [
  'Hospitals',
  'Aged care facilities',
  'Community health centres',
  'Private clinics',
]

export default function AustraliaNursing() {
  return (
    <div className="pt-20">
      <section aria-label="Australia nursing hero" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-copper-900/20 to-copper-700/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link to="/destinations/australia" className="inline-flex items-center gap-2 text-sm text-copper-500 hover:text-copper-400 transition-colors mb-6">
            <FiArrowLeft className="w-4 h-4" /> Back to Australia
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black font-poppins text-white mb-4 leading-tight"
          >
            Study Nursing in <span className="gradient-text">Australia</span>
          </motion.h1>
          <p className="text-copper-500 max-w-3xl text-base sm:text-lg">
            Complete guide for international students: university options, fees, admission requirements, clinical training, and career outcomes.
          </p>
        </div>
      </section>

      <section aria-label="Australia nursing course details" className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-5">Why Study Nursing in Australia?</h2>
            <ul className="space-y-4 text-white/70">
              {[
                'Australia is one of the most popular destinations for international students who want to build a successful career in healthcare.',
                'Australian universities provide globally recognized nursing education with strong health science programs.',
                'Nursing degrees include extensive clinical placements in hospitals and healthcare facilities.',
                'Nursing is one of the most in-demand professions in Australia across hospitals, aged care, and community health.',
                'Registered nurses can earn competitive salaries from around AUD $65,000 to $100,000+ based on specialization and experience.',
                'International students can work part-time while studying and gain local exposure.',
                'Nursing appears on skilled occupation pathways that may support long-term migration goals.',
                'Australian nursing qualifications are respected globally and support international career mobility.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <FiCheckCircle className="w-4 h-4 text-copper-400 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-6 md:p-8 overflow-x-auto">
            <h2 className="text-2xl font-bold text-white mb-5">Top 15 Cheapest Nursing Universities in Australia (Under ~$30K)</h2>
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
                {cheapestUniversities.map((uni) => (
                  <tr key={uni.name} className="border-b border-white/5 hover:bg-white/[0.03]">
                    <td className="py-3 pr-4 text-copper-500 font-semibold">{uni.name}</td>
                    <td className="py-3 pr-4 text-white/70">{uni.tuition}</td>
                    <td className="py-3 pr-4 text-white/70">{uni.location}</td>
                    <td className="py-3 text-right">
                      <a
                        href={uni.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-copper-400 hover:text-copper-300"
                      >
                        Visit <FiExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-5 p-4 rounded-xl bg-copper-600/10 border border-copper-500/20">
              <p className="text-copper-400 font-semibold mb-2">Cheapest Options (Best for Budget Students)</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white/70 text-sm">
                {budgetOptions.map((name) => (
                  <li key={name} className="flex items-center gap-2">
                    <FiCheckCircle className="w-3.5 h-3.5 text-copper-400 flex-shrink-0" />
                    {name}
                  </li>
                ))}
              </ul>
              <p className="text-white/60 text-sm mt-3">Tuition is generally around AUD $26K - $30K per year for these options.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass-card p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white mb-5">Programs Available</h2>
              <div className="space-y-5 text-white/70">
                <div>
                  <h3 className="text-copper-500 font-semibold">Bachelor of Nursing</h3>
                  <p>Duration: 3 years full-time</p>
                  <p>Prepares students to become Registered Nurses (RN) in Australia with theory, simulation, and hospital placements.</p>
                </div>
                <div>
                  <h3 className="text-copper-500 font-semibold">Master of Nursing / Master of Nursing Practice</h3>
                  <p>Duration: 1.5-2 years</p>
                  <p>Suitable for non-nursing graduates (pre-registration) and registered nurses seeking advanced specialization.</p>
                  <p>Graduates of accredited programs can apply for AHPRA registration.</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white mb-5">Tuition Fees (International Students)</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3"><FiCheckCircle className="w-4 h-4 text-copper-400 mt-1" />Bachelor of Nursing: AUD 28,000 - 42,000 / year</li>
                <li className="flex items-start gap-3"><FiCheckCircle className="w-4 h-4 text-copper-400 mt-1" />Master of Nursing: AUD 36,000 - 50,000 / year</li>
                <li className="flex items-start gap-3"><FiCheckCircle className="w-4 h-4 text-copper-400 mt-1" />Example: Adelaide University Bachelor of Nursing is about AUD $46,700/year</li>
                <li className="flex items-start gap-3"><FiCheckCircle className="w-4 h-4 text-copper-400 mt-1" />Scholarships of 20-30% are often available at many universities</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass-card p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white mb-5">Admission Requirements</h2>
              <h3 className="text-copper-500 font-semibold mb-2">Bachelor of Nursing</h3>
              <ul className="space-y-2 text-white/70 mb-5">
                {admissionRequirements.bachelor.map((item) => (
                  <li key={item} className="flex items-start gap-2"><FiCheckCircle className="w-4 h-4 text-copper-400 mt-1" />{item}</li>
                ))}
              </ul>

              <h3 className="text-copper-500 font-semibold mb-2">Master of Nursing</h3>
              <ul className="space-y-2 text-white/70">
                {admissionRequirements.master.map((item) => (
                  <li key={item} className="flex items-start gap-2"><FiCheckCircle className="w-4 h-4 text-copper-400 mt-1" />{item}</li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white mb-5">English & Clinical Training</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3"><FiCheckCircle className="w-4 h-4 text-copper-400 mt-1" />IELTS overall 7.0 (often strict per-band requirement)</li>
                <li className="flex items-start gap-3"><FiCheckCircle className="w-4 h-4 text-copper-400 mt-1" />PTE Academic around 65-66 overall</li>
                <li className="flex items-start gap-3"><FiCheckCircle className="w-4 h-4 text-copper-400 mt-1" />TOEFL iBT around 94</li>
                <li className="flex items-start gap-3"><FiCheckCircle className="w-4 h-4 text-copper-400 mt-1" />Mandatory placements: typically 800-1000 hours in hospitals/healthcare settings</li>
                <li className="flex items-start gap-3"><FiCheckCircle className="w-4 h-4 text-copper-400 mt-1" />Simulation labs and real clinical settings are required for registration pathways</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass-card p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white mb-5">Universities Offering Nursing Programs</h2>
              <ul className="space-y-2 text-white/70">
                {topUniversities.map((uni) => (
                  <li key={uni} className="flex items-start gap-2">
                    <FiCheckCircle className="w-4 h-4 text-copper-400 mt-1" />
                    {uni}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white mb-5">Employment Opportunities After Graduation</h2>
              <ul className="space-y-2 text-white/70 mb-4">
                {careerPaths.map((role) => (
                  <li key={role} className="flex items-start gap-2"><FiCheckCircle className="w-4 h-4 text-copper-400 mt-1" />{role}</li>
                ))}
              </ul>
              <p className="text-copper-500 font-semibold mb-2">Major employers</p>
              <ul className="space-y-2 text-white/70">
                {employers.map((employer) => (
                  <li key={employer} className="flex items-start gap-2"><FiCheckCircle className="w-4 h-4 text-copper-400 mt-1" />{employer}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="glass-card p-6 md:p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Need Help Applying for Nursing in Australia?</h3>
            <p className="text-white/60 mb-6">Get expert guidance for university selection, scholarships, admission, and visa process.</p>
            <Link to="/book-consultation" className="btn-primary inline-flex px-6 py-3">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
