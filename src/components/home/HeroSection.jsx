import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowRight, FiPlay, FiStar, FiUsers, FiAward, FiGlobe } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi'

/* ── Stats ──────────────────────────────────────────────── */
const stats = [
  { icon: FiUsers, value: '15,000+', label: 'Students Placed' },
  { icon: FiStar, value: '98%', label: 'Visa Success Rate' },
  { icon: FiGlobe, value: '50+', label: 'Top Universities' },
  { icon: FiAward, value: '14+', label: 'Years Experience' },
]

/* ── Subtle stars (25) ──────────────────────────────────── */
const stars = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: `${(i * 17.3 + 3) % 100}%`,
  top: `${(i * 23.7 + 5) % 100}%`,
  size: i % 4 === 0 ? 2 : 1.2,
  delay: (i * 0.35) % 7,
  dur: 3 + (i % 5) * 0.8,
}))

/* ── World map continent paths (simplified, 1440×700 viewBox) ─── */
const worldMap = [
  // North America
  'M 120 140 L 145 110 L 195 88 L 260 82 L 320 92 L 375 78 L 420 100 L 455 92 L 472 118 L 458 152 L 472 168 L 466 198 L 442 218 L 452 242 L 438 268 L 412 282 L 388 298 L 362 288 L 342 312 L 312 328 L 298 318 L 282 338 L 268 342 L 258 358 L 248 352 L 242 338 L 252 318 L 238 298 L 232 278 L 215 258 L 198 238 L 178 212 L 158 198 L 128 178 L 112 162 Z',
  // Greenland
  'M 498 58 L 528 48 L 562 52 L 578 72 L 572 98 L 555 112 L 528 108 L 508 88 L 502 68 Z',
  // South America
  'M 322 378 L 348 368 L 382 372 L 402 388 L 412 412 L 418 442 L 412 478 L 402 512 L 388 548 L 368 572 L 348 588 L 332 582 L 318 558 L 308 528 L 302 492 L 298 458 L 298 422 L 308 398 Z',
  // Europe
  'M 648 138 L 668 118 L 698 108 L 728 102 L 758 112 L 772 132 L 778 158 L 782 182 L 768 198 L 748 202 L 732 212 L 712 202 L 698 212 L 682 202 L 668 188 L 658 168 Z',
  // UK/Ireland
  'M 632 122 L 648 118 L 652 132 L 648 148 L 636 142 Z',
  // Scandinavia
  'M 718 62 L 732 52 L 752 58 L 758 82 L 748 102 L 732 102 L 722 88 Z',
  // Africa
  'M 682 242 L 712 228 L 748 238 L 772 262 L 788 298 L 792 342 L 788 388 L 778 428 L 758 462 L 732 488 L 708 498 L 688 482 L 672 452 L 662 412 L 658 372 L 652 332 L 658 292 L 668 262 Z',
  // Middle East
  'M 792 212 L 832 202 L 862 218 L 872 248 L 858 278 L 832 292 L 802 282 L 792 258 Z',
  // India
  'M 1022 232 L 1052 222 L 1082 238 L 1092 272 L 1088 312 L 1072 348 L 1052 368 L 1038 358 L 1022 328 L 1018 292 L 1018 262 Z',
  // Southeast Asia (mainland)
  'M 1098 262 L 1122 252 L 1148 262 L 1152 292 L 1142 322 L 1122 342 L 1102 332 L 1098 302 Z',
  // China / East Asia
  'M 1082 132 L 1122 112 L 1172 108 L 1222 118 L 1262 142 L 1278 178 L 1272 212 L 1252 238 L 1222 248 L 1188 242 L 1158 228 L 1132 212 L 1112 192 L 1098 168 Z',
  // Japan
  'M 1288 172 L 1298 158 L 1308 162 L 1308 192 L 1298 212 L 1288 202 Z',
  // Indonesia / Philippines
  'M 1142 362 L 1162 358 L 1182 368 L 1198 382 L 1212 372 L 1228 382 L 1232 398 L 1218 408 L 1198 402 L 1178 398 L 1158 388 L 1142 378 Z',
  // Russia / Siberia (top band)
  'M 788 78 L 832 68 L 902 58 L 982 52 L 1062 58 L 1132 68 L 1202 78 L 1262 92 L 1282 108 L 1262 128 L 1202 118 L 1132 112 L 1062 102 L 982 98 L 902 92 L 832 98 L 792 108 L 788 92 Z',
  // Australia
  'M 1222 448 L 1268 432 L 1312 442 L 1342 468 L 1348 502 L 1332 538 L 1302 552 L 1268 558 L 1238 548 L 1222 522 L 1218 492 L 1218 468 Z',
  // New Zealand
  'M 1398 512 L 1408 502 L 1418 512 L 1418 542 L 1408 558 L 1398 548 Z',
]

/* ── Flight routes (aligned to world map coordinates) ──── */
const flights = [
  {
    id: 'r1',
    path: 'M 1081 296 C 960 195, 830 150, 720 162',
    from: { x: 1081, y: 296, label: 'Dhaka' },
    to:   { x: 720, y: 162, label: 'London' },
    dur: 10,
    delay: 0,
    color: '#38bdf8',
  },
  {
    id: 'r2',
    path: 'M 1324 520 C 1100 320, 700 170, 402 199',
    from: { x: 1324, y: 520, label: 'Sydney' },
    to:   { x: 402, y: 199, label: 'Toronto' },
    dur: 13,
    delay: 1,
    color: '#818cf8',
  },
  {
    id: 'r3',
    path: 'M 941 268 C 1050 370, 1180 460, 1300 520',
    from: { x: 941, y: 268, label: 'Dubai' },
    to:   { x: 1300, y: 520, label: 'Melbourne' },
    dur: 9,
    delay: 2,
    color: '#34d399',
  },
  {
    id: 'r4',
    path: 'M 1260 200 C 1310 320, 1370 430, 1408 530',
    from: { x: 1260, y: 200, label: 'Seoul' },
    to:   { x: 1408, y: 530, label: 'Auckland' },
    dur: 8,
    delay: 3,
    color: '#fbbf24',
  },
]

/* ── Component ──────────────────────────────────────────── */
export default function HeroSection() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const mapY = useTransform(scrollY, [0, 500], [0, 60])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ─── BACKGROUND ─────────────────────────────────── */}

      {/* Deep sober base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080e1a] via-[#0c1222] to-[#0c1222]" />

      {/* Very subtle ambient glows — muted, professional */}
      <motion.div
        className="absolute -top-[15%] left-[10%] w-[600px] h-[600px] rounded-full bg-sky-600/[0.06] blur-[180px] pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-indigo-600/[0.05] blur-[160px] pointer-events-none"
        animate={{ x: [0, -35, 0], y: [0, 30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle twinkling stars */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((s) => (
          <motion.div
            key={s.id}
            className="absolute rounded-full bg-slate-300"
            style={{ left: s.left, top: s.top, width: s.size, height: s.size }}
            animate={{ opacity: [0.03, 0.35, 0.03] }}
            transition={{ duration: s.dur, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
          />
        ))}
      </div>

      {/* ╔══════════════════════════════════════════════════╗ */}
      {/* ║   SVG  WORLD MAP  +  FLIGHT-PATH  ANIMATION     ║ */}
      {/* ╚══════════════════════════════════════════════════╝ */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: mapY }}>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 700"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.5" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {flights.map((f) => (
              <path key={f.id} id={f.id} d={f.path} />
            ))}
          </defs>

          {/* ── WORLD MAP LAYER ─────────────────────────── */}
          <g opacity="0.07">
            {worldMap.map((d, i) => (
              <path
                key={`land-${i}`}
                d={d}
                fill="#94a3b8"
                stroke="#94a3b8"
                strokeWidth="0.5"
                strokeOpacity="0.3"
              />
            ))}
          </g>

          {/* Continental outline strokes for depth */}
          <g opacity="0.1" fill="none" stroke="#64748b" strokeWidth="0.7">
            {worldMap.map((d, i) => (
              <path key={`outline-${i}`} d={d} />
            ))}
          </g>

          {/* Faint latitude/longitude grid */}
          {[140, 280, 420, 560].map((yy) => (
            <line key={`h${yy}`} x1="0" y1={yy} x2="1440" y2={yy}
              stroke="#475569" strokeOpacity="0.035" strokeWidth="0.5" strokeDasharray="4 16" />
          ))}
          {[200, 440, 720, 1000, 1240].map((xx) => (
            <line key={`v${xx}`} x1={xx} y1="0" x2={xx} y2="700"
              stroke="#475569" strokeOpacity="0.035" strokeWidth="0.5" strokeDasharray="4 16" />
          ))}

          {/* ── FLIGHT ROUTES ───────────────────────────── */}
          {flights.map((f) => {
            const totalCycle = `${f.dur}s`
            return (
              <g key={f.id}>
                {/* Permanent faint dashed guide */}
                <path
                  d={f.path} fill="none"
                  stroke={f.color} strokeOpacity="0.08"
                  strokeWidth="1" strokeDasharray="3 10"
                />

                {/* Animated glowing trail */}
                <path
                  d={f.path} fill="none"
                  stroke={f.color} strokeWidth="2" strokeLinecap="round"
                  filter="url(#softGlow)"
                  className="flight-trail"
                  style={{
                    '--trail-dur': totalCycle,
                    '--trail-delay': `${f.delay}s`,
                  }}
                />

                {/* Source marker */}
                <circle cx={f.from.x} cy={f.from.y} r="3" fill={f.color} opacity="0.7">
                  <animate attributeName="r" values="2.5;4.5;2.5" dur="2.8s" repeatCount="indefinite" />
                </circle>
                <circle cx={f.from.x} cy={f.from.y} r="8" fill="none"
                  stroke={f.color} strokeWidth="0.8" opacity="0">
                  <animate attributeName="r" values="5;16;5" dur="2.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.35;0;0.35" dur="2.8s" repeatCount="indefinite" />
                </circle>

                {/* Destination marker */}
                <circle cx={f.to.x} cy={f.to.y} r="3" fill={f.color} opacity="0.7">
                  <animate attributeName="r" values="2.5;4.5;2.5" dur="2.8s" begin="0.7s" repeatCount="indefinite" />
                </circle>
                <circle cx={f.to.x} cy={f.to.y} r="8" fill="none"
                  stroke={f.color} strokeWidth="0.8" opacity="0">
                  <animate attributeName="r" values="5;16;5" dur="2.8s" begin="0.7s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.35;0;0.35" dur="2.8s" begin="0.7s" repeatCount="indefinite" />
                </circle>

                {/* City labels */}
                <text x={f.from.x} y={f.from.y + 22}
                  fill={f.color} fontSize="10" fontFamily="Inter, sans-serif"
                  textAnchor="middle" opacity="0.35" fontWeight="500" letterSpacing="0.5">
                  {f.from.label}
                </text>
                <text x={f.to.x} y={f.to.y + 22}
                  fill={f.color} fontSize="10" fontFamily="Inter, sans-serif"
                  textAnchor="middle" opacity="0.35" fontWeight="500" letterSpacing="0.5">
                  {f.to.label}
                </text>

                {/* Animated plane */}
                <g filter="url(#softGlow)">
                  <animateMotion
                    dur={totalCycle}
                    begin={`${f.delay}s`}
                    repeatCount="indefinite"
                    rotate="auto"
                    calcMode="spline"
                    keyTimes="0;1"
                    keySplines="0.42 0 0.58 1"
                  >
                    <mpath href={`#${f.id}`} />
                  </animateMotion>
                  <animate
                    attributeName="opacity"
                    values="0;0.85;0.85;0"
                    keyTimes="0;0.06;0.88;1"
                    dur={totalCycle}
                    begin={`${f.delay}s`}
                    repeatCount="indefinite"
                  />
                  <polygon points="10,0 -4,4 -1.5,0 -4,-4" fill="white" />
                  <line x1="-1.5" y1="0" x2="-16" y2="0"
                    stroke="white" strokeWidth="1.4" strokeOpacity="0.25" strokeLinecap="round" />
                  <line x1="-16" y1="0" x2="-30" y2="0"
                    stroke="white" strokeWidth="0.8" strokeOpacity="0.08" strokeLinecap="round" />
                </g>
              </g>
            )
          })}
        </svg>
      </motion.div>

      {/* ── Radial vignette ──────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 85% 80% at 50% 50%, transparent 25%, rgba(8,14,26,0.75) 100%)' }}
      />

      {/* ── Bottom fade ──────────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-56 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0c1222)' }}
      />

      {/* ── Top fade for navbar blend ────────────────────── */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, transparent, rgba(8,14,26,0.5))' }}
      />

      {/* ─── MAIN CONTENT ───────────────────────────────── */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-6 pt-20 w-full">
        <div className="max-w-4xl">

          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/[0.08] border border-sky-400/20 rounded-xl text-sky-300 text-sm font-medium mb-6">
              <HiSparkles className="w-4 h-4 text-amber-400" />
              Trusted by 15,000+ students worldwide
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-poppins leading-[1.05] mb-6"
          >
            <span className="text-white">Your Dream </span>
            <span className="gradient-text">University</span>
            <br />
            <span className="text-white">Awaits Abroad</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
          >
            Expert guidance for study abroad, visa processing, scholarships, and career planning.
            Turn your international education goals into reality with Australia&apos;s #1 education consultancy.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link to="/book-consultation" className="btn-primary text-base group">
              Book Free Consultation
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/destinations" className="btn-secondary text-base group">
              <FiPlay className="w-4 h-4" />
              Explore Destinations
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                className="glass-card p-4 text-center hover:bg-white/[0.06] transition-all duration-300"
              >
                <Icon className="w-5 h-5 text-sky-400 mx-auto mb-2" />
                <div className="text-2xl font-bold font-poppins text-white">{value}</div>
                <div className="text-xs text-slate-500">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ── Scroll indicator ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-6 h-10 border border-slate-600 rounded-full flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4], y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-1 h-2 bg-slate-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
