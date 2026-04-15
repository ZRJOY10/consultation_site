import { Link } from 'react-router-dom'

const effectiveDate = '15 April 2026'

export default function PrivacyPolicy() {
  return (
    <div className="pt-20">
      <section aria-label="Privacy policy content" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <header className="mb-8">
            <p className="text-copper-400 text-sm font-semibold uppercase tracking-wider mb-2">Legal</p>
            <h1 className="text-3xl sm:text-4xl font-black font-poppins text-white mb-3">Privacy Policy</h1>
            <p className="text-slate-400">Effective Date: {effectiveDate}</p>
          </header>

          <article className="glass-card p-6 md:p-8 space-y-8 text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Scope of This Policy</h2>
              <p>
                This policy explains how Global Talent Education collects, uses, stores, and protects personal information
                when you use our website, book consultations, or engage our counselling and application support services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
              <p className="mb-3">Depending on your interaction, we may collect:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Identity and contact details such as name, phone, and email</li>
                <li>Academic profile details including qualifications and preferred courses</li>
                <li>Country and university preferences for counselling recommendations</li>
                <li>Communication details submitted through forms, calls, or email</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. How We Use Information</h2>
              <p className="mb-3">Your information is used to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide counselling and course-university matching support</li>
                <li>Assist with admission and visa documentation workflow</li>
                <li>Respond to enquiries and send service-related updates</li>
                <li>Improve our website performance and user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Data Sharing and Protection</h2>
              <p>
                We do not sell personal data. Information may be shared only with relevant universities, official bodies,
                or trusted service partners when required to process your request. Reasonable technical and administrative
                safeguards are maintained to protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Your Rights</h2>
              <p>
                You may request access, correction, or deletion of personal information held by us, subject to legal or
                operational obligations.
              </p>
            </section>

            <section className="border-t border-white/10 pt-6">
              <h2 className="text-xl font-bold text-white mb-3">6. Contact Us</h2>
              <p className="mb-4">
                For privacy-related requests, please contact our team through the official contact page.
              </p>
              <Link to="/contact" className="btn-primary inline-flex px-5 py-2.5">
                Contact Support
              </Link>
            </section>
          </article>
        </div>
      </section>
    </div>
  )
}
