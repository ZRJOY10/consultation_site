import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiUser, FiMessageSquare, FiCheckCircle } from 'react-icons/fi'
import AnimatedSection from '../components/AnimatedSection'
import toast from 'react-hot-toast'

const contactInfo = [
  { icon: FiPhone, title: 'Call Us', value: '+61 2 3456 7890', sub: 'Mon-Sat 9AM-6PM', href: 'tel:+61234567890', color: 'from-copper-600 to-copper-400' },
  { icon: FiMail, title: 'Email Us', value: 'info@globaltalent.com.au', sub: 'Reply within 24 hours', href: 'mailto:info@globaltalent.com.au', color: 'from-copper-600 to-copper-400' },
  { icon: FiMapPin, title: 'Visit Us', value: '123 Collins St', sub: 'Melbourne VIC 3000', href: '#', color: 'from-copper-600 to-copper-400' },
  { icon: FiClock, title: 'Office Hours', value: 'Mon - Saturday', sub: '9:00 AM – 6:00 PM', href: null, color: 'from-copper-600 to-copper-400' },
]

const offices = [
  { city: 'Melbourne', address: '123 Collins Street, Melbourne VIC 3000', phone: '+61 3 9000 0001' },
  { city: 'Sydney', address: '456 George Street, Sydney NSW 2000', phone: '+61 2 9000 0002' },
  { city: 'Brisbane', address: '789 Queen Street, Brisbane QLD 4000', phone: '+61 7 3000 0003' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSent(true)
    toast.success('Message sent! We\'ll reply within 24 hours.')
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-copper-900/10 to-copper-900/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-black font-poppins mb-6">
            Get In <span className="gradient-text">Touch</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-copper-800/80 max-w-2xl mx-auto">
            Have questions about studying abroad? Our team is ready to help. Reach out and we'll respond within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {contactInfo.map(({ icon: Icon, title, value, sub, href, color }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <a href={href || '#'} className={`glass-card-hover p-6 flex flex-col items-center text-center group ${!href && 'cursor-default'}`}>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} p-0.5 mb-4 shadow-lg`}>
                    <div className="w-full h-full bg-[#0a0a0f] rounded-2xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-white mb-1">{title}</h3>
                  <p className={`font-medium mb-1 bg-gradient-to-r ${color} bg-clip-text text-transparent`}>{value}</p>
                  <p className="text-xs text-white/40">{sub}</p>
                </a>
              </AnimatedSection>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <AnimatedSection direction="right">
              {sent ? (
                <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="glass-card p-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-copper-500/20 border-2 border-copper-500/30 flex items-center justify-center mx-auto mb-6">
                    <FiCheckCircle className="w-10 h-10 text-copper-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-white/60 mb-6">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                  <button onClick={() => setSent(false)} className="btn-primary">Send Another Message</button>
                </motion.div>
              ) : (
                <div className="glass-card p-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Send a Message</h2>
                  <p className="text-white/40 text-sm mb-6">Fill out the form and we'll get back to you shortly.</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                        <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                        <input type="text" name="name" placeholder="Your Name *" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="input-field pl-11" />
                      </div>
                      <div className="relative">
                        <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                        <input type="tel" name="phone" placeholder="Phone" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="input-field pl-11" />
                      </div>
                    </div>
                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                      <input type="email" name="email" placeholder="Email Address *" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="input-field pl-11" />
                    </div>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                      <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} className="input-field pl-11" />
                    </div>
                    <textarea name="message" placeholder="Your message... *" required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="input-field resize-none" />
                    <motion.button type="submit" disabled={loading} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full btn-primary justify-center disabled:opacity-70">
                      {loading ? (
                        <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                      ) : (
                        <><FiSend className="w-4 h-4" /> Send Message</>
                      )}
                    </motion.button>
                  </form>
                </div>
              )}
            </AnimatedSection>

            {/* Map + Offices */}
            <AnimatedSection direction="left">
              {/* Map placeholder */}
              <div className="glass-card overflow-hidden rounded-2xl mb-6 h-56 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-copper-900/30 to-copper-900/20 flex items-center justify-center">
                  <div className="text-center">
                    <FiMapPin className="w-10 h-10 text-copper-400 mx-auto mb-2" />
                    <p className="text-white/60 text-sm">123 Collins Street</p>
                    <p className="text-white/40 text-xs">Melbourne VIC 3000</p>
                  </div>
                </div>
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-hero-pattern opacity-20" />
              </div>

              {/* Office locations */}
              <div className="space-y-3">
                <h3 className="font-semibold text-white mb-4">Our Office Locations</h3>
                {offices.map(({ city, address, phone }) => (
                  <div key={city} className="glass-card-hover p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-copper-600/20 flex items-center justify-center flex-shrink-0">
                      <FiMapPin className="w-4 h-4 text-copper-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white text-sm">{city}</p>
                      <p className="text-xs text-white/40">{address}</p>
                      <p className="text-xs text-copper-400">{phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
