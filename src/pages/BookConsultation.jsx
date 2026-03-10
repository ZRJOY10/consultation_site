import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiUser, FiPhone, FiMail, FiGlobe, FiBook, FiCalendar, FiClock, FiCheckCircle, FiSend } from 'react-icons/fi'
import { HiAcademicCap, HiSparkles } from 'react-icons/hi'
import AnimatedSection from '../components/AnimatedSection'
import toast from 'react-hot-toast'

const countries = ['Australia', 'Canada', 'United Kingdom', 'United States', 'New Zealand', 'Malta', 'Other']
const levels = ["Foundation / Diploma", "Bachelor's Degree", "Master's Degree", "PhD / Doctorate", "Short Courses", "English / PTE Training"]
const services = ['Study Abroad Counselling', 'Visa Processing', 'Scholarship Assistance', 'Career Counselling', 'Migration Advice', 'PTE / IELTS Training']
const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']

const counsellors = [
  { name: 'Sarah Mitchell', role: 'Study Abroad Expert', photo: 'https://images.unsplash.com/photo-1494790108755-2616b332c3b0?w=100&h=100&fit=crop', available: true, speciality: 'Australia, Canada, UK' },
  { name: 'David Chen', role: 'Visa Specialist', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop', available: true, speciality: 'Visa, Migration' },
  { name: 'Priya Kapoor', role: 'Scholarship Expert', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop', available: false, speciality: 'Scholarships, NZ' },
  { name: 'Michael Torres', role: 'USA & Canada Expert', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', available: true, speciality: 'USA, Canada' },
]

const steps = ['Personal Details', 'Study Preferences', 'Schedule', 'Confirmation']

export default function BookConsultation() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({ name: '', email: '', phone: '', country: '', level: '', service: '', date: '', time: '', counsellor: '', notes: '' })
  const [loading, setLoading] = useState(false)
  const [booked, setBooked] = useState(false)

  const update = (field, value) => setForm(prev => ({ ...prev, [field]: value }))

  const next = () => setStep(s => Math.min(s + 1, 3))
  const back = () => setStep(s => Math.max(s - 1, 0))

  const handleSubmit = async () => {
    setLoading(true)
    await new Promise(r => setTimeout(r, 1800))
    setLoading(false)
    setBooked(true)
    toast.success('Consultation booked! Check your email for confirmation.')
  }

  if (booked) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="max-w-md w-full mx-auto px-6 text-center">
          <div className="w-24 h-24 rounded-full bg-green-500/20 border-2 border-green-500/30 flex items-center justify-center mx-auto mb-6">
            <FiCheckCircle className="w-12 h-12 text-green-400" />
          </div>
          <h2 className="text-3xl font-bold font-poppins text-white mb-3">Consultation Booked!</h2>
          <p className="text-white/60 mb-2">Your free consultation has been confirmed.</p>
          <div className="glass-card p-5 my-6 text-left space-y-3">
            {form.date && <div className="flex justify-between text-sm"><span className="text-white/40">Date</span><span className="text-white">{form.date}</span></div>}
            {form.time && <div className="flex justify-between text-sm"><span className="text-white/40">Time</span><span className="text-white">{form.time}</span></div>}
            {form.counsellor && <div className="flex justify-between text-sm"><span className="text-white/40">Counsellor</span><span className="text-white">{form.counsellor}</span></div>}
            {form.country && <div className="flex justify-between text-sm"><span className="text-white/40">Destination</span><span className="text-white">{form.country}</span></div>}
          </div>
          <p className="text-sm text-white/40 mb-6">A confirmation email has been sent to {form.email || 'your email'}</p>
          <button onClick={() => { setBooked(false); setStep(0); setForm({ name: '', email: '', phone: '', country: '', level: '', service: '', date: '', time: '', counsellor: '', notes: '' }) }} className="btn-secondary">
            Book Another
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/15 to-purple-900/10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-2 mb-4">
            <HiSparkles className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400 font-medium">100% Free • No Obligation</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl font-black font-poppins mb-6">
            Book Your <span className="gradient-text">Free Consultation</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/60 text-lg">
            30 minutes with an expert counsellor. Get a personalized study plan, university recommendations and visa guidance.
          </motion.p>
        </div>
      </section>

      {/* Booking form */}
      <section className="pb-24">
        <div className="max-w-2xl mx-auto px-6">
          {/* Progress */}
          <div className="flex items-center gap-2 mb-10">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${i <= step ? 'bg-blue-600 text-white' : 'bg-white/10 text-white/40'}`}>
                  {i < step ? <FiCheckCircle className="w-4 h-4" /> : i + 1}
                </div>
                <span className={`text-xs hidden sm:block transition-colors ${i === step ? 'text-white' : 'text-white/40'}`}>{s}</span>
                {i < steps.length - 1 && <div className={`flex-1 h-px transition-colors ${i < step ? 'bg-blue-600' : 'bg-white/10'}`} />}
              </div>
            ))}
          </div>

          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="glass-card p-8"
          >
            {/* Step 0: Personal */}
            {step === 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white mb-6">Personal Details</h2>
                <div className="relative"><FiUser className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input type="text" placeholder="Full Name *" required value={form.name} onChange={e => update('name', e.target.value)} className="input-field pl-11" />
                </div>
                <div className="relative"><FiMail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input type="email" placeholder="Email Address *" required value={form.email} onChange={e => update('email', e.target.value)} className="input-field pl-11" />
                </div>
                <div className="relative"><FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input type="tel" placeholder="Phone Number *" required value={form.phone} onChange={e => update('phone', e.target.value)} className="input-field pl-11" />
                </div>
              </div>
            )}

            {/* Step 1: Preferences */}
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white mb-6">Study Preferences</h2>
                <div className="relative"><FiGlobe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 z-10 pointer-events-none" />
                  <select value={form.country} onChange={e => update('country', e.target.value)} className="input-field pl-11 appearance-none cursor-pointer">
                    <option value="" disabled>Preferred Country *</option>
                    {countries.map(c => <option key={c} value={c} className="bg-[#0a0a0f]">{c}</option>)}
                  </select>
                </div>
                <div className="relative"><FiBook className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 z-10 pointer-events-none" />
                  <select value={form.level} onChange={e => update('level', e.target.value)} className="input-field pl-11 appearance-none cursor-pointer">
                    <option value="" disabled>Study Level *</option>
                    {levels.map(l => <option key={l} value={l} className="bg-[#0a0a0f]">{l}</option>)}
                  </select>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-3">Service Needed</p>
                  <div className="grid grid-cols-2 gap-2">
                    {services.map(s => (
                      <button key={s} onClick={() => update('service', s)} className={`px-3 py-2 rounded-xl text-xs font-medium text-left transition-all ${form.service === s ? 'bg-blue-600 text-white' : 'glass-card-hover text-white/60'}`}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Schedule */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-white mb-6">Choose Schedule</h2>
                <div>
                  <label className="text-sm text-white/60 mb-2 block">Preferred Date</label>
                  <input type="date" value={form.date} onChange={e => update('date', e.target.value)} className="input-field" min={new Date().toISOString().split('T')[0]} />
                </div>
                <div>
                  <label className="text-sm text-white/60 mb-3 block">Preferred Time</label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map(t => (
                      <button key={t} onClick={() => update('time', t)} className={`py-2 rounded-xl text-xs font-medium transition-all ${form.time === t ? 'bg-blue-600 text-white' : 'glass-card-hover text-white/60'}`}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm text-white/60 mb-3 block">Choose Counsellor (Optional)</label>
                  <div className="space-y-2">
                    {counsellors.map(c => (
                      <button
                        key={c.name}
                        onClick={() => c.available && update('counsellor', c.name)}
                        className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${form.counsellor === c.name ? 'bg-blue-600/20 border border-blue-500/40' : 'glass-card-hover'} ${!c.available && 'opacity-50 cursor-not-allowed'}`}
                      >
                        <img src={c.photo} alt={c.name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                        <div className="flex-1 text-left">
                          <p className="font-medium text-white text-sm">{c.name}</p>
                          <p className="text-xs text-white/40">{c.speciality}</p>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${c.available ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}`}>
                          {c.available ? 'Available' : 'Busy'}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Review */}
            {step === 3 && (
              <div>
                <h2 className="text-xl font-bold text-white mb-6">Review & Confirm</h2>
                <div className="space-y-3 mb-6">
                  {[
                    { label: 'Name', value: form.name },
                    { label: 'Email', value: form.email },
                    { label: 'Phone', value: form.phone },
                    { label: 'Destination', value: form.country },
                    { label: 'Study Level', value: form.level },
                    { label: 'Service', value: form.service },
                    { label: 'Date', value: form.date },
                    { label: 'Time', value: form.time },
                    { label: 'Counsellor', value: form.counsellor || 'Any available' },
                  ].filter(item => item.value).map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-sm text-white/40">{label}</span>
                      <span className="text-sm text-white font-medium">{value}</span>
                    </div>
                  ))}
                </div>
                <textarea placeholder="Additional notes (optional)" rows={3} value={form.notes} onChange={e => update('notes', e.target.value)} className="input-field resize-none mb-4" />
              </div>
            )}

            {/* Nav buttons */}
            <div className="flex gap-3 mt-8">
              {step > 0 && (
                <button onClick={back} className="btn-secondary flex-1">Back</button>
              )}
              {step < 3 ? (
                <button onClick={next} className="btn-primary flex-1 justify-center">Continue</button>
              ) : (
                <motion.button
                  onClick={handleSubmit}
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-gold flex-1 justify-center disabled:opacity-70"
                >
                  {loading ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Booking...</> : <><FiSend className="w-4 h-4" /> Confirm Booking</>}
                </motion.button>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
