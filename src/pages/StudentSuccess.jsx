import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiStar, FiPlay, FiX, FiFilter } from 'react-icons/fi'
import { HiCheckCircle } from 'react-icons/hi'
import AnimatedSection from '../components/AnimatedSection'
import ConsultationForm from '../components/home/ConsultationForm'
import SectionBadge from '../components/SectionBadge'
import { optimizeImageUrl } from '../utils/imageOptimization'

const stories = [
  { id: 1, name: 'Priya Sharma', photo: 'https://images.unsplash.com/photo-1494790108755-2616b332c3b0?w=200&h=200&fit=crop', country: 'Australia', flag: '🇦🇺', university: 'University of Melbourne', course: 'Master of Data Science', visa: 'Approved', scholarship: '$15,000', rating: 5, quote: 'Global Talent made my dream of studying in Australia a reality. They guided me step by step from course selection to visa approval.', year: '2024', tags: ['Scholarship', 'Visa'] },
  { id: 2, name: 'Rahul Patel', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop', country: 'Canada', flag: '🇨🇦', university: 'University of Toronto', course: 'MBA Finance', visa: 'Approved', scholarship: '$20,000', rating: 5, quote: 'I was worried about the Canadian visa process but Global Talent handled everything professionally. Got my visa in 3 weeks!', year: '2024', tags: ['Fast Visa', 'MBA'] },
  { id: 3, name: 'Anjali Singh', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop', country: 'UK', flag: '🇬🇧', university: 'Imperial College London', course: 'MSc Engineering', visa: 'Approved', scholarship: '$25,000', rating: 5, quote: 'From IELTS prep to Oxford application, Global Talent was with me at every step. Their scholarship guidance helped me secure £18,000.', year: '2023', tags: ['Scholarship', 'Prestigious'] },
  { id: 4, name: 'Mohammed Ali', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop', country: 'USA', flag: '🇺🇸', university: 'Stanford University', course: 'MS Computer Science', visa: 'Approved', scholarship: '$30,000', rating: 5, quote: 'Getting into Stanford seemed impossible but the counselors had the right strategy. Their SOP writing service was exceptional.', year: '2024', tags: ['Ivy League', 'CS'] },
  { id: 5, name: 'Sarah Chen', photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop', country: 'New Zealand', flag: '🇳🇿', university: 'University of Auckland', course: 'Bachelor of Commerce', visa: 'Approved', scholarship: '$12,000', rating: 5, quote: 'Global Talent found scholarship opportunities I never knew existed. Responsive, professional and genuinely invested.', year: '2023', tags: ['Scholarship', 'Commerce'] },
  { id: 6, name: 'Vikram Singh', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop', country: 'Australia', flag: '🇦🇺', university: 'Monash University', course: 'Bachelor of Engineering', visa: 'Approved', scholarship: '$18,000', rating: 5, quote: 'The team at Global Talent is simply the best. They made a complex process simple and stress-free. 100% recommend!', year: '2024', tags: ['Engineering', 'Scholarship'] },
  { id: 7, name: 'Fatima Al-Rashid', photo: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop', country: 'Canada', flag: '🇨🇦', university: 'McGill University', course: 'MSc Biomedical Science', visa: 'Approved', scholarship: '$22,000', rating: 5, quote: 'I had multiple visa refusals before Global Talent. They identified exactly what was wrong and helped me get approved.', year: '2023', tags: ['Visa Refusal Overcome', 'Science'] },
  { id: 8, name: 'Arun Kumar', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop', country: 'UK', flag: '🇬🇧', university: "King's College London", course: 'LLM International Law', visa: 'Approved', scholarship: '$16,000', rating: 5, quote: 'Excellent service from start to finish. The counsellor understood my career goals and found the perfect program for me.', year: '2024', tags: ['Law', 'London'] },
]

const countries = ['All', 'Australia', 'Canada', 'UK', 'USA', 'New Zealand']

export default function StudentSuccess() {
  const [filter, setFilter] = useState('All')
  const [videoModal, setVideoModal] = useState(null)

  const filtered = filter === 'All' ? stories : stories.filter(s => s.country === filter)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section aria-label="Student success hero" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-copper-900/10 to-copper-900/20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-black font-poppins mb-6">
            Student <span className="gradient-text">Success Stories</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Real students. Real universities. Real visa approvals. Here are the stories that inspire us every day.
          </motion.p>
          {/* Key stats */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-wrap justify-center gap-4">
            {['15,000+ Students Placed', '98% Visa Success', '$5M+ Scholarships Won', '200+ Universities'].map(s => (
              <span key={s} className="stat-badge">{s}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section aria-label="Success story filters and grid" className="pb-6">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-6">Success Stories by Destination</h2>
          <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
            <FiFilter className="w-4 h-4 text-slate-500 flex-shrink-0" />
            {countries.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${filter === c ? 'bg-copper-600 text-white' : 'chip-inactive'}`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((story, i) => (
              <AnimatedSection key={story.id} delay={i * 0.06}>
                <motion.article whileHover={{ y: -6 }} className="glass-card-hover p-6 flex flex-col h-full group">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={optimizeImageUrl(story.photo, { width: 96, height: 96 })}
                      alt={`Profile photo of ${story.name}, student success story`}
                      width="48"
                      height="48"
                      className="w-12 h-12 rounded-full object-cover border-2 border-slate-700/50"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-white text-sm">{story.name}</p>
                      <p className="text-xs text-slate-500 truncate">{story.university}</p>
                    </div>
                    <span className="text-2xl">{story.flag}</span>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(story.rating)].map((_, j) => (
                      <FiStar key={j} className="w-3.5 h-3.5 fill-copper-400 text-copper-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1 line-clamp-3">"{story.quote}"</p>

                  {/* Course + badges */}
                  <div className="space-y-3">
                    <p className="text-xs text-copper-400 font-medium">{story.course}</p>
                    <div className="flex flex-wrap gap-1.5">
                      <SectionBadge variant="subtle" size="xs" className="inline-flex items-center gap-1 mb-0">
                        <HiCheckCircle className="w-3 h-3" /> Visa {story.visa}
                      </SectionBadge>
                      <SectionBadge variant="subtle" size="xs" className="inline-flex items-center gap-1 mb-0">
                        🎓 {story.scholarship}
                      </SectionBadge>
                    </div>
                  </div>

                  {/* Video btn */}
                  <button
                    onClick={() => setVideoModal(story.id)}
                    className="mt-4 flex items-center gap-2 text-xs text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    <FiPlay className="w-3.5 h-3.5" /> Watch video
                  </button>
                </motion.article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Video modal */}
      {videoModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setVideoModal(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative w-full max-w-2xl aspect-video glass-card flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setVideoModal(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white">
              <FiX className="w-4 h-4" />
            </button>
            <div className="text-center text-slate-500">
              <FiPlay className="w-12 h-12 mx-auto mb-3 text-copper-400" />
              <p>Video testimonial plays here</p>
            </div>
          </motion.div>
        </motion.div>
      )}

      <ConsultationForm />
    </div>
  )
}
