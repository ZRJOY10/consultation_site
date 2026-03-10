import { motion } from 'framer-motion'
import { FiGlobe, FiFileText, FiDollarSign, FiBriefcase, FiHome, FiBook, FiArrowRight, FiCheck } from 'react-icons/fi'
import AnimatedSection from '../components/AnimatedSection'
import ConsultationForm from '../components/home/ConsultationForm'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: FiGlobe,
    title: 'Study Abroad Counselling',
    description: 'Our certified counsellors provide comprehensive guidance to help you choose the right country, university and course that perfectly aligns with your academic background and career aspirations.',
    color: 'from-blue-600 to-blue-400',
    includes: [
      'In-depth profile evaluation',
      'Country and course selection',
      'University shortlisting (3-5 options)',
      'Application strategy planning',
      'SOP and LOR guidance',
      'Interview preparation',
    ],
    process: ['Profile Assessment', 'Goal Setting', 'University Shortlisting', 'Application Support'],
  },
  {
    icon: FiFileText,
    title: 'Visa Processing',
    description: 'End-to-end visa application management with a 98% success rate. We handle all documentation, provide mock interviews and stay with you until your visa is in hand.',
    color: 'from-green-600 to-green-400',
    includes: [
      'Complete documentation checklist',
      'Document verification & review',
      'SOP writing (visa specific)',
      'Financial documents guidance',
      'Mock visa interviews',
      'Application lodgement',
    ],
    process: ['Document Prep', 'Application Review', 'Submission', 'Decision Tracking'],
  },
  {
    icon: FiDollarSign,
    title: 'Scholarship Assistance',
    description: 'We identify scholarships you qualify for and provide expert guidance on how to write compelling applications that win. Our students have collectively won over $5 million in scholarships.',
    color: 'from-amber-600 to-amber-400',
    includes: [
      'Scholarship eligibility assessment',
      'Database of 500+ scholarships',
      'Scholarship essay writing',
      'Application proofreading',
      'Deadline tracking',
      'Result notification',
    ],
    process: ['Eligibility Check', 'Scholarship Search', 'Application', 'Award'],
  },
  {
    icon: FiBriefcase,
    title: 'Career Counselling',
    description: 'Strategic career planning to ensure your international degree translates to maximum career growth and ROI. We map your course selection to your 5-year career vision.',
    color: 'from-purple-600 to-purple-400',
    includes: [
      'Career goal assessment',
      'Industry-course alignment',
      'Graduate employment pathways',
      'CV and LinkedIn optimization',
      'Interview skills coaching',
      'Job search strategies',
    ],
    process: ['Career Mapping', 'Course/Uni Selection', 'Skill Building', 'Job Readiness'],
  },
  {
    icon: FiHome,
    title: 'Migration Advice',
    description: 'Expert permanent residency and migration planning. We help you structure your study choices today to maximize your PR chances tomorrow.',
    color: 'from-rose-600 to-rose-400',
    includes: [
      'PR eligibility points assessment',
      'State nomination guidance',
      'Course selection for PR pathways',
      'Employer-sponsored visa advice',
      'Family migration planning',
      'Citizenship pathway guidance',
    ],
    process: ['Points Assessment', 'Pathway Planning', 'Visa Application', 'PR Grant'],
  },
  {
    icon: FiBook,
    title: 'PTE / IELTS Training',
    description: 'Dedicated English proficiency test preparation with experienced instructors and guaranteed score improvement programs.',
    color: 'from-cyan-600 to-cyan-400',
    includes: [
      'Diagnostic test assessment',
      'Personalized study plan',
      '40+ hours of instruction',
      'Practice test materials',
      'Weekly mock tests',
      'Score guarantee program',
    ],
    process: ['Diagnostic Test', 'Study Plan', 'Training', 'Exam Day'],
  },
]

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-blue-900/20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1.5 bg-green-600/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-4">
            Our Services
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl font-black font-poppins mb-6">
            Complete <span className="gradient-text">Study Abroad</span> Solutions
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-slate-400 max-w-3xl mx-auto">
            From initial counselling to landing at your dream university — we handle every step with expertise and care.
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {services.map(({ icon: Icon, title, description, color, includes, process }, i) => (
            <AnimatedSection key={title} delay={0.1}>
              <div className="glass-card-hover p-8 md:p-10 group">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  {/* Main info */}
                  <div className="lg:col-span-1">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} p-0.5 mb-4 shadow-lg`}>
                      <div className="w-full h-full bg-[#0f172a] rounded-2xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{description}</p>
                    <Link to="/book-consultation" className={`inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                      Get Started <FiArrowRight className="w-4 h-4 text-blue-400" />
                    </Link>
                  </div>

                  {/* What's included */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">What's Included</h4>
                    <ul className="space-y-2">
                      {includes.map(item => (
                        <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                          <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${color} flex items-center justify-center flex-shrink-0`}>
                            <FiCheck className="w-2.5 h-2.5 text-white" />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Our Process</h4>
                    <div className="space-y-3">
                      {process.map((step, j) => (
                        <div key={step} className="flex items-center gap-3">
                          <div className={`w-7 h-7 rounded-full bg-gradient-to-r ${color} flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}>
                            {j + 1}
                          </div>
                          <span className="text-sm text-slate-300">{step}</span>
                          {j < process.length - 1 && (
                            <div className={`w-px h-6 bg-gradient-to-b ${color} opacity-30 ml-3 translate-y-5 absolute`} />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <ConsultationForm />
    </div>
  )
}
