import { useEffect } from 'react'

function ensureMetaTag(name) {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  return tag
}

function ensurePropertyMetaTag(property) {
  let tag = document.querySelector(`meta[property="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  return tag
}

function ensureCanonicalTag() {
  let tag = document.querySelector('link[rel="canonical"]')
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', 'canonical')
    document.head.appendChild(tag)
  }
  return tag
}

function toCanonicalUrl(pathname) {
  const cleanPath = pathname?.startsWith('/') ? pathname : `/${pathname || ''}`
  return new URL(cleanPath, window.location.origin).toString()
}

function toAbsoluteUrl(pathOrUrl = '/') {
  if (!pathOrUrl) return toCanonicalUrl('/')
  try {
    return new URL(pathOrUrl, window.location.origin).toString()
  } catch {
    return toCanonicalUrl('/')
  }
}

function removeManagedStructuredData() {
  document
    .querySelectorAll('script[data-seo-jsonld="true"]')
    .forEach((node) => node.parentNode?.removeChild(node))
}

export default function SeoMeta({
  title,
  description,
  canonicalPath = '/',
  robots = 'index,follow',
  structuredData = [],
  keywords,
  image = '/organization-logo.webp',
  type = 'website',
}) {
  useEffect(() => {
    const canonicalUrl = toCanonicalUrl(canonicalPath)
    const imageUrl = toAbsoluteUrl(image)

    if (title) {
      document.title = title
    }

    if (description) {
      const descriptionMeta = ensureMetaTag('description')
      descriptionMeta.setAttribute('content', description)
    }

    const robotsMeta = ensureMetaTag('robots')
    robotsMeta.setAttribute('content', robots)

    if (keywords) {
      const keywordsMeta = ensureMetaTag('keywords')
      keywordsMeta.setAttribute('content', keywords)
    }

    const canonicalLink = ensureCanonicalTag()
    canonicalLink.setAttribute('href', canonicalUrl)

    const ogTitle = ensurePropertyMetaTag('og:title')
    ogTitle.setAttribute('content', title || '')

    const ogDescription = ensurePropertyMetaTag('og:description')
    ogDescription.setAttribute('content', description || '')

    const ogUrl = ensurePropertyMetaTag('og:url')
    ogUrl.setAttribute('content', canonicalUrl)

    const ogType = ensurePropertyMetaTag('og:type')
    ogType.setAttribute('content', type)

    const ogSiteName = ensurePropertyMetaTag('og:site_name')
    ogSiteName.setAttribute('content', 'Global Talent Education')

    const ogImage = ensurePropertyMetaTag('og:image')
    ogImage.setAttribute('content', imageUrl)

    const twitterCard = ensureMetaTag('twitter:card')
    twitterCard.setAttribute('content', 'summary_large_image')

    const twitterTitle = ensureMetaTag('twitter:title')
    twitterTitle.setAttribute('content', title || '')

    const twitterDescription = ensureMetaTag('twitter:description')
    twitterDescription.setAttribute('content', description || '')

    const twitterImage = ensureMetaTag('twitter:image')
    twitterImage.setAttribute('content', imageUrl)

    removeManagedStructuredData()

    const schemas = Array.isArray(structuredData) ? structuredData : [structuredData]
    schemas
      .filter(Boolean)
      .forEach((schema) => {
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.setAttribute('data-seo-jsonld', 'true')
        script.text = JSON.stringify(schema)
        document.head.appendChild(script)
      })

    return () => {
      removeManagedStructuredData()
    }
  }, [title, description, canonicalPath, robots, structuredData, keywords, image, type])

  return null
}
