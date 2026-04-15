import { FiCheckCircle } from 'react-icons/fi'
import AnimatedSection from '../AnimatedSection'
import SectionBadge from '../SectionBadge'
import { useTheme } from '../../context/ThemeContext'
import ContactForm from '../forms/ContactForm'

export default function ConsultationForm() {
  const { isDark } = useTheme()

  return (
    <section aria-label="Free consultation form" className="py-28 relative overflow-hidden">
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
            <ContactForm
              heading="Get Free Expert Advice"
              description="Fill out this contact form and we'll contact you within 24 hours."
              submitLabel="Book My Free Consultation"
              successTitle="We'll Be In Touch!"
              successDescription="Your consultation request has been received. Our team will contact you within 24 hours."
              source="Consultation Section"
              defaultSubject="Free consultation request"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
