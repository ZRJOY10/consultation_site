import { motion } from 'framer-motion'
import { FiAward, FiUsers, FiTarget, FiHeart } from 'react-icons/fi'
import { HiAcademicCap } from 'react-icons/hi'
import AnimatedSection from '../components/AnimatedSection'
import ConsultationForm from '../components/home/ConsultationForm'
import { Link } from 'react-router-dom'

const team = [
  {
    name: 'Sarah Mitchell',
    role: 'Founder & CEO',
    photo: 'https://images.unsplash.com/photo-1494790108755-2616b332c3b0?w=300&h=300&fit=crop',
    bio: 'Former international student with 15+ years in education consulting. MARA registered migration agent.',
    expertise: ['Australia', 'Canada', 'UK'],
  },
  {
    name: 'David Chen',
    role: 'Head of Visa Operations',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
    bio: 'Certified visa consultant with 12+ years expertise. 3000+ successful visa applications processed.',
    expertise: ['Visa', 'Migration', 'PR'],
  },
  {
    name: 'Priya Kapoor',
    role: 'Senior Education Counsellor',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
    bio: 'Masters from Melbourne University. Expert in scholarship applications and university shortlisting.',
    expertise: ['Scholarships', 'Australia', 'NZ'],
  },
  {
    name: 'Michael Torres',
    role: 'USA & Canada Specialist',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    bio: 'Former admissions officer at University of Toronto. Deep knowledge of North American education.',
    expertise: ['USA', 'Canada', 'Ivy League'],
  },
]

const values = [
  { icon: FiTarget, title: 'Student-First Approach', description: 'Your success is our mission. Every decision we make is centered around your goals and aspirations.' },
  { icon: FiAward, title: 'Excellence in Service', description: 'We maintain the highest standards in counselling quality, accuracy and professional guidance.' },
  { icon: FiHeart, title: 'Genuine Care', description: 'We build lasting relationships with our students, supporting them beyond just the application process.' },
  { icon: FiUsers, title: 'Transparent Process', description: 'No hidden fees, no false promises. We provide honest assessments and clear communication.' },
]

export default function About() {
  return (
    <div className="pt-20">
      {/* Page hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-4"
          >
            About Counsil
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black font-poppins mb-6"
          >
            Shaping <span className="gradient-text">Global Futures</span> Since 2010
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed"
          >
            Counsil is Australia's most trusted study abroad consultancy. We've helped over 15,000 students 
            achieve their international education dreams with unmatched expertise, care and dedication.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80"
                    alt="Team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 glass-card p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center">
                      <HiAcademicCap className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">14+</p>
                      <p className="text-xs text-white/50">Years Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>Founded in Melbourne in 2010, Counsil began with a simple mission: to make quality international education accessible to every ambitious student.</p>
                <p>Our founder, Sarah Mitchell, experienced firsthand the challenges of navigating study abroad processes as an international student. She built Counsil to be the trustworthy guide she wished she had.</p>
                <p>Today, we're a team of 50+ certified counsellors, visa agents, and education specialists who have collectively helped over 15,000 students realize their dreams across 6 countries.</p>
                <p>We're proudly MARA registered, PIER certified, and winners of multiple education excellence awards. But our greatest achievement? Every student who lands at their dream university.</p>
              </div>
              <div className="mt-8">
                <Link to="/book-consultation" className="btn-primary">
                  Start Your Journey
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4">Our <span className="gradient-text">Core Values</span></h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="glass-card-hover p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4">Meet Our <span className="gradient-text">Expert Team</span></h2>
            <p className="text-white/50">Certified professionals dedicated to your success</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, photo, bio, expertise }, i) => (
              <AnimatedSection key={name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="glass-card-hover p-6 text-center group"
                >
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <img src={photo} alt={name} className="w-full h-full rounded-2xl object-cover" />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">{name}</h3>
                  <p className="text-xs text-blue-400 mb-3">{role}</p>
                  <p className="text-xs text-white/50 leading-relaxed mb-4">{bio}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {expertise.map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-blue-600/20 border border-blue-500/20 rounded-full text-xs text-blue-300">{tag}</span>
                    ))}
                  </div>
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
