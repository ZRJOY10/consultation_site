import { Link } from 'react-router-dom'

const effectiveDate = '15 April 2026'

export default function CookiePolicy() {
  return (
    <div className="pt-20">
      <section aria-label="Cookie policy content" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <header className="mb-8">
            <p className="text-copper-400 text-sm font-semibold uppercase tracking-wider mb-2">Legal</p>
            <h1 className="text-3xl sm:text-4xl font-black font-poppins text-white mb-3">Cookie Policy</h1>
            <p className="text-slate-400">Effective Date: {effectiveDate}</p>
          </header>

          <article className="glass-card p-6 md:p-8 space-y-8 text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device to help websites function properly, remember preferences,
                and analyze user interaction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. How We Use Cookies</h2>
              <p className="mb-3">Global Talent Education uses cookies to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Maintain core website functionality and navigation</li>
                <li>Improve speed, usability, and technical performance</li>
                <li>Measure engagement and optimize content quality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. Cookie Categories</h2>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-white">Essential Cookies</p>
                  <p>Required for secure page navigation, form interactions, and basic site operation.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Analytics Cookies</p>
                  <p>Used to understand traffic and user behavior so we can improve service quality.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Preference Cookies</p>
                  <p>Help remember user settings for a smoother browsing experience.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Managing Cookies</h2>
              <p>
                You can control or delete cookies from your browser settings at any time. Disabling some cookies may affect
                certain website features.
              </p>
            </section>

            <section className="border-t border-white/10 pt-6">
              <h2 className="text-xl font-bold text-white mb-3">5. Questions</h2>
              <p className="mb-4">
                For cookie-related queries or policy clarification, please contact us through our support page.
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
