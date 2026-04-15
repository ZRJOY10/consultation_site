import { Link } from 'react-router-dom'
import { FiArrowLeft, FiSearch } from 'react-icons/fi'

export default function NotFound() {
  return (
    <div className="pt-20">
      <section aria-label="Not found message" className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-copper-500 font-semibold mb-3">Error 404</p>
          <h1 className="text-5xl md:text-6xl font-black font-poppins mb-6 text-white">Page Not Found</h1>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10">
            The page you requested does not exist or may have been moved. Use the links below to continue your journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/" className="btn-primary inline-flex items-center justify-center gap-2">
              <FiArrowLeft className="w-4 h-4" /> Go to Homepage
            </Link>
            <Link to="/destinations" className="btn-secondary inline-flex items-center justify-center gap-2">
              <FiSearch className="w-4 h-4" /> Explore Destinations
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
