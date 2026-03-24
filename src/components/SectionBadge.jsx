export default function SectionBadge({
  children,
  variant = 'soft',
  size = 'sm',
  className = 'mb-4',
}) {
  const sizeClasses = {
    xs: 'px-2 py-0.5 text-xs',
    sm: 'px-4 py-1.5 text-sm',
    lg: 'px-6 py-1.5 text-lg',
  }

  const variantClasses = {
    soft: 'bg-copper-600/20 border-copper-500/30 text-copper-400',
    subtle: 'bg-copper-600/10 border-copper-500/20 text-copper-400',
    solid: 'bg-copper-600 border-copper-500/20 text-white',
  }

  const resolvedSize = sizeClasses[size] || sizeClasses.sm
  const resolvedVariant = variantClasses[variant] || variantClasses.soft

  return (
    <span className={`inline-block ${resolvedSize} rounded-full border font-medium ${resolvedVariant} ${className}`}>
      {children}
    </span>
  )
}