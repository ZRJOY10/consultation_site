export function optimizeImageUrl(source = '', options = {}) {
  if (!source) return source

  const { width, height, quality = 80, format = 'webp' } = options

  try {
    const url = new URL(source)

    if (url.hostname === 'images.unsplash.com' || url.hostname === 'unsplash.com') {
      url.searchParams.set('auto', 'format')
      url.searchParams.set('fm', format)
      url.searchParams.set('q', String(quality))

      if (width) {
        url.searchParams.set('w', String(width))
      }

      if (height) {
        url.searchParams.set('h', String(height))
      }

      if (!url.searchParams.get('fit')) {
        url.searchParams.set('fit', 'crop')
      }

      return url.toString()
    }

    return source
  } catch {
    return source
  }
}
