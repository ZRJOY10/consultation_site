import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { courseGuides, toCourseSlug } from '../src/data/courseGuides.js'

const SITE_URL = (process.env.SITE_URL || 'https://globaltalentedu.au').replace(/\/$/, '')

const staticRoutes = [
  '/',
  '/about',
  '/services',
  '/destinations',
  '/universities',
  '/pte-training',
  '/student-success',
  '/blog',
  '/contact',
  '/book-consultation',
  '/privacy-policy',
  '/terms-of-service',
  '/cookie-policy',
]

const destinationCountries = ['australia', 'canada', 'uk', 'usa', 'new-zealand', 'malta']
const destinationRoutes = destinationCountries.map((country) => `/destinations/${country}`)

const courseRoutes = Object.entries(courseGuides).flatMap(([country, courses]) =>
  Object.keys(courses).map((courseKey) => `/destinations/${country}/${toCourseSlug(courseKey)}`),
)

const allRoutes = Array.from(new Set([...staticRoutes, ...destinationRoutes, ...courseRoutes]))

const nowIso = new Date().toISOString()

const urlTags = allRoutes
  .map((path) => {
    const isHomepage = path === '/'
    const priority = isHomepage ? '1.0' : path.startsWith('/destinations/') ? '0.8' : '0.7'
    const changefreq = isHomepage ? 'weekly' : 'monthly'

    return `  <url>\n    <loc>${SITE_URL}${path}</loc>\n    <lastmod>${nowIso}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
  })
  .join('\n')

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlTags}\n</urlset>\n`

const outputPath = resolve(process.cwd(), 'public', 'sitemap.xml')
writeFileSync(outputPath, sitemapXml, 'utf8')
console.log(`Sitemap generated: ${outputPath}`)
