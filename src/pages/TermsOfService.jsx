import { Link } from 'react-router-dom'

const effectiveDate = '15 April 2026'

export default function TermsOfService() {
  return (
    <div className="pt-20">
      <section aria-label="Terms of service content" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <header className="mb-8">
            <p className="text-copper-400 text-sm font-semibold uppercase tracking-wider mb-2">Legal</p>
            <h1 className="text-3xl sm:text-4xl font-black font-poppins text-white mb-3">Terms of Service</h1>
            <p className="text-slate-400">Effective Date: {effectiveDate}</p>
          </header>

          <article className="glass-card p-6 md:p-8 space-y-8 text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
              <p>
                By using this website and engaging Global Talent Education services, you agree to these terms, our privacy
                policy, and all applicable legal and regulatory requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Service Scope</h2>
              <p className="mb-3">Our services may include:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Study destination and course counselling</li>
                <li>University application support</li>
                <li>Visa documentation guidance</li>
                <li>Scholarship and profile strategy assistance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. User Responsibilities</h2>
              <p className="mb-3">You agree to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide accurate and complete information</li>
                <li>Submit documents within required timelines</li>
                <li>Review official institution and visa requirements independently</li>
                <li>Comply with applicable education and immigration laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Important Disclaimers</h2>
              <p>
                Guidance is based on current publicly available criteria and may change. Admission, scholarship, and visa
                decisions are made solely by universities, institutions, and government authorities.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Intellectual Property and Use</h2>
              <p>
                Website content is provided for informational use. Unauthorized copying, redistribution, or commercial use
                without written permission is prohibited.
              </p>
            </section>

            <section className="border-t border-white/10 pt-6">
              <h2 className="text-xl font-bold text-white mb-3">6. Contact and Updates</h2>
              <p className="mb-4">
                These terms may be updated periodically. Please review this page regularly for the latest version.
              </p>
              <Link to="/contact" className="btn-primary inline-flex px-5 py-2.5">
                Contact Our Team
              </Link>
            </section>
          </article>
        </div>
      </section>
    </div>
  )
}
