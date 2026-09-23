import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiArrowRight,
  FiCheckCircle,
  FiLock,
  FiHardDrive,
  FiFileText,
  FiClock,
  FiPlus,
  FiMinus,
  FiZap,
  FiAward,
  FiVideo,
  FiLayers,
  FiRefreshCw,
  FiCalendar,
  FiRepeat,
} from 'react-icons/fi'
import AnimatedSection from '../components/AnimatedSection'
import SectionBadge from '../components/SectionBadge'
import EnrollmentSection from '../components/ielts/EnrollmentSection'
import IeltsVideoSection from '../components/ielts/IeltsVideoSection'
import OfferBadge from '../components/ielts/OfferBadge'
import { useTheme } from '../context/ThemeContext'
import {
  ieltsProgram,
  pricing,
  heroStats,
  schedule,
  mentor,
  syllabus,
  speakingClub,
  toBanglaDigits,
  bonuses,
  delivery,
  problems,
  ieltsFaq,
} from '../data/ieltsProgram'

const deliveryIcons = {
  lock: FiLock,
  drive: FiHardDrive,
  doc: FiFileText,
  clock: FiClock,
}

const statIcons = [FiVideo, FiAward, FiLayers]

const totalClasses = syllabus.reduce((sum, row) => sum + row.classes, 0)

/**
 * Always-on enrollment bar. Sends students to the payment + form steps rather
 * than straight to the Google Form, because the form asks for a bKash
 * transaction ID they will not have yet.
 */
function EnrollBar() {
  const { isDark } = useTheme()

  useEffect(() => {
    document.body.classList.add('has-enroll-bar')
    return () => document.body.classList.remove('has-enroll-bar')
  }, [])

  return (
    <div className="enroll-bar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-3 sm:gap-6">
        <div className="min-w-0 flex items-center gap-3 sm:gap-4">
          <span className="inline-flex flex-shrink-0 items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-gold-400 to-copper-600 text-white text-[10px] sm:text-xs font-black tracking-wide">
            <FiZap className="w-3 h-3" />
            50% OFF
          </span>
          <div className="min-w-0">
            {/* the batch line is the first thing to go when width is tight */}
            <p
              className={`hidden sm:block text-[10px] sm:text-xs leading-tight truncate ${
                isDark ? 'text-slate-400' : 'text-copper-700/70'
              }`}
            >
              IELTS স্টুডিও ব্যাচ · ২৭টি ক্লাস
            </p>
            <p className="flex items-baseline gap-2 leading-tight">
              <span className="text-base sm:text-lg font-black gradient-text">{pricing.current}</span>
              <span
                className={`text-xs sm:text-sm line-through ${
                  isDark ? 'text-slate-500' : 'text-copper-700/50'
                }`}
              >
                {pricing.original}
              </span>
            </p>
          </div>
        </div>

        <a
          href="#enroll"
          className="btn-primary flex-shrink-0 text-xs px-4 sm:px-6 py-2.5 whitespace-nowrap"
        >
          Enroll Now
          <FiArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}

export default function IeltsProgram() {
  const { isDark } = useTheme()
  const [openFaq, setOpenFaq] = useState(0)

  const MUTED = isDark ? 'text-slate-400' : 'text-copper-700/70'
  const HEADING = isDark ? 'text-white' : 'text-copper-900'
  const STRUCK = isDark ? 'text-slate-500' : 'text-copper-700/50'
  const SUBTLE = isDark ? 'text-slate-500' : 'text-copper-700/60'

  return (
    <div className="ielts-page relative pt-20" lang="bn">
      {/* Ambient background — behind everything, non-interactive */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className={`absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full blur-[130px] ${
            isDark ? 'bg-copper-600/[0.08]' : 'bg-copper-300/25'
          }`}
        />
        <div
          className={`absolute top-[30%] -right-32 w-[380px] h-[380px] rounded-full blur-[140px] ${
            isDark ? 'bg-gold-500/[0.06]' : 'bg-gold-400/15'
          }`}
        />
        <div
          className={`absolute bottom-0 left-1/3 w-[460px] h-[460px] rounded-full blur-[150px] ${
            isDark ? 'bg-copper-600/[0.06]' : 'bg-copper-200/30'
          }`}
        />
      </div>

      <div className="relative">
        {/* ==================== HERO ==================== */}
        <section aria-label="IELTS studio batch hero" className="pt-6 pb-10 sm:pt-8 sm:pb-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-10 items-center">
              {/* ---- Left: pitch ---- */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-wrap items-center gap-2.5 mb-6"
                >
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-gold-400 to-copper-600 text-white text-[10px] font-black tracking-wide shadow-glow-gold">
                    <FiZap className="w-3 h-3" />
                    ৫০% ছাড় ·
                  </span>
                  <SectionBadge variant="subtle" size="xs" className="mb-0">
                    {ieltsProgram.badge}
                  </SectionBadge>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className={`text-xl sm:text-2xl lg:text-[2.1rem] font-black font-poppins mb-4 ${HEADING}`}
                >
                  Band 8 স্কোরারের সরাসরি তত্ত্বাবধানে,{' '}
                  <span className="gradient-text">আপনার IELTS প্রস্তুতি</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className={`text-xs sm:text-sm leading-relaxed mb-6 max-w-xl ${MUTED}`}
                >
                  {ieltsProgram.lede}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10"
                >
                  <a href="#enroll" className="btn-primary justify-center text-xs px-5 py-2.5">
                    এনরোল করুন — {pricing.current}
                    <FiArrowRight className="w-4 h-4" />
                  </a>
                  <a href="#syllabus" className="btn-secondary justify-center text-xs px-5 py-2.5">
                    সিলেবাস দেখুন
                  </a>
                </motion.div>

                {/* Stats as compact bento tiles */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-3 gap-2.5 sm:gap-4"
                >
                  {heroStats.map(({ value, label }, i) => {
                    const Icon = statIcons[i] || FiVideo
                    return (
                      <div key={label} className="glass-card p-3 sm:p-4">
                        <Icon className="w-3.5 h-3.5 text-copper-400 mb-1.5" />
                        <p className="text-base sm:text-xl font-black gradient-text leading-none mb-1">
                          {value}
                        </p>
                        <p className={`text-[9px] sm:text-[10px] leading-snug ${MUTED}`}>{label}</p>
                      </div>
                    )
                  })}
                </motion.div>
              </div>

              {/* ---- Right: the offer ---- */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="offer-card w-full"
              >
                <div className="offer-card__inner p-5 sm:p-6 relative">
                  {/* seal, overlapping the card corner */}
                  <div className="absolute -top-5 -right-3 sm:-top-7 sm:-right-5">
                    <OfferBadge size="md" />
                  </div>

                  <p className={`text-[10px] font-bold uppercase tracking-[0.18em] mb-4 ${SUBTLE}`}>
                    {pricing.tag}
                  </p>

                  {/* price block */}
                  <div className="flex items-end gap-3 flex-wrap">
                    <span className="text-3xl sm:text-4xl font-black gradient-text leading-none">
                      {pricing.current}
                    </span>
                    <span className={`text-base sm:text-sm line-through pb-0.5 ${STRUCK}`}>
                      {pricing.original}
                    </span>
                  </div>

                  {/* savings strip — the loudest element in the card */}
                  {/* <div className="offer-stripes mt-4 rounded-lg border border-copper-500/30 px-3 py-2.5 flex items-center gap-2.5">
                    <FiZap className="w-4 h-4 text-gold-500 flex-shrink-0" />
                    <p className={`text-sm font-bold ${HEADING}`}>
                      আপনি বাঁচাচ্ছেন <span className="gradient-text-gold">৳3,500</span>
                    </p>
                  </div> */}

                  <ul className="mt-5 space-y-2">
                    {[
                      `${totalClasses}টি লাইভ ক্লাস + রেকর্ডিং`,
                      'Band 8 মেন্টরের সরাসরি ফিডব্যাক',
                      'পূর্ণাঙ্গ মক টেস্ট ও ম্যাটেরিয়াল',
                    ].map((item) => (
                      <li key={item} className={`flex items-start gap-2 text-xs ${MUTED}`}>
                        <FiCheckCircle className="w-4 h-4 text-copper-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="#enroll" className="btn-primary w-full justify-center mt-6 text-xs px-5 py-2.5">
                    এখনই এনরোল করুন
                    <FiArrowRight className="w-4 h-4" />
                  </a>

                  <p className={`mt-3 text-[10px] text-center ${SUBTLE}`}>{pricing.note}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==================== SCHEDULE ==================== */}
        <section aria-label="ক্লাসের সময়সূচি" className="pb-10 sm:pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {[
                  { Icon: FiCalendar, label: 'ক্লাস শুরু', value: schedule.start },
                  { Icon: FiRepeat, label: 'ক্লাসের দিন', value: schedule.days },
                  { Icon: FiClock, label: 'সময়', value: schedule.time },
                ].map(({ Icon, label, value }) => (
                  <div key={label} className="glass-card p-4 sm:p-5 flex items-start gap-3">
                    <span className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-copper-600">
                      <Icon className="h-4 w-4 text-white" />
                    </span>
                    <div className="min-w-0">
                      <p className={`text-[10px] font-bold uppercase tracking-[0.14em] mb-1 ${SUBTLE}`}>
                        {label}
                      </p>
                      <p className={`text-sm sm:text-base font-black leading-snug ${HEADING}`}>
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ==================== COURSE VIDEO ==================== */}
        <IeltsVideoSection
          badge="কোর্স পরিচিতি"
          title="কোর্সটি"
          titleAccent="এক নজরে"
          subtitle="লাইভ ক্লাস, মেন্টরের ফিডব্যাক আর মক টেস্ট আসলে কীভাবে হয় — ছোট্ট একটি ভিডিওতে দেখে নিন।"
          className="pt-0"
        />

        {/* ==================== OFFER STRIP ==================== */}
        <section aria-label="Launch offer" className="pb-10 sm:pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-copper-700 via-copper-600 to-copper-700 px-4 py-4 sm:px-6 sm:py-5">
                {/* sheen sweep */}
                <span
                  className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shimmer"
                  aria-hidden="true"
                />
                <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                  <div className="flex items-center gap-4">
                    <OfferBadge size="sm" className="hidden sm:block" />
                    <div>
                      <p className="text-white font-black text-sm sm:text-lg leading-tight">
                         ৫০% ছাড় — ৳7,000 এখন ৳3,500
                      </p>
                      <p className="text-white/80 text-[10px] sm:text-xs mt-1">
                        সীমিত আসন, ব্যক্তিগত মনোযোগ ধরে রাখতে সংখ্যা বাড়ানো হবে না।
                      </p>
                    </div>
                  </div>
                  <a
                    href="#enroll"
                    className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-copper-800 font-bold text-xs transition-transform hover:scale-[1.03]"
                  >
                    আসন নিশ্চিত করুন
                    <FiArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ==================== MENTOR ==================== */}
        <section aria-label="Mentor profile" className="py-10 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AnimatedSection className="mb-8">
              <SectionBadge variant="subtle" className="mb-4">যিনি শেখাবেন</SectionBadge>
              <h2 className="section-title text-xl sm:text-2xl">আপনার <span className="gradient-text">মেন্টর</span></h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="glass-card p-5 sm:p-6 flex flex-col sm:flex-row gap-5">
                {/* gradient ring avatar */}
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <div className="p-[2px] rounded-2xl bg-gradient-to-br from-gold-400 to-copper-700">
                    {/* The source is a waist-up portrait, so the head fills only the
                        top third. Zoom about that point to crop to head-and-shoulders
                        instead of showing a full-length figure at avatar size. */}
                    <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-[calc(1rem-2px)] overflow-hidden">
                      <img
                        src={mentor.photo}
                        alt={mentor.name}
                        width="112"
                        height="112"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover scale-[1.92] origin-[50%_17%]"
                      />
                    </div>
                  </div>
                </div>

                <div className="min-w-0 text-center sm:text-left">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mb-2">
                    <h3 className={`text-sm sm:text-lg font-bold font-poppins ${HEADING}`}>
                      {mentor.name}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gold-400/15 border border-gold-400/30 text-gold-500">
                      <FiAward className="w-3 h-3" />
                      {mentor.badge}
                    </span>
                  </div>
                  <p className={`text-[11px] mb-3 ${MUTED}`}>{mentor.role}</p>
                  <p className={`text-xs leading-relaxed ${MUTED}`}>{mentor.bio}</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ==================== SYLLABUS ==================== */}
        <section id="syllabus" aria-label="Course syllabus" className="py-10 sm:py-12 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AnimatedSection className="mb-6 sm:mb-8">
              <SectionBadge variant="subtle" className="mb-4">সিলেবাস</SectionBadge>
              <h2 className="section-title text-xl sm:text-2xl mb-3">
                ২৭টি লাইভ ক্লাসে <span className="gradient-text">যা কভার হবে</span>
              </h2>
              <p className={`text-xs max-w-xl ${MUTED}`}>
                বেসিক থেকে শুরু করে চারটি স্কিল, তারপর ফুল মক টেস্ট — শেষে সপ্তাহে ১ দিনের Speaking Club দিয়ে ফ্লুয়েন্সি চালু থাকবে কোর্স শেষেও।
              </p>
            </AnimatedSection>

            {/* Module cards — one responsive treatment at every width */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {syllabus.map(({ idx, name, desc, classes }, i) => (
                <AnimatedSection key={idx} delay={i * 0.06}>
                  <div className="glass-card-hover p-4 sm:p-5 h-full flex flex-col">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <span className="text-lg font-black text-copper-500/40 leading-none font-poppins">
                        {idx}
                      </span>
                      <span className="flex-shrink-0 text-[10px] font-bold text-copper-400 bg-copper-600/15 border border-copper-500/25 rounded-full px-2.5 py-0.5">
                        {toBanglaDigits(classes)} ক্লাস
                      </span>
                    </div>
                    <h3 className={`text-sm font-bold mb-1.5 ${HEADING}`}>{name}</h3>
                    <p className={`text-xs leading-relaxed ${MUTED}`}>{desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Speaking Club sits outside the numbered grid: it is weekly, it is not
                one of the 27, and it outlives the batch. */}
            <AnimatedSection delay={0.1}>
              <div className="flex justify-center my-4">
                <span className={`text-xl font-black leading-none ${SUBTLE}`} aria-hidden="true">
                  +
                </span>
              </div>

              <div className="offer-card">
                <div className="offer-card__inner p-4 sm:p-5">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-gold-500 bg-gold-400/15 border border-gold-400/30 rounded-full px-2.5 py-0.5 mb-3">
                    <FiRefreshCw className="w-3 h-3" />
                    {speakingClub.cadence}
                  </span>
                  <h3 className={`text-sm font-bold mb-1.5 ${HEADING}`}>{speakingClub.name}</h3>
                  <p className={`text-xs leading-relaxed ${MUTED}`}>{speakingClub.desc}</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.14}>
              <div className="mt-5 glass-card border-copper-500/30 p-5 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className={`text-xs sm:text-sm font-bold ${HEADING}`}>মোট ক্লাস সংখ্যা</p>
                  <p className={`text-[10px] mt-0.5 ${MUTED}`}>{speakingClub.note}</p>
                </div>
                <span className="text-lg sm:text-xl font-black gradient-text leading-none flex-shrink-0">
                  {toBanglaDigits(totalClasses)}
                </span>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ==================== WHY HALF PRICE ==================== */}
        <section aria-label="Launch pricing rationale" className="py-10 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="glass-card p-5 sm:p-7 lg:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-start">
                {/* oversized discount display */}
                <AnimatedSection className="text-center lg:text-left">
                  <div className="inline-flex flex-col items-center lg:items-start">
                    <span className="text-[3rem] sm:text-[4rem] font-black leading-[0.85] gradient-text-gold">
                      50%
                    </span>
                    <span className={`text-xs sm:text-base font-black tracking-[0.3em] ${HEADING}`}>
                      OFF
                    </span>
                    <div className="mt-4 flex items-baseline gap-2.5">
                      <span className={`text-sm line-through ${STRUCK}`}>{pricing.original}</span>
                      <span className="text-lg font-black gradient-text">{pricing.current}</span>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.1}>
                  <SectionBadge variant="subtle" className="mb-4">মূল্য</SectionBadge>
                  <h2 className={`text-lg sm:text-xl font-bold font-poppins mb-3 ${HEADING}`}>
                    কেন {pricing.original}-এর কোর্স{' '}
                    <span className="gradient-text">{pricing.current}</span>-এ?
                  </h2>
                  <p className={`text-xs leading-relaxed mb-5 ${MUTED}`}>
                    {pricing.rationale}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {bonuses.map((bonus) => (
                      <div
                        key={bonus}
                        className="flex items-start gap-3 rounded-xl border border-copper-500/20 bg-copper-600/[0.06] p-3"
                      >
                        <FiCheckCircle className="w-4 h-4 text-copper-400 flex-shrink-0 mt-0.5" />
                        <span className={`text-sm ${MUTED}`}>{bonus}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== DELIVERY ==================== */}
        <section aria-label="How classes and materials are delivered" className="py-10 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AnimatedSection className="text-center mb-6 sm:mb-8">
              <SectionBadge variant="subtle" className="mb-4">প্রাইভেট ও সুরক্ষিত</SectionBadge>
              <h2 className="section-title text-xl sm:text-2xl mb-3">
                কীভাবে ক্লাস ও <span className="gradient-text">ম্যাটেরিয়াল</span> পাবেন
              </h2>
              <p className={`section-subtitle text-xs sm:text-sm ${MUTED}`}>
                পাবলিক লাইভস্ট্রিমের ঝামেলা ছাড়াই — সবকিছু নিরাপদে, সরাসরি আপনার কাছে পৌঁছাবে।
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {delivery.map(({ icon, title, desc }, i) => {
                const Icon = deliveryIcons[icon] || FiLock
                return (
                  <AnimatedSection key={title} delay={i * 0.08}>
                    <div className="glass-card-hover p-4 sm:p-5 h-full">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-copper-600/30 to-copper-700/10 border border-copper-500/25 flex items-center justify-center mb-3">
                        <Icon className="w-4 h-4 text-copper-400" />
                      </div>
                      <h3 className={`text-sm font-bold mb-1.5 ${HEADING}`}>{title}</h3>
                      <p className={`text-xs leading-relaxed ${MUTED}`}>{desc}</p>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </section>

        {/* ==================== PROBLEMS ==================== */}
        <section aria-label="Common student problems" className="py-10 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AnimatedSection className="text-center mb-6 sm:mb-8">
              <SectionBadge variant="subtle" className="mb-4">চেনা সমস্যা</SectionBadge>
              <h2 className="section-title text-xl sm:text-2xl">
                যেখানে বেশিরভাগ স্টুডেন্ট <span className="gradient-text">আটকে যায়</span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
              {problems.map(({ q, a }, i) => (
                <AnimatedSection key={q} delay={i * 0.08}>
                  <div className="glass-card-hover p-4 sm:p-5 h-full flex flex-col">
                    <span className="text-2xl leading-none text-copper-500/30 font-black mb-1">
                      &ldquo;
                    </span>
                    <p className={`text-xs italic mb-4 flex-1 ${MUTED}`}>{q}</p>
                    <div className="pt-4 border-t border-copper-500/15">
                      <p className="text-xs font-semibold text-copper-400 flex gap-2">
                        <FiArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>{a}</span>
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== FAQ ==================== */}
        <section aria-label="IELTS batch frequently asked questions" className="py-10 sm:py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <AnimatedSection className="text-center mb-6 sm:mb-8">
              <SectionBadge variant="subtle" className="mb-4">প্রশ্নোত্তর</SectionBadge>
              <h2 className="section-title text-xl sm:text-2xl">জিজ্ঞাসিত <span className="gradient-text">প্রশ্ন</span></h2>
            </AnimatedSection>

            <div className="space-y-3">
              {ieltsFaq.map(({ question, answer }, i) => (
                <AnimatedSection key={question} delay={i * 0.05}>
                  <div
                    className={`glass-card overflow-hidden transition-colors ${
                      openFaq === i ? 'border-copper-500/40' : ''
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                      aria-expanded={openFaq === i}
                      className={`w-full flex items-center justify-between gap-4 text-left px-4 sm:px-5 py-3.5 font-semibold ${HEADING}`}
                    >
                      <span className="text-xs sm:text-sm">{question}</span>
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-copper-600/15 border border-copper-500/25 flex items-center justify-center">
                        {openFaq === i ? (
                          <FiMinus className="w-3 h-3 text-copper-400" />
                        ) : (
                          <FiPlus className="w-3 h-3 text-copper-400" />
                        )}
                      </span>
                    </button>
                    {openFaq === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className={`px-4 sm:px-5 pb-4 text-xs leading-relaxed ${MUTED}`}
                      >
                        {answer}
                      </motion.p>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== ENROLL + PAYMENT ==================== */}
        <EnrollmentSection />
      </div>

      <EnrollBar />
    </div>
  )
}
