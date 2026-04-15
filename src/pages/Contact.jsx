import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa6'
import AnimatedSection from '../components/AnimatedSection'
import ContactForm from '../components/forms/ContactForm'

const contactInfo = [
  { icon: FaWhatsapp, title: 'WhatsApp Us', value: '+61 414 248 167', sub: 'Mon-Sat 9AM-6PM', href: 'https://wa.me/61414248167', color: 'from-copper-600 to-copper-400' },
  { icon: FiMail, title: 'Email Us', value: 'info@globaltalentedu.au', sub: 'Reply within 24 hours', href: 'mailto:info@globaltalentedu.au', color: 'from-copper-600 to-copper-400' },
  { icon: FiMapPin, title: 'Visit Us', value: '2/13 Moore lane ', sub: 'Lilyfield-2040, NSW', href: '#', color: 'from-copper-600 to-copper-400' },
  { icon: FiClock, title: 'Office Hours', value: 'Mon - Saturday', sub: '9:00 AM – 6:00 PM', href: null, color: 'from-copper-600 to-copper-400' },
]

const offices = [
  { city: 'Sydney', address: '2/13 Moore lane , Lilyfield-2040, NSW, Australia', phone: '+61 414 248 167' },

]

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section aria-label="Contact page hero" className="py-24 relative overflow-hidden">
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
      <section aria-label="Contact methods and form" className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-6">Contact Our Study Abroad Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {contactInfo.map(({ icon: Icon, title, value, sub, href, color }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <a href={href || '#'} className={`glass-card-hover p-6 flex flex-col items-center text-center group ${!href && 'cursor-default'}`}>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} p-0.5 mb-4 shadow-lg`}>
                    <div className="w-full h-full  rounded-2xl flex items-center justify-center">
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
              <ContactForm
                heading="Send a Message"
                description="Fill out the form and we'll get back to you shortly."
                submitLabel="Send Message"
                successTitle="Message Sent!"
                successDescription="Thank you for contacting us. We'll get back to you within 24 hours."
                source="Contact Page"
                defaultSubject="New contact enquiry"
              />
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
                      <a
                        href="https://wa.me/61414248167"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-copper-400 hover:text-copper-300 inline-flex items-center gap-1 mt-1"
                      >
                        <FaWhatsapp className="w-3 h-3" /> {phone}
                      </a>
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
