import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiClock, FiUser, FiCalendar } from 'react-icons/fi'
import { getBlogPostBySlug } from '../data/blogPosts'

export default function BlogPost() {
  const { slug = '' } = useParams()
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return (
      <div className="pt-20">
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-copper-900/20 to-copper-700/10 pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <Link to="/blog" className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors mb-6">
              <FiArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <div className="glass-card p-10 md:p-12 rounded-3xl text-center">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Blog post not found</h1>
              <p className="text-white/70 mb-8">The article you opened is not available right now.</p>
              <Link to="/blog" className="btn-primary inline-flex px-6 py-3">View All Blog Posts</Link>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="pt-20">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-copper-950/40 via-slate-950 to-copper-900/20 pointer-events-none" />
        <div className="absolute -top-24 -right-20 w-80 h-80 bg-copper-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-copper-700/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors mb-6 glass-card px-4 py-2 rounded-full border border-white/10 backdrop-blur-md"
          >
            <FiArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="grid grid-cols-1 gap-6"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/20">
              <div className="relative h-80 sm:h-[28rem] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover scale-105"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/95 via-[#020617]/45 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center rounded-full bg-copper-600/95 px-3 py-1 text-xs font-semibold text-white">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/85">
                      {post.readTime}
                    </span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-poppins text-white leading-tight max-w-4xl drop-shadow-sm">
                    {post.title}
                  </h1>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.55fr)_minmax(300px,0.85fr)] gap-0">
                <div className="p-6 sm:p-8 lg:p-10 text-white">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-white/80 mb-8">
                    <span className="flex items-center gap-2"><FiUser className="w-4 h-4" /> {post.author}</span>
                    <span className="flex items-center gap-2"><FiCalendar className="w-4 h-4" /> {post.date}</span>
                    <span className="flex items-center gap-2"><FiClock className="w-4 h-4" /> {post.readTime}</span>
                  </div>

                  <p className="text-lg sm:text-xl leading-relaxed text-white/95 max-w-3xl mb-10">
                    {post.excerpt}
                  </p>

                  <div className="space-y-4 max-w-4xl">
                    {post.body.map((paragraph, index) => (
                      <motion.div
                        key={paragraph}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: index * 0.06 }}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 text-white/90 leading-relaxed"
                      >
                        <span className="block text-xs uppercase tracking-[0.22em] text-copper-400 mb-2">
                          Insight {index + 1}
                        </span>
                        <p>{paragraph}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-10 rounded-[1.75rem] border border-copper-500/20 bg-gradient-to-br from-copper-600/12 to-white/[0.03] p-6 sm:p-8">
                    <h2 className="text-2xl font-bold text-white mb-3">Need help with your application?</h2>
                    <p className="text-white/80 mb-6 max-w-2xl">Our team can help with university selection, scholarship applications, and visa planning.</p>
                    <Link to="/book-consultation" className="btn-primary inline-flex px-6 py-3">
                      Book Free Consultation
                    </Link>
                  </div>
                </div>

                <aside className="border-t lg:border-t-0 lg:border-l border-white/10 bg-white/[0.02] p-6 sm:p-8 lg:p-10">
                  <div className="sticky top-28 space-y-6">
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-white/55 mb-4">Article details</p>
                      <div className="space-y-4 text-white">
                        <div>
                          <p className="text-sm text-white/55 mb-1">Category</p>
                          <p className="font-medium">{post.category}</p>
                        </div>
                        <div>
                          <p className="text-sm text-white/55 mb-1">Reading time</p>
                          <p className="font-medium">{post.readTime}</p>
                        </div>
                        <div>
                          <p className="text-sm text-white/55 mb-1">Published</p>
                          <p className="font-medium">{post.date}</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[1.5rem] border border-copper-500/20 bg-gradient-to-br from-copper-600/15 to-white/[0.03] p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-copper-400 mb-3">Why this helps</p>
                      <ul className="space-y-3 text-white/90">
                        <li>Clear, easy-to-scan guidance</li>
                        <li>Relevant visa and study support</li>
                        <li>Direct next step to consultation</li>
                      </ul>
                    </div>

                    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                      <h3 className="text-xl font-bold text-white mb-3">Continue exploring</h3>
                      <p className="text-white/75 mb-5">Read more study abroad guides or go back to the article list.</p>
                      <Link to="/blog" className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors">
                        View all blog posts <FiArrowLeft className="w-4 h-4 rotate-180" />
                      </Link>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
