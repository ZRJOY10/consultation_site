import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCheckCircle, FiArrowRight, FiStar, FiClock, FiBook, FiAward } from 'react-icons/fi'
import AnimatedSection from '../components/AnimatedSection'
import ConsultationForm from '../components/home/ConsultationForm'
import { Link } from 'react-router-dom'

const features = [
  { icon: FiStar, title: 'Expert Trainers', desc: 'Learn from certified trainers with 10+ years experience and proven score improvement records.' },
  { icon: FiClock, title: 'Flexible Schedule', desc: 'Morning, evening and weekend batches available. Online and offline options.' },
  { icon: FiBook, title: 'Study Materials', desc: 'Comprehensive study materials, mock tests, and practice exercises included.' },
  { icon: FiAward, title: 'Score Guarantee', desc: 'Score improvement guarantee or free re-enrollment in our advanced program.' },
]

const courses = [
  { name: 'PTE Academic', duration: '4 weeks', sessions: '20 sessions', price: 'AUD 599', target: '65+ score', popular: true, includes: ['20 practice tests', 'Study materials', 'Mock exam', 'Score prediction tool', '1-on-1 feedback'] },
  { name: 'IELTS General', duration: '6 weeks', sessions: '24 sessions', price: 'AUD 499', target: '6.5+ band', includes: ['Grammar module', 'Writing workshops', 'Speaking practice', 'Reading strategies', 'Full mock tests'] },
  { name: 'IELTS Academic', duration: '6 weeks', sessions: '24 sessions', price: 'AUD 549', target: '7.0+ band', includes: ['Academic writing', 'Complex reading', 'Listening strategies', 'Mock tests', 'Band score analysis'] },
  { name: 'Crash Course', duration: '2 weeks', sessions: '10 sessions', price: 'AUD 349', target: 'Score boost', includes: ['Intensive practice', 'Key strategies', 'Mock exam', 'Quick reference guides'] },
]

const scoreProgress = [
  { label: 'Average Score Improvement', before: 55, after: 72, unit: 'PTE score' },
  { label: 'IELTS Band Improvement', before: 5.5, after: 7.0, unit: 'bands' },
  { label: 'Students Achieving Target', value: '89%', subtext: 'achieve their required score' },
]

export default function PTETraining() {
  const [selected, setSelected] = useState(0)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section aria-label="PTE and IELTS training hero" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-copper-900/15 to-copper-900/20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1.5 bg-copper-600/20 border border-copper-500/30 rounded-full text-copper-400 text-sm font-medium mb-4">
                English Proficiency Training
              </motion.span>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-poppins leading-tight mb-6">
                PTE & IELTS <span className="gradient-text">Training</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-copper-700/70 text-base sm:text-lg mb-8 leading-relaxed">
                Score-boosting preparation courses designed to help you achieve your target score and secure admission to your dream university.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-consultation" className="btn-primary">Enroll Now <FiArrowRight className="w-4 h-4" /></Link>
                <a href="#courses" className="btn-secondary">View Courses</a>
              </motion.div>
            </div>
            {/* Stats */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { value: '5,000+', label: 'Students Trained' },
                { value: '89%', label: 'Achieve Target Score' },
                { value: '+2', label: 'Average Band Improvement' },
                { value: '4.9/5', label: 'Student Rating' },
              ].map(({ value, label }) => (
                <div key={label} className="glass-card p-5 text-center">
                  <p className="text-3xl font-black gradient-text mb-1">{value}</p>
                  <p className="text-sm text-slate-500">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section aria-label="Training program features" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="glass-card-hover p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-copper-600/20 border border-copper-500/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5 text-copper-400" />
                  </div>
                  <h3 className="font-semibold text-copper-900 mb-2">{title}</h3>
                  <p className="text-sm text-copper-700/70 leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" aria-label="Available training courses" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4">Choose Your <span className="gradient-text">Course</span></h2>
            <p className="text-copper-700/70">Select the program that fits your goals and schedule</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map(({ name, duration, sessions, price, target, popular, includes }, i) => (
              <AnimatedSection key={name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  onClick={() => setSelected(i)}
                  className={`glass-card-hover p-6 cursor-pointer relative overflow-hidden ${selected === i ? 'border-copper-500/50' : ''}`}
                >
                  {popular && (
                    <div className="absolute top-0 right-0 bg-copper-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">POPULAR</div>
                  )}
                  <h3 className="font-bold text-copper-900 mb-1">{name}</h3>
                  <p className="text-copper-400 text-sm mb-4">Target: {target}</p>
                  <div className="text-3xl font-black gradient-text mb-1">{price}</div>
                  <p className="text-xs text-copper-700/70 mb-4">{duration} • {sessions}</p>
                  <ul className="space-y-1.5 mb-6">
                    {includes.map(item => (
                      <li key={item} className="flex items-center gap-2 text-xs text-copper-700/70">
                        <FiCheckCircle className="w-3.5 h-3.5 text-copper-400 flex-shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/book-consultation" className="btn-primary w-full justify-center text-sm">Enroll</Link>
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
