import AnimatedSection from '../AnimatedSection'
import SectionBadge from '../SectionBadge'
import { useTheme } from '../../context/ThemeContext'
import { homeFaqItems } from '../../data/homeFaq'

export default function HomeFaqSection() {
  const { isDark } = useTheme()

  return (
    <section aria-label="Frequently asked questions" className="py-20 relative overflow-hidden">
      <div className={`absolute inset-0 pointer-events-none ${isDark ? 'bg-gradient-to-b from-transparent to-copper-950/10' : 'bg-gradient-to-b from-transparent to-copper-100/20'}`} />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-10">
          <SectionBadge variant="solid" size="lg">FAQ</SectionBadge>
          <h2 className={`text-3xl md:text-4xl font-bold font-poppins mb-4 ${isDark ? 'text-white' : 'text-copper-900'}`}>
            Frequently Asked Questions
          </h2>
          <p className={`${isDark ? 'text-slate-400' : 'text-copper-700/70'}`}>
            Quick answers about admissions, visas, scholarships, and timelines.
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {homeFaqItems.map((item, index) => (
            <AnimatedSection key={item.question} delay={index * 0.05}>
              <details
                className={`glass-card p-5 rounded-xl group ${isDark ? 'text-white/90' : 'text-copper-900'}`}
              >
                <summary className="cursor-pointer list-none font-semibold pr-4">
                  {item.question}
                </summary>
                <p className={`mt-3 leading-relaxed ${isDark ? 'text-slate-400' : 'text-copper-700/75'}`}>
                  {item.answer}
                </p>
              </details>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
