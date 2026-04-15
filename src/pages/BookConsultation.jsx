import { motion } from 'framer-motion'
import { HiSparkles } from 'react-icons/hi'
import AnimatedSection from '../components/AnimatedSection'
import ContactForm from '../components/forms/ContactForm'

export default function BookConsultation() {
  return (
    <div className="pt-20">
      <section aria-label="Consultation booking hero" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-copper-900/15 to-copper-700/10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <HiSparkles className="w-5 h-5 text-copper-400" />
            <span className="text-copper-400 font-medium">100% Free • No Obligation</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-poppins leading-tight mb-6"
          >
            Book Your <span className="gradient-text">Free Consultation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-copper-800/80 text-base sm:text-lg"
          >
            30 minutes with an expert counsellor. Share your goals and we will contact you within 24 hours.
          </motion.p>
        </div>
      </section>

      <section aria-label="Consultation booking form" className="pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Free Consultation Booking Form</h2>
          <AnimatedSection>
            <ContactForm
              heading="Get Free Expert Advice"
              description="Use this one contact form to book your free consultation."
              submitLabel="Book Free Consultation"
              successTitle="Consultation Request Sent!"
              successDescription="Thanks for booking with us. We have emailed you and will contact you within 24 hours."
              source="Book Consultation Page"
              defaultSubject="Free consultation booking"
            />
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
