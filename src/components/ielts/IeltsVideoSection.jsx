import { useRef, useState } from 'react'
import { FiPlay } from 'react-icons/fi'
import AnimatedSection from '../AnimatedSection'
import SectionBadge from '../SectionBadge'
import { useTheme } from '../../context/ThemeContext'

const VIDEO_SRC = '/videos/ielts-promo.mp4'
const POSTER_SRC = '/videos/ielts-promo.jpg'

/**
 * IELTS course video, shown under the hero on both Home and the IELTS page.
 *
 * The file is served from /public rather than imported, so Vite never pulls a
 * multi-megabyte binary through the bundler. Nothing but metadata is fetched
 * until the visitor taps play — the section sits high on the page and most
 * traffic is mobile, so an eager download would cost people real data.
 */
export default function IeltsVideoSection({
  badge = 'IELTS Studio Batch',
  title = 'See the course',
  titleAccent = 'in action',
  subtitle = 'A short look at how the live classes, mentor feedback, and mock tests actually run.',
  className = '',
}) {
  const { isDark } = useTheme()
  const videoRef = useRef(null)
  const [started, setStarted] = useState(false)
  const [posterFailed, setPosterFailed] = useState(false)
  // Portrait reels and 16:9 edits both land here, so let the file say how tall
  // it is instead of locking the frame to one ratio.
  const [ratio, setRatio] = useState('16 / 9')

  const MUTED = isDark ? 'text-slate-400' : 'text-copper-700/70'

  const handlePlay = () => {
    setStarted(true)
    // The <video> is already mounted, so it can start on this same gesture —
    // iOS only honours play() while the tap is still being handled.
    videoRef.current?.play().catch(() => {})
  }

  const handleMetadata = (e) => {
    const { videoWidth: w, videoHeight: h } = e.currentTarget
    if (w && h) setRatio(`${w} / ${h}`)
  }

  return (
    <section aria-label="IELTS course video" className={`py-10 sm:py-14 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-6 sm:mb-8">
          <SectionBadge variant="subtle" className="mb-3 sm:mb-4">
            {badge}
          </SectionBadge>
          <h2 className="section-title text-xl sm:text-2xl lg:text-3xl">
            {title} <span className="gradient-text">{titleAccent}</span>
          </h2>
          {subtitle && (
            <p className={`mt-3 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto ${MUTED}`}>
              {subtitle}
            </p>
          )}
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="glass-card overflow-hidden p-1.5 sm:p-2 max-w-3xl mx-auto">
            <div
              className="relative w-full overflow-hidden rounded-xl bg-black/90"
              style={{ aspectRatio: ratio, maxHeight: '75vh' }}
            >
              <video
                ref={videoRef}
                src={VIDEO_SRC}
                poster={posterFailed ? undefined : POSTER_SRC}
                preload="metadata"
                controls={started}
                playsInline
                onLoadedMetadata={handleMetadata}
                onPlay={() => setStarted(true)}
                className="absolute inset-0 w-full h-full object-contain"
              >
                <track kind="captions" />
                Your browser does not support the video tag.
              </video>

              {/* Poster probe: a missing thumbnail must not leave a bare black box. */}
              {!posterFailed && (
                <img
                  src={POSTER_SRC}
                  alt=""
                  aria-hidden="true"
                  className="hidden"
                  onError={() => setPosterFailed(true)}
                />
              )}

              {!started && (
                <button
                  type="button"
                  onClick={handlePlay}
                  aria-label="Play the IELTS course video"
                  className="group absolute inset-0 flex items-center justify-center bg-gradient-to-br from-copper-900/70 via-copper-800/50 to-black/70 transition-colors duration-300 hover:from-copper-900/60 hover:to-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <span className="flex h-14 w-14 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-copper-600 shadow-glow-gold transition-transform duration-300 group-hover:scale-105">
                    <FiPlay className="h-6 w-6 sm:h-8 sm:w-8 translate-x-0.5 text-white" fill="currentColor" />
                  </span>
                </button>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
