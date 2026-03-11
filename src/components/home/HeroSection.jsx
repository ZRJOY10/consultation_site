import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowRight, FiPlay, FiStar, FiUsers, FiAward, FiGlobe } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi'
import { useTheme } from '../../context/ThemeContext'
import worldSvg from '../../assets/svg/world.svg'

/* Stats */
const stats = [
  { icon: FiUsers, value: '15,000+', label: 'Students Placed' },
  { icon: FiStar, value: '98%', label: 'Visa Success Rate' },
  { icon: FiGlobe, value: '50+', label: 'Top Universities' },
  { icon: FiAward, value: '14+', label: 'Years Experience' },
]

/* Subtle stars (25) dark mode only */
const stars = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: `${(i * 17.3 + 3) % 100}%`,
  top: `${(i * 23.7 + 5) % 100}%`,
  size: i % 4 === 0 ? 2 : 1.2,
  delay: (i * 0.35) % 7,
  dur: 3 + (i % 5) * 0.8,
}))

/* Country highlight paths (extracted from world.svg) */
const bdPath =
  'M1500.6 360.3l0.6 4.6-2.1-1 1.1 5.2-2.1-3.3-0.8-3.3-1.5-3.1-2.8-3.7-5.2-0.3 0.9 2.7-1.2 3.5-2.6-1.3-0.6 1.2-1.7-0.7-2.2-0.6-1.6-5.3-2.6-4.8 0.3-3.9-3.7-1.7 0.9-2.3 3-2.4-4.6-3.4 1.2-4.4 4.9 2.8 2.7 0.3 1.2 4.5 5.4 0.9 5.1-0.1 3.4 1.1-1.6 5.4-2.4 0.4-1.2 3.6 3.6 3.4 0.3-4.2 1.5 0 4.4 10.2z'

const ausPaths = [
  'M 1793.5 590.2 1794.7 595.2 1798.7 592.8 1800.1 595.5 1802.4 598 1801.3 600.9 1801.5 606.4 1801.7 609.6 1803 610.4 1803.4 615.9 1802.2 619.2 1803 623.5 1808.4 626.9 1811.6 629.9 1814.8 632.7 1813.7 634.3 1816 638.3 1816.5 645.3 1819.1 643.9 1820.6 646.6 1822.2 645.7 1821.5 652.5 1824.4 656.4 1826.3 658.8 1829.1 664 1829.1 669.2 1828.1 672.9 1826.3 676.8 1827 682.3 1824.5 688 1822.4 691 1818.6 696.7 1817.1 700.4 1814 705 1809 710.8 1803.5 714 1799.1 718.9 1795.8 722.1 1791.4 727.6 1787.7 730.8 1783.8 735.6 1780.7 740 1779.9 742.1 1775.6 744.3 1769.5 744.5 1763.2 747.2 1759.4 749.6 1754.6 752.4 1751.9 749.5 1749.3 748.4 1751.9 745.1 1748.4 746.3 1741.2 750.9 1737.6 749.2 1735.2 748.2 1732.4 747.7 1728.3 745.9 1727 741.9 1728.5 737.1 1728.9 733.8 1727.5 731.2 1722.8 730.5 1726 727.3 1726.9 722.6 1722.2 727 1716.9 728.2 1721.4 724.7 1723.9 721 1727.4 717.8 1729 713.1 1722.2 718.5 1717.9 720.7 1713.6 725.8 1710.6 723.2 1712.3 719.8 1710.9 715.1 1709.1 712.7 1710.7 711.2 1705.4 707.3 1701.6 707.2 1697.6 704 1687.7 704.6 1679.8 706.9 1672.9 709.1 1667.9 708.7 1660.9 712 1655.6 713.4 1653.3 716.8 1650.3 719.4 1645.6 719.6 1642 720.1 1637.8 719 1633.6 719.7 1629.8 720 1625.3 723.4 1623.8 723.1 1620.4 724.9 1617 726.9 1613.2 726.7 1609.7 726.7 1605.6 722.6 1603.2 721.4 1604.7 717.7 1607.6 716.8 1609.1 715.4 1609.7 713.1 1612 708.6 1612.7 704.8 1612 698.3 1612.2 694.6 1613.6 691 1612.7 686.8 1613 684.9 1611.3 682.3 1612 677.3 1610.1 672.2 1610 669.5 1611.8 672.3 1611.3 666.3 1613.6 668.2 1614.7 670.7 1615.3 667.4 1613.7 662.3 1613.6 660.3 1612.8 658.4 1614.1 654.7 1615.6 653.1 1616.9 649.9 1617 646.1 1620.1 641.5 1619.7 646.4 1622.8 642 1627.7 639.8 1630.9 637.1 1635.6 634.7 1638.2 634.2 1639.6 635 1644.4 632.6 1647.9 631.9 1649 630.5 1650.5 629.9 1653.6 630.1 1659.8 628.2 1663.3 625.3 1665.3 621.9 1669.2 618.7 1669.9 616.1 1670.6 612.6 1675.5 607.1 1676.9 612.7 1679.5 611.4 1678 608.4 1680.3 605.3 1682.5 606.7 1684 601.8 1687.5 598.6 1689.3 596.1 1692.2 595 1692.6 593.2 1694.9 593.9 1695.3 592.3 1697.9 591.4 1700.7 590.5 1704.4 593.5 1707 597.3 1710.5 597.3 1714 597.9 1713.3 594.4 1716.8 589.3 1719.5 587.6 1718.9 586 1721.8 582.3 1725.5 580 1728.2 580.8 1733.1 579.6 1733.4 576.3 1729.5 574.2 1732.6 573.3 1736.2 574.9 1738.9 577.5 1743.4 579.1 1745.1 578.5 1748.4 580.5 1751.9 578.6 1753.9 579.2 1755.4 577.9 1757.6 581.1 1755.6 584.6 1753.1 587.2 1751.2 587.4 1751.5 589.9 1749.3 593.1 1746.8 596.3 1747 598.1 1750.8 601.7 1754.8 603.7 1757.3 605.9 1760.6 609.7 1762.2 609.7 1764.8 611.4 1765.3 613.4 1770.2 615.5 1774.3 613.3 1776.1 609.9 1777.8 607 1779.1 603.5 1781.7 598.4 1781.5 595.3 1782.2 593.4 1782.1 589.8 1783.5 584.9 1784.8 583.6 1784.2 581.5 1786 578.1 1787.5 574.6 1787.9 572.7 1790.2 570.3 1791.5 573.5 1791.4 577.5 1792.7 578.3 1792.6 581 1794.2 584.2 1794.1 587.9 1793.5 590.2 Z',
  'M 1743 763.6 1746.7 765.8 1750 764.9 1754.9 763.7 1757.7 764.1 1753.2 771.7 1749.9 773.8 1745.9 779 1745.3 777.2 1738.7 781.6 1737.9 781.3 1734.9 781.1 1735.4 775.7 1737.4 771.5 1738 765.9 1740 763 1743 763.6 Z',
]

/* Flight routes BD to AUS is PRIMARY */
const flights = [
  {
    id: 'bd-syd',
    path: 'M 1490 355 C 1560 470, 1700 590, 1810 688',
    from: { x: 1490, y: 355, label: 'Dhaka' },
    to: { x: 1810, y: 688, label: 'Sydney' },
    dur: 8, delay: 0, primary: true,
    darkColor: '#38bdf8', lightColor: '#b87333',
  },
  {
    id: 'bd-mel',
    path: 'M 1490 355 C 1530 480, 1660 620, 1793 720',
    from: { x: 1490, y: 355, label: 'Dhaka' },
    to: { x: 1793, y: 720, label: 'Melbourne' },
    dur: 9, delay: 2, primary: false,
    darkColor: '#818cf8', lightColor: '#9a5f29',
  },
  {
    id: 'bd-lon',
    path: 'M 1490 355 C 1300 210, 1150 160, 1000 182',
    from: { x: 1490, y: 355, label: 'Dhaka' },
    to: { x: 1000, y: 182, label: 'London' },
    dur: 11, delay: 1, primary: false,
    darkColor: '#34d399', lightColor: '#c68642',
  },
  {
    id: 'bd-tor',
    path: 'M 1490 355 C 1200 150, 850 100, 555 240',
    from: { x: 1490, y: 355, label: 'Dhaka' },
    to: { x: 555, y: 240, label: 'Toronto' },
    dur: 14, delay: 3, primary: false,
    darkColor: '#fbbf24', lightColor: '#d4a574',
  },
]

export default function HeroSection() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const mapY = useTransform(scrollY, [0, 500], [0, 60])
  const { isDark } = useTheme()

  const [isSmall, setIsSmall] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 1024 : false,
  )
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)')
    setIsSmall(mq.matches)
    const handle = (e) => setIsSmall(e.matches)
    mq.addEventListener('change', handle)
    return () => mq.removeEventListener('change', handle)
  }, [])

  const accent = isDark ? '#38bdf8' : '#b87333'
  const gridColor = isDark ? '#475569' : '#b87333'
  const viewBox = isSmall ? '1150 50 950 807' : '50 0 2000 857'
  const mapMatrix = isDark
    ? '0.3 0 0 0 0.15  0.35 0 0 0 0.2  0.4 0 0 0 0.3  0 0 0 1 0'
    : '0.5 0.1 0 0 0.2  0.3 0.1 0 0 0.1  0.1 0.05 0 0 0.02  0 0 0 1 0'

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className={`absolute inset-0 transition-colors duration-500 ${
        isDark
          ? 'bg-gradient-to-b from-[#080e1a] via-[#0c1222] to-[#0c1222]'
          : 'bg-gradient-to-b from-[#faf8f5] via-[#f3ede6] to-[#faf8f5]'
      }`} />

      <motion.div
        className={`absolute -top-[15%] left-[10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full blur-[180px] pointer-events-none ${
          isDark ? 'bg-sky-600/[0.06]' : 'bg-copper-400/[0.08]'
        }`}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={`absolute -bottom-[10%] right-[5%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full blur-[160px] pointer-events-none ${
          isDark ? 'bg-indigo-600/[0.05]' : 'bg-copper-300/[0.06]'
        }`}
        animate={{ x: [0, -35, 0], y: [0, 30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />

      {isDark && (
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
      )}

      <motion.div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ y: mapY }}>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox={viewBox}
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="countryGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="10" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="mapTint" colorInterpolationFilters="sRGB">
              <feColorMatrix type="matrix" values={mapMatrix} />
            </filter>
            {flights.map((f) => (
              <path key={f.id} id={f.id} d={f.path} />
            ))}
          </defs>

          <image
            href={worldSvg}
            x="0" y="0" width="2000" height="857"
            filter="url(#mapTint)"
            opacity={isDark ? '0.09' : '0.09'}
          />

          <line x1="0" y1="428" x2="2000" y2="428"
            stroke={gridColor} strokeOpacity={isDark ? '0.04' : '0.05'} strokeWidth="0.8" strokeDasharray="8 14" />
          {[285, 571].map((yy) => (
            <line key={`t${yy}`} x1="0" y1={yy} x2="2000" y2={yy}
              stroke={gridColor} strokeOpacity={isDark ? '0.025' : '0.03'} strokeWidth="0.5" strokeDasharray="4 18" />
          ))}
          {[500, 1000, 1500].map((xx) => (
            <line key={`v${xx}`} x1={xx} y1="0" x2={xx} y2="857"
              stroke={gridColor} strokeOpacity={isDark ? '0.025' : '0.03'} strokeWidth="0.4" strokeDasharray="3 20" />
          ))}

          <g filter="url(#countryGlow)">
            <path d={bdPath} fill={accent} opacity={isDark ? '0.4' : '0.3'} />
            <path d={bdPath} fill="none" stroke={accent} strokeWidth="1.8" opacity="0.6" />
          </g>

          <g filter="url(#countryGlow)">
            {ausPaths.map((d, i) => (
              <g key={`aus-${i}`}>
                <path d={d} fill={accent} opacity={isDark ? '0.3' : '0.22'} />
                <path d={d} fill="none" stroke={accent} strokeWidth="1.2" opacity="0.45" />
              </g>
            ))}
          </g>

          <text x="1490" y="338" fill={accent} fontSize="14" fontFamily="Inter, sans-serif"
            textAnchor="middle" opacity="0.65" fontWeight="700" letterSpacing="1.5">BD</text>
          <text x="1720" y="665" fill={accent} fontSize="16" fontFamily="Inter, sans-serif"
            textAnchor="middle" opacity="0.55" fontWeight="700" letterSpacing="1.5">AUS</text>

          {flights.map((f) => {
            const totalCycle = `${f.dur}s`
            const color = isDark ? f.darkColor : f.lightColor
            const isPrimary = f.primary
            return (
              <g key={f.id}>
                <path d={f.path} fill="none" stroke={color}
                  strokeOpacity={isPrimary ? '0.14' : '0.06'}
                  strokeWidth={isPrimary ? '1.8' : '1'} strokeDasharray="5 12" />
                <path d={f.path} fill="none" stroke={color}
                  strokeWidth={isPrimary ? '3.5' : '1.8'} strokeLinecap="round"
                  filter="url(#softGlow)" className="flight-trail"
                  style={{ '--trail-dur': totalCycle, '--trail-delay': `${f.delay}s` }} />

                <circle cx={f.from.x} cy={f.from.y} r={isPrimary ? '4' : '3'} fill={color} opacity="0.7">
                  <animate attributeName="r" values={isPrimary ? '3;7;3' : '2.5;4.5;2.5'} dur="2.8s" repeatCount="indefinite" />
                </circle>
                {isPrimary && (
                  <circle cx={f.from.x} cy={f.from.y} r="10" fill="none" stroke={color} strokeWidth="1" opacity="0">
                    <animate attributeName="r" values="6;22;6" dur="2.8s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.45;0;0.45" dur="2.8s" repeatCount="indefinite" />
                  </circle>
                )}

                <circle cx={f.to.x} cy={f.to.y} r={isPrimary ? '4' : '3'} fill={color} opacity="0.7">
                  <animate attributeName="r" values={isPrimary ? '3;7;3' : '2.5;4.5;2.5'} dur="2.8s" begin="0.7s" repeatCount="indefinite" />
                </circle>
                {isPrimary && (
                  <circle cx={f.to.x} cy={f.to.y} r="10" fill="none" stroke={color} strokeWidth="1" opacity="0">
                    <animate attributeName="r" values="6;22;6" dur="2.8s" begin="0.7s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.45;0;0.45" dur="2.8s" begin="0.7s" repeatCount="indefinite" />
                  </circle>
                )}

                <text x={f.from.x} y={f.from.y + (isPrimary ? 30 : 22)} fill={color}
                  fontSize={isPrimary ? '13' : '10'} fontFamily="Inter, sans-serif"
                  textAnchor="middle" opacity={isPrimary ? '0.55' : '0.35'} fontWeight="500" letterSpacing="0.5">
                  {f.from.label}
                </text>
                <text x={f.to.x} y={f.to.y + (isPrimary ? 30 : 22)} fill={color}
                  fontSize={isPrimary ? '13' : '10'} fontFamily="Inter, sans-serif"
                  textAnchor="middle" opacity={isPrimary ? '0.55' : '0.35'} fontWeight="500" letterSpacing="0.5">
                  {f.to.label}
                </text>

                <g filter="url(#softGlow)">
                  <animateMotion dur={totalCycle} begin={`${f.delay}s`} repeatCount="indefinite"
                    rotate="auto" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 0.58 1">
                    <mpath href={`#${f.id}`} />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;0.9;0.9;0" keyTimes="0;0.06;0.88;1"
                    dur={totalCycle} begin={`${f.delay}s`} repeatCount="indefinite" />
                  <polygon points={isPrimary ? '13,0 -5,5.5 -2,0 -5,-5.5' : '10,0 -4,4 -1.5,0 -4,-4'}
                    fill={isDark ? 'white' : '#5a3516'} />
                  <line x1="-2" y1="0" x2="-20" y2="0"
                    stroke={isDark ? 'white' : '#7d4c20'} strokeWidth={isPrimary ? '2' : '1.4'}
                    strokeOpacity="0.25" strokeLinecap="round" />
                  <line x1="-20" y1="0" x2="-38" y2="0"
                    stroke={isDark ? 'white' : '#9a5f29'} strokeWidth="0.8"
                    strokeOpacity="0.08" strokeLinecap="round" />
                </g>
              </g>
            )
          })}
        </svg>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none"
        style={{ background: isDark
          ? 'radial-gradient(ellipse 85% 80% at 50% 50%, transparent 25%, rgba(8,14,26,0.75) 100%)'
          : 'radial-gradient(ellipse 85% 80% at 50% 50%, transparent 25%, rgba(250,248,245,0.70) 100%)' }} />

      <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-56 pointer-events-none"
        style={{ background: isDark
          ? 'linear-gradient(to bottom, transparent, #0c1222)'
          : 'linear-gradient(to bottom, transparent, #faf8f5)' }} />

      <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 pointer-events-none"
        style={{ background: isDark
          ? 'linear-gradient(to top, transparent, rgba(8,14,26,0.5))'
          : 'linear-gradient(to top, transparent, rgba(250,248,245,0.3))' }} />

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 w-full">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium mb-6 border ${
              isDark ? 'bg-sky-500/[0.08] border-sky-400/20 text-sky-300' : 'bg-copper-600/[0.06] border-copper-400/20 text-copper-700'
            }`}>
              <HiSparkles className={`w-4 h-4 ${isDark ? 'text-amber-400' : 'text-copper-500'}`} />
              Trusted by 15,000+ students worldwide
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-poppins leading-[1.05] mb-4 sm:mb-6">
            <span className={isDark ? 'text-white' : 'text-copper-900'}>Your Dream </span>
            <span className="gradient-text">University</span><br />
            <span className={isDark ? 'text-white' : 'text-copper-900'}>Awaits Abroad</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-base sm:text-lg md:text-xl max-w-2xl mb-8 sm:mb-10 leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-copper-700/70'
            }`}>
            Expert guidance for study abroad, visa processing, scholarships, and career planning.
            Turn your international education goals into reality with Australia&apos;s #1 education consultancy.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16">
            <Link to="/book-consultation" className="btn-primary text-sm sm:text-base group">
              Book Free Consultation
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/destinations" className="btn-secondary text-sm sm:text-base group">
              <FiPlay className="w-4 h-4" />
              Explore Destinations
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <motion.div key={label} initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                className="glass-card p-3 sm:p-4 text-center transition-all duration-300 hover:scale-[1.02]">
                <Icon className={`w-4 sm:w-5 h-4 sm:h-5 mx-auto mb-1.5 sm:mb-2 ${isDark ? 'text-sky-400' : 'text-copper-600'}`} />
                <div className={`text-lg sm:text-2xl font-bold font-poppins ${isDark ? 'text-white' : 'text-copper-900'}`}>{value}</div>
                <div className={`text-[10px] sm:text-xs ${isDark ? 'text-slate-500' : 'text-copper-600/60'}`}>{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className={`w-6 h-10 border rounded-full flex items-start justify-center p-1.5 ${
            isDark ? 'border-slate-600' : 'border-copper-400/30'
          }`}>
          <motion.div animate={{ opacity: [0.4, 1, 0.4], y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className={`w-1 h-2 rounded-full ${isDark ? 'bg-slate-400' : 'bg-copper-500'}`} />
        </motion.div>
      </motion.div>
    </section>
  )
}