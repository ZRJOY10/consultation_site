import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiStar, FiPlay, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { HiCheckCircle } from 'react-icons/hi'
import AnimatedSection from '../AnimatedSection'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

const stories = [
  {
    id: 1,
    name: 'Priya Sharma',
    photo: 'https://images.unsplash.com/photo-1494790108755-2616b332c3b0?w=200&h=200&fit=crop',
    country: '🇦🇺 Australia',
    university: 'University of Melbourne',
    course: 'Master of Data Science',
    visa: 'Student Visa Approved',
    scholarship: '$15,000 scholarship',
    rating: 5,
    quote: 'Global Talent made my dream of studying in Australia a reality. They guided me step by step, from course selection to visa approval. The team\'s dedication is unmatched!',
    tags: ['Visa Approved', 'Scholarship Won'],
  },
  {
    id: 2,
    name: 'Rahul Patel',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    country: '🇨🇦 Canada',
    university: 'University of Toronto',
    course: 'MBA - Finance',
    visa: 'Student Visa Approved',
    scholarship: '$20,000 scholarship',
    rating: 5,
    quote: 'I was worried about the Canadian visa process but Global Talent handled everything professionally. Got my visa in 3 weeks! The consultants are extremely knowledgeable.',
    tags: ['Fast Visa', 'Top University'],
  },
  {
    id: 3,
    name: 'Anjali Singh',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    country: '🇬🇧 UK',
    university: 'Imperial College London',
    course: 'MSc Engineering',
    visa: 'Student Visa Approved',
    scholarship: '$25,000 scholarship',
    rating: 5,
    quote: 'From IELTS prep to Oxford application – Global Talent was with me at every step. Their scholarship guidance helped me secure £18,000 in funding. Life-changing service!',
    tags: ['Scholarship', 'Prestigious University'],
  },
  {
    id: 4,
    name: 'Mohammed Ali',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    country: '🇺🇸 USA',
    university: 'Stanford University',
    course: 'MS Computer Science',
    visa: 'F-1 Visa Approved',
    scholarship: '$30,000 scholarship',
    rating: 5,
    quote: 'Getting into Stanford seemed impossible but Global Talent\'s counsellors believed in me. Their SOP writing service and application strategy were exceptional.',
    tags: ['Ivy League', 'Full Support'],
  },
  {
    id: 5,
    name: 'Sarah Chen',
    photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop',
    country: '🇳🇿 New Zealand',
    university: 'University of Auckland',
    course: 'Bachelor of Commerce',
    visa: 'Student Visa Approved',
    scholarship: '$12,000 scholarship',
    rating: 5,
    quote: 'Global Talent found me scholarship opportunities I didn\'t even know existed. The team is responsive, professional and genuinely invested in your success.',
    tags: ['Scholarship', 'Quick Process'],
  },
]

export default function SuccessStories() {
  const [active, setActive] = useState(0)
  const [videoModal, setVideoModal] = useState(false)

  const prev = () => setActive((a) => (a - 1 + stories.length) % stories.length)
  const next = () => setActive((a) => (a + 1) % stories.length)

  const story = stories[active]

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-green-600/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-green-600/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-4">
            Student Success
          </span>
          <h2 className="section-title mb-4">
            Real Students, <span className="gradient-text">Real Results</span>
          </h2>
          <p className="section-subtitle">
            Thousands of students have transformed their lives with Global Talent. Read their inspiring stories.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Main testimonial */}
          <AnimatedSection direction="right">
            <AnimatePresence mode="wait">
              <motion.div
                key={story.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4 }}
                className="glass-card p-8 md:p-10"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(story.rating)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <blockquote className="text-xl text-white/80 leading-relaxed mb-8 italic">
                  "{story.quote}"
                </blockquote>

                {/* Profile */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={story.photo}
                    alt={story.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-500/30"
                  />
                  <div>
                    <p className="font-semibold text-white">{story.name}</p>
                    <p className="text-sm text-white/50">{story.course}</p>
                    <p className="text-sm text-blue-400">{story.university}</p>
                  </div>
                  <div className="ml-auto text-2xl">{story.country.split(' ')[0]}</div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="flex items-center gap-1 px-3 py-1.5 bg-green-600/20 border border-green-500/30 rounded-full text-xs text-green-400 font-medium">
                    <HiCheckCircle className="w-3.5 h-3.5" /> {story.visa}
                  </span>
                  <span className="flex items-center gap-1 px-3 py-1.5 bg-amber-600/20 border border-amber-500/30 rounded-full text-xs text-amber-400 font-medium">
                    <HiCheckCircle className="w-3.5 h-3.5" /> {story.scholarship}
                  </span>
                </div>

                {/* Video CTA */}
                <button
                  onClick={() => setVideoModal(true)}
                  className="flex items-center gap-3 text-sm font-medium text-white/60 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-600/40 transition-colors">
                    <FiPlay className="w-4 h-4 text-blue-400" />
                  </div>
                  Watch video testimonial
                </button>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center gap-4 mt-6">
              <button onClick={prev} className="w-10 h-10 rounded-full glass-card hover:bg-white/10 flex items-center justify-center text-white transition-colors">
                <FiChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {stories.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`transition-all duration-300 rounded-full ${i === active ? 'w-8 h-2 bg-blue-500' : 'w-2 h-2 bg-white/20 hover:bg-white/40'}`}
                  />
                ))}
              </div>
              <button onClick={next} className="w-10 h-10 rounded-full glass-card hover:bg-white/10 flex items-center justify-center text-white transition-colors">
                <FiChevronRight className="w-5 h-5" />
              </button>
            </div>
          </AnimatedSection>

          {/* Right: Grid of mini cards */}
          <AnimatedSection direction="left">
            <div className="grid grid-cols-1 gap-4">
              {stories.filter((_, i) => i !== active).slice(0, 3).map((s) => (
                <motion.div
                  key={s.id}
                  whileHover={{ x: 6 }}
                  onClick={() => setActive(stories.indexOf(s))}
                  className="glass-card-hover p-5 flex items-center gap-4 cursor-pointer"
                >
                  <img
                    src={s.photo}
                    alt={s.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0 border-2 border-white/10"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-white text-sm">{s.name}</p>
                    <p className="text-xs text-white/40 truncate">{s.university}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FiStar key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <span className="text-xl">{s.country.split(' ')[0]}</span>
                </motion.div>
              ))}

              <Link to="/student-success" className="btn-primary justify-center mt-4">
                View All Success Stories <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setVideoModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-3xl aspect-video glass-card overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoModal(false)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
              >
                <FiX className="w-4 h-4" />
              </button>
              <div className="w-full h-full flex items-center justify-center text-white/40">
                <div className="text-center">
                  <FiPlay className="w-16 h-16 mx-auto mb-4 text-blue-400" />
                  <p className="text-sm">Video testimonial would play here</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
