/**
 * Circular "50% OFF" seal used wherever the launch discount needs to carry the
 * eye — hero offer card, pricing section, enrollment summary.
 */
export default function OfferBadge({ size = 'md', className = '' }) {
  const sizes = {
    sm: { box: 'w-11 h-11', pct: 'text-[11px]', off: 'text-[7px]' },
    md: { box: 'w-16 h-16', pct: 'text-sm', off: 'text-[8px]' },
    lg: { box: 'w-20 h-20 sm:w-24 sm:h-24', pct: 'text-xl sm:text-2xl', off: 'text-[10px] sm:text-xs' },
  }
  const s = sizes[size] || sizes.md

  return (
    <div className={`relative flex-shrink-0 ${s.box} ${className}`}>
      {/* Opacity-only glow. animate-ping scales 2x, which pushes the page's
          scrollable width past the viewport when the seal sits near an edge. */}
      <span
        className="absolute -inset-1 rounded-full bg-gold-400/25 blur-md animate-pulse-slow"
        aria-hidden="true"
      />
      <div
        className={`relative ${s.box} rounded-full bg-gradient-to-br from-gold-400 via-copper-500 to-copper-700 flex flex-col items-center justify-center text-white shadow-glow-gold -rotate-[8deg] border-2 border-gold-400/40`}
      >
        <span className={`${s.pct} font-black leading-none tracking-tight`}>50%</span>
        <span className={`${s.off} font-bold tracking-[0.2em] mt-0.5`}>OFF</span>
      </div>
    </div>
  )
}
