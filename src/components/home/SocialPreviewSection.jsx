import { FiArrowUpRight, FiClock, FiPlayCircle, FiUsers } from 'react-icons/fi'
import { FaFacebookF, FaYoutube } from 'react-icons/fa'
import AnimatedSection from '../AnimatedSection'
import SectionBadge from '../SectionBadge'
import { useTheme } from '../../context/ThemeContext'
import { optimizeImageUrl } from '../../utils/imageOptimization'

const socialPlatforms = [
  {
    id: 'facebook',
    title: 'Global Talent Education',
    subtitle: '@globaltalenteducation',
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80',
    coverImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    description: 'Daily scholarship alerts, admission wins, and counsellor Q&A threads.',
    url: 'https://www.facebook.com/share/1HyZANYn9a/?mibextid=wwXIfr',
    icon: FaFacebookF,
    color: 'from-blue-700 to-blue-500',
    cardBorder: 'border-blue-500/35',
    glow: 'shadow-[0_24px_80px_-34px_rgba(59,130,246,0.7)]',
    badge: 'bg-blue-600/20 text-blue-200 border-blue-400/40',
    button: 'bg-blue-600 hover:bg-blue-500',
  },
  {
    id: 'youtube',
    title: 'YouTube Channel',
    subtitle: '@GlobalTalentEducation',
    profileImage: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=160&q=80',
    coverImage: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&w=1200&q=80',
    description: 'Visa walkthroughs, country guides, and interview preparation classes.',
    url: 'https://youtube.com/@globaltalenteducationcon?si=PUDihdRoqSX8CLri',
    icon: FaYoutube,
    color: 'from-red-700 to-red-500',
    cardBorder: 'border-red-500/35',
    glow: 'shadow-[0_24px_80px_-34px_rgba(239,68,68,0.68)]',
    badge: 'bg-red-600/20 text-red-100 border-red-400/40',
    button: 'bg-red-600 hover:bg-red-500',

  },
]

export default function SocialPreviewSection() {
  const { isDark } = useTheme()

  return (
    <section aria-label="Official social media channels" className="py-24 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-copper-900/15 to-transparent pointer-events-none" />
      <div className="absolute -top-16 -left-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-20 w-96 h-96 rounded-full bg-red-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 xl:gap-10 items-start">
          <AnimatedSection direction="right" className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <SectionBadge variant="subtle" className="mb-5">Social Proof</SectionBadge>
              <h2 className="section-title mb-5">
                Visit Our
                <span className="block gradient-text">Official Pages</span>
              </h2>
              <p className={`text-base leading-relaxed mb-7 ${isDark ? 'text-slate-300' : 'text-copper-900/75'}`}>
                Track admission results, visa updates, and student guidance in real time across Facebook and YouTube.
              </p>
              <div className="space-y-3">
                <div className={`glass-card px-4 py-3 flex items-center gap-3 ${isDark ? 'text-slate-200' : 'text-copper-900/85'}`}>
                  <FiUsers className="w-4 h-4 text-copper-500" />
                  Growing student community
                </div>
                <div className={`glass-card px-4 py-3 flex items-center gap-3 ${isDark ? 'text-slate-200' : 'text-copper-900/85'}`}>
                  <FiClock className="w-4 h-4 text-copper-500" />
                  Fresh updates every week
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="lg:col-span-8 grid grid-cols-1 xl:grid-cols-2 gap-6">
            {socialPlatforms.map((platform) => {
              const PlatformIcon = platform.icon

              return (
                <AnimatedSection key={platform.id} direction="left" delay={platform.id === 'youtube' ? 0.12 : 0}>
                  <article className={`glass-card overflow-hidden border ${platform.cardBorder} ${platform.glow}`}>
                    <div className="relative h-44">
                      <img
                        src={optimizeImageUrl(platform.coverImage, { width: 1200, height: 440 })}
                        alt={`${platform.title} cover image preview`}
                        width="1200"
                        height="440"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                      <div className="absolute left-4 right-4 bottom-4 flex items-end justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-white/80 shadow-lg shrink-0">
                            <img
                              src={optimizeImageUrl(platform.profileImage, { width: 160, height: 160 })}
                              alt={`${platform.title} profile picture`}
                              width="48"
                              height="48"
                              className="w-full h-full object-cover"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="text-white font-semibold truncate">{platform.title}</p>
                            <p className="text-white/80 text-xs truncate">{platform.subtitle}</p>
                          </div>
                        </div>

                        <div className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs border backdrop-blur-sm ${platform.badge}`}>
                          <PlatformIcon className="w-3 h-3" />
                          Verified
                        </div>
                      </div>
                    </div>

                    <div className="p-5 md:p-6">
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className={`text-sm font-semibold ${isDark ? 'text-slate-100' : 'text-copper-950'}`}>{platform.primaryMetric}</span>
                        <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-copper-900/60'}`}>{platform.lastUpdated}</span>
                      </div>

                      <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-slate-300' : 'text-copper-900/75'}`}>
                        {platform.description}
                      </p>

                      <div className="rounded-xl border border-white/10 bg-black/10 px-3 py-2.5 flex items-center justify-between mb-5">
                        <span className={`text-xs ${isDark ? 'text-slate-300' : 'text-copper-900/70'}`}>{platform.secondaryMetric}</span>
                        {platform.id === 'youtube' ? (
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-white/90">
                            <FiPlayCircle className="w-4 h-4" />
                            Watch
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-white/90">
                            <FiUsers className="w-4 h-4" />
                            Join
                          </span>
                        )}
                      </div>

                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 ${platform.button}`}
                      >
                        Visit {platform.title}
                        <FiArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </article>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
