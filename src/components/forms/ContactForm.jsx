import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiUser, FiPhone, FiMail, FiMessageSquare, FiCheckCircle } from 'react-icons/fi'
import toast from 'react-hot-toast'
import { useTheme } from '../../context/ThemeContext'
import { sendContactEmails } from '../../services/contactEmailService'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

export default function ContactForm({
  heading = 'Send a Message',
  description = "Fill out the form and we'll get back to you shortly.",
  submitLabel = 'Send Message',
  successTitle = 'Message Sent!',
  successDescription = "Thank you for contacting us. We'll get back to you within 24 hours.",
  source = 'Website Contact Form',
  defaultSubject = '',
}) {
  const { isDark } = useTheme()
  const [form, setForm] = useState(initialForm)
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      await sendContactEmails({
        ...form,
        subject: form.subject || defaultSubject,
        source,
      })
      setSent(true)
      toast.success('Message sent! Please check your email for confirmation.')
    } catch (error) {
      toast.error(error?.message || 'Unable to send right now. Please try again in a moment.')
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="glass-card p-10 text-center">
        <div className="w-20 h-20 rounded-full bg-copper-500/20 border-2 border-copper-500/30 flex items-center justify-center mx-auto mb-6">
          <FiCheckCircle className="w-10 h-10 text-copper-400" />
        </div>
        <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-copper-900'} mb-3`}>{successTitle}</h3>
        <p className={isDark ? 'text-slate-400' : 'text-copper-700/70'}>{successDescription}</p>
        <button
          onClick={() => {
            setSent(false)
            setForm(initialForm)
          }}
          className="btn-primary mt-6"
        >
          Send Another Message
        </button>
      </motion.div>
    )
  }

  return (
    <div className="glass-card p-8 md:p-10">
      <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-copper-900'} mb-2`}>{heading}</h2>
      <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-copper-700/60'} mb-6`}>{description}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative">
            <FiUser className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${isDark ? 'text-slate-600' : 'text-copper-700/40'}`} />
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              required
              value={form.name}
              onChange={(e) => updateField('name', e.target.value)}
              className="input-field pl-11"
            />
          </div>
          <div className="relative">
            <FiPhone className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${isDark ? 'text-slate-600' : 'text-copper-700/40'}`} />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              className="input-field pl-11"
            />
          </div>
        </div>

        <div className="relative">
          <FiMail className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${isDark ? 'text-slate-600' : 'text-copper-700/40'}`} />
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            required
            value={form.email}
            onChange={(e) => updateField('email', e.target.value)}
            className="input-field pl-11"
          />
        </div>

        <div className="relative">
          <FiMessageSquare className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${isDark ? 'text-slate-600' : 'text-copper-700/40'}`} />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={(e) => updateField('subject', e.target.value)}
            className="input-field pl-11"
          />
        </div>

        <textarea
          name="message"
          placeholder="Your message... *"
          required
          rows={5}
          value={form.message}
          onChange={(e) => updateField('message', e.target.value)}
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
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <FiSend className="w-4 h-4" />
              {submitLabel}
            </>
          )}
        </motion.button>

        <p className={`text-xs text-center ${isDark ? 'text-slate-600' : 'text-copper-700/50'}`}>
          By submitting, you agree to our privacy policy. We respect your data.
        </p>
      </form>
    </div>
  )
}
