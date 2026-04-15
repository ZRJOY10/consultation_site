import { useMemo, useState } from 'react'

const getInitials = (name = '') =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')

const getHostname = (link = '') => {
  try {
    return new URL(link).hostname.replace('www.', '')
  } catch {
    return ''
  }
}

const getLogoSources = (link = '') => {
  const hostname = getHostname(link)
  if (!hostname) return []

  return [
    `https://logo.clearbit.com/${hostname}`,
    `https://icons.duckduckgo.com/ip3/${hostname}.ico`,
    `https://www.google.com/s2/favicons?domain=${hostname}&sz=128`,
  ]
}

export default function UniversityLogo({
  name,
  link,
  containerClassName = '',
  initialsClassName = '',
  imageClassName = '',
}) {
  const [sourceIndex, setSourceIndex] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const initials = useMemo(() => getInitials(name), [name])
  const sources = useMemo(() => getLogoSources(link), [link])
  const currentSource = sources[sourceIndex]

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      <span className={`transition-opacity duration-200 ${loaded ? 'opacity-0' : 'opacity-100'} ${initialsClassName}`}>
        {initials}
      </span>

      {currentSource && (
        <img
          src={currentSource}
          alt={`Official logo of ${name}`}
          width="128"
          height="128"
          className={imageClassName}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => {
            setLoaded(false)
            setSourceIndex((prev) => prev + 1)
          }}
        />
      )}
    </div>
  )
}
