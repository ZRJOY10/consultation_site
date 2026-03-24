import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiUser, FiPhone, FiMail, FiGlobe, FiBook, FiCheckCircle } from 'react-icons/fi'
import toast from 'react-hot-toast'
import AnimatedSection from '../AnimatedSection'
import SectionBadge from '../SectionBadge'
import { useTheme } from '../../context/ThemeContext'

const countries = ['Australia', 'Canada', 'United Kingdom', 'United States', 'New Zealand', 'Malta', 'Other']
const levels = ['Foundation / Diploma', 'Bachelor\'s Degree', 'Master\'s Degree', 'PhD / Doctorate', 'Short Courses', 'English / PTE Training']

export default function ConsultationForm() {
  const { isDark } = useTheme()
  const [form, setForm] = useState({ name: '', phone: '', email: '', country: '', level: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setLoading(false)
    setSubmitted(true)
    toast.success('Consultation request submitted! We\'ll call you within 24 hours.')
  }

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-copper-950/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-hero-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-copper-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Info */}
          <AnimatedSection direction="right">
            <SectionBadge variant="subtle" className="mb-6">Free Consultation</SectionBadge>
            <h2 className="section-title mb-6">
              Start Your <span className="gradient-text">Journey</span> Today
            </h2>
            <p className={`text-lg leading-relaxed mb-8 ${isDark ? 'text-slate-400' : 'text-copper-700/70'}`}>
              Book a FREE consultation with our expert counsellors. Get personalized advice on courses, universities, 
              scholarships and visa processes. No obligation, just expert guidance.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {[
                '30-minute free consultation with a certified counsellor',
                'Personalized study plan based on your goals',
                'University shortlist and scholarship opportunities',
                'Visa requirements and eligibility assessment',
                'No hidden fees, no obligations',
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-copper-500/20 border border-copper-500/30 flex items-center justify-center flex-shrink-0">
                    <FiCheckCircle className="w-3 h-3 text-copper-400" />
                  </div>
                  <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-copper-700/70'}`}>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {['⭐ 4.9/5 Rating', '🎖️ MARA Registered', '🏆 Award Winning', '✅ 98% Visa Success'].map(badge => (
                <span key={badge} className={`px-3 py-1.5 glass-card text-xs font-medium ${isDark ? 'text-slate-400' : 'text-copper-700/70'}`}>
                  {badge}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection direction="left">
            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="glass-card p-10 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-copper-500/20 border-2 border-copper-500/30 flex items-center justify-center mx-auto mb-6">
                  <FiCheckCircle className="w-10 h-10 text-copper-400" />
                </div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-copper-900'} mb-3`}>We'll Be In Touch!</h3>
                <p className={isDark ? 'text-slate-400' : 'text-copper-700/70'}>Your consultation request has been received. Our team will contact you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="btn-primary mt-6">
                  Book Another
                </button>
              </motion.div>
            ) : (
              <div className="glass-card p-8 md:p-10">
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-copper-900'} mb-2`}>Get Free Expert Advice</h3>
                <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-copper-700/60'} mb-7`}>Fill out the form and we'll contact you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div className="relative">
                    <FiUser className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${isDark ? 'text-slate-600' : 'text-copper-700/40'}`} />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Full Name *"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="input-field pl-11"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="relative">
                      <FiPhone className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${isDark ? 'text-slate-600' : 'text-copper-700/40'}`} />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number *"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        className="input-field pl-11"
                      />
                    </div>
                    {/* Email */}
                    <div className="relative">
                      <FiMail className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${isDark ? 'text-slate-600' : 'text-copper-700/40'}`} />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="input-field pl-11"
                      />
                    </div>
                  </div>

                  {/* Country */}
                  <div className="relative">
                    <FiGlobe className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${isDark ? 'text-slate-600' : 'text-copper-700/40'} z-10 pointer-events-none`} />
                    <select
                      name="country"
                      required
                      value={form.country}
                      onChange={handleChange}
                      className="input-field pl-11 appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Preferred Country *</option>
                      {countries.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>

                  {/* Study level */}
                  <div className="relative">
                    <FiBook className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${isDark ? 'text-slate-600' : 'text-copper-700/40'} z-10 pointer-events-none`} />
                    <select
                      name="level"
                      required
                      value={form.level}
                      onChange={handleChange}
                      className="input-field pl-11 appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Study Level *</option>
                      {levels.map(l => <option key={l} value={l}>{l}</option>)}
                    </select>
                  </div>

                  {/* Message */}
                  <textarea
                    name="message"
                    placeholder="Tell us about your goals (optional)"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    className="input-field resize-none"
                  />

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-slate-500 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <FiSend className="w-4 h-4" />
                        Book My Free Consultation
                      </>
                    )}
                  </motion.button>

                  <p className={`text-xs text-center ${isDark ? 'text-slate-600' : 'text-copper-700/50'}`}>
                    By submitting, you agree to our privacy policy. We respect your data.
                  </p>
                </form>
              </div>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
