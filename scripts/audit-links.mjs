import { readFileSync, readdirSync, statSync } from 'node:fs'
import { resolve, extname } from 'node:path'

function getSourceFiles(dir) {
  const entries = readdirSync(dir)
  const files = []

  for (const entry of entries) {
    const fullPath = resolve(dir, entry)
    const stat = statSync(fullPath)

    if (stat.isDirectory()) {
      files.push(...getSourceFiles(fullPath))
      continue
    }

    const ext = extname(fullPath)
    if (['.js', '.jsx', '.ts', '.tsx'].includes(ext)) {
      files.push(fullPath)
    }
  }

  return files
}

const files = getSourceFiles(resolve(process.cwd(), 'src'))

const knownStatic = new Set([
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
  '/admin',
  '/privacy-policy',
  '/terms-of-service',
  '/cookie-policy',
])

const dynamicPrefixes = ['/destinations/']
const routeRefRegex = /(to|href)\s*=\s*["'](\/[^"'#?]*)["']/g

const refs = []

for (const file of files) {
  const content = readFileSync(file, 'utf8')
  let match
  while ((match = routeRefRegex.exec(content)) !== null) {
    refs.push({ file, path: match[2] })
  }
}

const uniqueByPath = Array.from(new Map(refs.map((ref) => [ref.path, ref])).values())

const broken = uniqueByPath.filter(
  (ref) => !knownStatic.has(ref.path) && !dynamicPrefixes.some((prefix) => ref.path.startsWith(prefix)),
)

if (broken.length === 0) {
  console.log('No obvious broken static internal paths found.')
  process.exit(0)
}

console.log('Potential broken internal paths:')
for (const item of broken) {
  console.log(`${item.path} in ${item.file}`)
}
process.exit(1)
