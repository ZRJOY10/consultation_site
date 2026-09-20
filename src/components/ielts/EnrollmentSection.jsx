import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiCopy,
  FiCheck,
  FiExternalLink,
  FiSmartphone,
  FiFileText,
  FiMessageCircle,
  FiAlertCircle,
  FiHelpCircle,
  FiZap,
} from 'react-icons/fi'
import toast from 'react-hot-toast'
import AnimatedSection from '../AnimatedSection'
import SectionBadge from '../SectionBadge'
import OfferBadge from './OfferBadge'
import { useTheme } from '../../context/ThemeContext'
import { enrollFormUrl, enrollSteps, payment, pricing, coordinator } from '../../data/ieltsProgram'

const stepIcons = [FiSmartphone, FiFileText, FiMessageCircle]

const summaryIncludes = [
  '২৭টি লাইভ ক্লাস + প্রতিটির রেকর্ডিং',
  'চারটি মডিউল ও পূর্ণাঙ্গ মক টেস্ট',
  'সুরক্ষিত Google Drive-এ সব ম্যাটেরিয়াল',
  'ব্যক্তিগত লিখিত ফিডব্যাক',
]

function WhatsAppHelp({ label, className = '' }) {
  const { isDark } = useTheme()

  return (
    <a
      href={coordinator.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors ${
        isDark ? 'text-copper-300 hover:text-copper-200' : 'text-copper-700 hover:text-copper-800'
      } ${className}`}
    >
      <FiMessageCircle className="w-3.5 h-3.5 flex-shrink-0 text-copper-400" />
      <span className="underline underline-offset-4 decoration-copper-500/40">{label}</span>
    </a>
  )
}

export default function EnrollmentSection() {
  const { isDark } = useTheme()
  const [copied, setCopied] = useState(false)

  const MUTED = isDark ? 'text-slate-400' : 'text-copper-700/70'
  const HEADING = isDark ? 'text-white' : 'text-copper-900'

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(payment.numberPlain)
      setCopied(true)
      toast.success('বিকাশ নম্বর কপি হয়েছে')
      setTimeout(() => setCopied(false), 2500)
    } catch {
      toast.error('কপি করা যায়নি — নম্বরটি ম্যানুয়ালি লিখুন')
    }
  }

  return (
    <section id="enroll" aria-label="IELTS batch enrollment and payment" className="py-12 sm:py-14 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-copper-950/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-copper-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-8">
          <SectionBadge variant="subtle" className="mb-4">এনরোল করুন</SectionBadge>
          <h2 className="section-title text-xl sm:text-2xl mb-3">
            ৩টি ধাপে <span className="gradient-text">সম্পন্ন</span> করুন
          </h2>
          <p className={`section-subtitle text-xs sm:text-sm ${MUTED}`}>
            পেমেন্ট থেকে ক্লাসের লিংক — পুরো প্রক্রিয়াটি ২৪ ঘণ্টার মধ্যে শেষ হয়।
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Steps */}
          <div className="lg:col-span-3 space-y-4">
            {enrollSteps.map((step, i) => {
              const Icon = stepIcons[i] || FiFileText
              return (
                <AnimatedSection key={step.num} delay={i * 0.1}>
                  <div className="glass-card p-4 sm:p-5 flex gap-4">
                    <div className="flex-shrink-0 flex flex-col items-center gap-2">
                      <div className="w-9 h-9 rounded-lg bg-copper-600/20 border border-copper-500/30 flex items-center justify-center text-sm font-bold text-copper-400">
                        {step.num}
                      </div>
                      {i < enrollSteps.length - 1 && (
                        <div className="w-px flex-1 min-h-[24px] bg-copper-500/25" aria-hidden="true" />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className={`text-sm font-semibold mb-1.5 flex items-center gap-2 ${HEADING}`}>
                        <Icon className="w-3.5 h-3.5 text-copper-400 flex-shrink-0" />
                        {step.title}
                      </h3>
                      <p className={`text-xs leading-relaxed ${MUTED}`}>{step.desc}</p>

                      {/* Step 1: bKash merchant number */}
                      {step.num === 1 && (
                        <div className="mt-3 rounded-lg border border-copper-500/30 bg-copper-600/10 p-3.5">
                          <p className="text-[10px] uppercase tracking-wide text-copper-400 font-semibold mb-1.5">
                            {payment.method} {payment.type}
                          </p>
                          <div className="flex flex-wrap items-center gap-3">
                            <span className={`text-lg font-black tracking-tight ${HEADING}`}>
                              {payment.number}
                            </span>
                            <button
                              type="button"
                              onClick={copyNumber}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-semibold border border-copper-500/30 bg-copper-600/15 text-copper-400 transition-colors hover:bg-copper-600/25"
                            >
                              {copied ? <FiCheck className="w-3.5 h-3.5" /> : <FiCopy className="w-3.5 h-3.5" />}
                              {copied ? 'কপি হয়েছে' : 'কপি করুন'}
                            </button>
                          </div>
                          <p className={`mt-2.5 text-[10px] flex items-start gap-2 ${MUTED}`}>
                            <FiAlertCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-copper-400" />
                            <span>
                              <b>Send Money নয়</b> — অবশ্যই <b>Payment</b> অপশন ব্যবহার করুন, এবং ট্রানজেকশন
                              আইডি সংরক্ষণ করুন।
                            </span>
                          </p>
                          <WhatsAppHelp
                            label="পেমেন্টে সমস্যা হচ্ছে? হোয়াটসঅ্যাপে জানান"
                            className="mt-3 text-xs"
                          />
                        </div>
                      )}

                      {/* Step 2: enrollment form */}
                      {step.num === 2 && (
                        <div className="mt-4">
                          <a
                            href={enrollFormUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-xs px-5 py-2.5"
                          >
                            এনরোলমেন্ট ফর্ম খুলুন
                            <FiExternalLink className="w-4 h-4" />
                          </a>
                          <p className={`mt-2.5 text-[10px] ${MUTED}`}>
                            ফর্মটি Google Form-এ খুলবে। ফর্ম পূরণে সমস্যা হলে সরাসরি হোয়াটসঅ্যাপে ট্রানজেকশন
                            আইডি ও স্ক্রিনশট পাঠালেও আমরা এনরোলমেন্ট সম্পন্ন করে দেব।
                          </p>
                          <WhatsAppHelp label="হোয়াটসঅ্যাপে পাঠান" className="mt-2 text-xs" />
                        </div>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}

            {/* Persistent help card */}
            <AnimatedSection delay={0.3}>
              <div className="rounded-xl border border-dashed border-copper-500/40 bg-copper-600/5 p-4 flex items-start gap-3">
                <FiHelpCircle className="w-4 h-4 text-copper-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className={`font-semibold text-xs mb-1 ${HEADING}`}>যেকোনো ধাপে আটকে গেলে</h3>
                  <p className={`text-xs leading-relaxed ${MUTED}`}>
                    পেমেন্ট, ফর্ম বা ব্যাচের সময়সূচি — যেকোনো বিষয়ে সমস্যা হলে আমাদের কোঅর্ডিনেটরকে
                    হোয়াটসঅ্যাপে মেসেজ দিন। আমরা দ্রুততম সময়ে সাড়া দেব।
                  </p>
                  <WhatsAppHelp label={`হোয়াটসঅ্যাপ — ${coordinator.phone}`} className="mt-2" />
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Payment summary */}
          <AnimatedSection className="lg:col-span-2 lg:sticky lg:top-28">
            <div className="offer-card">
             <div className="offer-card__inner p-5 relative">
              <div className="absolute -top-5 -right-3">
                <OfferBadge size="sm" />
              </div>

              <SectionBadge variant="subtle" size="xs" className="mb-4">{pricing.tag}</SectionBadge>

              <div className="flex items-end gap-3 flex-wrap">
                <span className="text-2xl sm:text-3xl font-black gradient-text leading-none">{pricing.current}</span>
                <span className={`text-sm line-through pb-0.5 ${isDark ? 'text-slate-500' : 'text-copper-700/50'}`}>{pricing.original}</span>
              </div>

              {/* <div className="offer-stripes mt-3 rounded-lg border border-copper-500/30 px-3 py-2 flex items-center gap-2">
                <FiZap className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                <p className={`text-xs font-bold ${HEADING}`}>
                  আপনি বাঁচাচ্ছেন <span className="gradient-text-gold">৳3,500</span>
                </p>
              </div> */}

              <div className={`mt-5 space-y-2.5 text-xs ${MUTED}`}>
                {summaryIncludes.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <FiCheck className="w-3.5 h-3.5 text-copper-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <motion.a
                href={enrollFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full justify-center mt-6 text-xs px-5 py-2.5"
              >
                এনরোলমেন্ট ফর্ম পূরণ করুন
                <FiExternalLink className="w-4 h-4" />
              </motion.a>

              <p className={`mt-3 text-[10px] text-center ${MUTED}`}>{pricing.note}</p>

              <div className="mt-4 pt-4 border-t border-copper-500/20 text-center">
                <p className={`text-[10px] mb-1.5 ${MUTED}`}>সমস্যা হলে কোঅর্ডিনেটরকে জানান</p>
                <WhatsAppHelp label={`হোয়াটসঅ্যাপ — ${coordinator.phone}`} className="justify-center" />
              </div>
             </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
