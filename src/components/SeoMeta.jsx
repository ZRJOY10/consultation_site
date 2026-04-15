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

function removeManagedStructuredData() {
  document
    .querySelectorAll('script[data-seo-jsonld="true"]')
    .forEach((node) => node.parentNode?.removeChild(node))
}

export default function SeoMeta({ title, description, canonicalPath = '/', robots = 'index,follow', structuredData = [] }) {
  useEffect(() => {
    if (title) {
      document.title = title
    }

    if (description) {
      const descriptionMeta = ensureMetaTag('description')
      descriptionMeta.setAttribute('content', description)
    }

    const robotsMeta = ensureMetaTag('robots')
    robotsMeta.setAttribute('content', robots)

    const canonicalLink = ensureCanonicalTag()
    canonicalLink.setAttribute('href', toCanonicalUrl(canonicalPath))

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
  }, [title, description, canonicalPath, robots, structuredData])

  return null
}
