import { BrowserRouter as Router, Routes, Route, useLocation, matchPath } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SeoMeta from './components/SeoMeta'
import TrackingScripts from './components/TrackingScripts'
import Home from './pages/Home'
import { getCourseGuide } from './data/courseGuides'
import { homeFaqItems } from './data/homeFaq'

const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Destinations = lazy(() => import('./pages/Destinations'))
const Universities = lazy(() => import('./pages/Universities'))
const PTETraining = lazy(() => import('./pages/PTETraining'))
const StudentSuccess = lazy(() => import('./pages/StudentSuccess'))
const Blog = lazy(() => import('./pages/Blog'))
const Contact = lazy(() => import('./pages/Contact'))
const BookConsultation = lazy(() => import('./pages/BookConsultation'))
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'))
const DestinationCourse = lazy(() => import('./pages/DestinationCourse'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./pages/TermsOfService'))
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'))
const NotFound = lazy(() => import('./pages/NotFound'))

const STATIC_ROUTES = [
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
]

const DYNAMIC_ROUTE_PATTERNS = ['/destinations/:country', '/destinations/:country/:course']

function isKnownRoute(pathname) {
  if (STATIC_ROUTES.includes(pathname)) return true
  return DYNAMIC_ROUTE_PATTERNS.some((pattern) => Boolean(matchPath({ path: pattern, end: true }, pathname)))
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

function capitalizeSlug(value = '') {
  return value
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function toAbsoluteUrl(path = '/') {
  const cleanPath = path?.startsWith('/') ? path : `/${path || ''}`
  return new URL(cleanPath, window.location.origin).toString()
}

function buildBreadcrumbSchema(pathname, customTrail = null) {
  const segments = pathname.split('/').filter(Boolean)

  const defaultTrail = [
    { name: 'Home', path: '/' },
    ...segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join('/')}`
      return { name: capitalizeSlug(segment), path }
    }),
  ]

  const trail = customTrail || defaultTrail

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  }
}

function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Global Talent Education',
    url: toAbsoluteUrl('/'),
    logo: toAbsoluteUrl('/organization-logo.webp'),
    sameAs: [
      'https://www.facebook.com/share/1HyZANYn9a/?mibextid=wwXIfr',
      'https://www.instagram.com/global_talent/',
      'https://www.linkedin.com/company/global-talent',
      'https://youtube.com/@globaltalenteducationcon?si=PUDihdRoqSX8CLri',
      'https://twitter.com/GlobalTalent',
    ],
  }
}

function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Global Talent Education',
    image: toAbsoluteUrl('/organization-logo.webp'),
    url: toAbsoluteUrl('/'),
    telephone: '+61 414 248 167',
    email: 'info@globaltalentedu.au',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2/13 Moore lane',
      addressLocality: 'Lilyfield',
      postalCode: '2040',
      addressRegion: 'NSW',
      addressCountry: 'AU',
    },
    openingHours: 'Mo-Sa 09:00-18:00',
    priceRange: '$$',
    sameAs: [
      'https://www.facebook.com/share/1HyZANYn9a/?mibextid=wwXIfr',
      'https://www.instagram.com/global_talent/',
      'https://www.linkedin.com/company/global-talent',
      'https://youtube.com/@globaltalenteducationcon?si=PUDihdRoqSX8CLri',
    ],
  }
}

function faqSchemaFromItems(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

function RouteSeo() {
  const { pathname } = useLocation()
  const structuredData = []
  const knownRoute = isKnownRoute(pathname)

  if (!knownRoute) {
    return (
      <SeoMeta
        title="Page Not Found | Global Talent Education"
        description="The requested page could not be found. Please return to the homepage or explore available study destinations."
        canonicalPath={pathname}
        robots="noindex,nofollow"
      />
    )
  }

  if (pathname !== '/' && pathname !== '/admin') {
    structuredData.push(buildBreadcrumbSchema(pathname))
  }

  const courseMatch = matchPath('/destinations/:country/:course', pathname)
  if (courseMatch) {
    const countrySlug = courseMatch.params.country || ''
    const courseSlug = courseMatch.params.course || ''
    const guide = getCourseGuide(countrySlug, courseSlug)
    const countryName = guide?.countryName || capitalizeSlug(countrySlug)
    const courseName = guide?.courseName || capitalizeSlug(courseSlug)
    const courseTrail = [
      { name: 'Home', path: '/' },
      { name: 'Destinations', path: '/destinations' },
      { name: countryName, path: `/destinations/${countrySlug}` },
      { name: courseName, path: pathname },
    ]

    return (
      <SeoMeta
        title={`${courseName} in ${countryName} | Study Guide & Fees`}
        description={`Explore ${courseName} in ${countryName} with tuition, top universities, entry requirements, and career options. Book a free consultation with our experts.`}
        canonicalPath={pathname}
        keywords={`${courseName} in ${countryName}, study abroad ${countryName}, ${courseName} tuition fees, international student guide`}
        structuredData={[buildBreadcrumbSchema(pathname, courseTrail)]}
      />
    )
  }

  const destinationMatch = matchPath('/destinations/:country', pathname)
  if (destinationMatch) {
    const countryName = capitalizeSlug(destinationMatch.params.country || '')
    const countrySlug = destinationMatch.params.country || ''
    const destinationTrail = [
      { name: 'Home', path: '/' },
      { name: 'Destinations', path: '/destinations' },
      { name: countryName, path: `/destinations/${countrySlug}` },
    ]

    return (
      <SeoMeta
        title={`Study in ${countryName} | University, Cost & Visa`}
        description={`Plan your study in ${countryName} with tuition costs, intakes, visa requirements, and top course options for international students.`}
        canonicalPath={pathname}
        keywords={`study in ${countryName}, international student ${countryName}, ${countryName} university admission, ${countryName} student visa`}
        structuredData={[buildBreadcrumbSchema(pathname, destinationTrail)]}
      />
    )
  }

  const pageSeo = {
    '/': {
      title: 'Study Abroad Consultancy Australia | Global Talent',
      description:
        'Get expert study abroad counselling, visa support, and scholarship guidance. Book your free consultation with Global Talent Education today.',
      keywords: 'study abroad consultancy Australia, student visa guidance, scholarship support, global talent education',
    },
    '/about': {
      title: 'About Global Talent Education | Study Abroad Experts',
      description:
        'Learn about Global Talent Education, our counselling approach, and how we help students succeed with university admission and visa planning.',
      keywords: 'about study abroad consultant, education consultancy Australia, global talent education',
    },
    '/services': {
      title: 'Study Abroad Services | Counselling, Visa, Scholarships',
      description:
        'Explore counselling, visa documentation, scholarship support, and application services designed for international student success.',
      keywords: 'study abroad services, visa processing support, scholarship guidance, university application help',
    },
    '/destinations': {
      title: 'Top Study Destinations | Global Talent Education',
      description:
        'Compare top study destinations by tuition, visa options, intakes, and universities for international students.',
      keywords: 'study destinations for international students, study in Australia Canada UK USA',
    },
    '/universities': {
      title: 'Partner Universities | Global Talent Education',
      description:
        'Browse world-ranked universities and shortlist best-fit options by destination, ranking, tuition, and courses.',
      keywords: 'partner universities, study abroad universities, university shortlisting',
    },
    '/pte-training': {
      title: 'PTE & IELTS Training | Global Talent Education',
      description:
        'Join practical PTE and IELTS coaching with mock tests and expert guidance to reach your target score confidently.',
      keywords: 'PTE training, IELTS coaching, English test preparation for study abroad',
    },
    '/student-success': {
      title: 'Student Success Stories | Global Talent Education',
      description:
        'Read real student outcomes including visa approvals, scholarship wins, and university admissions across top destinations.',
      keywords: 'student success stories, visa approval stories, scholarship success',
    },
    '/blog': {
      title: 'Study Abroad Blog | Global Talent Education',
      description:
        'Read expert articles on visas, scholarships, admissions, universities, and study abroad planning tips.',
      keywords: 'study abroad blog, visa guides, scholarship tips, admission advice',
    },
    '/contact': {
      title: 'Contact Global Talent Education',
      description:
        'Contact our study abroad experts for counselling, admissions support, and student visa guidance.',
      keywords: 'contact study abroad consultant, global talent education phone and address',
    },
    '/book-consultation': {
      title: 'Book Free Consultation | Global Talent Education',
      description:
        'Book a free consultation for study abroad planning, admissions strategy, and visa guidance.',
      keywords: 'book free consultation study abroad, student visa consultation',
    },
    '/privacy-policy': {
      title: 'Privacy Policy | Global Talent Education',
      description: 'Read how Global Talent Education collects, uses, and protects your personal information.',
      keywords: 'privacy policy global talent education',
    },
    '/terms-of-service': {
      title: 'Terms of Service | Global Talent Education',
      description: 'Review the terms and conditions for using Global Talent Education services and website.',
      keywords: 'terms of service global talent education',
    },
    '/cookie-policy': {
      title: 'Cookie Policy | Global Talent Education',
      description: 'Learn how cookies and similar technologies are used on the Global Talent Education website.',
      keywords: 'cookie policy global talent education',
    },
    '/admin': {
      title: 'Admin Dashboard | Global Talent Education',
      description: 'Internal admin dashboard for authorized team members only.',
      robots: 'noindex,nofollow',
    },
  }

  const seo = pageSeo[pathname] || pageSeo['/']

  if (pathname === '/') {
    structuredData.push(organizationSchema())
    structuredData.push(localBusinessSchema())
    structuredData.push(faqSchemaFromItems(homeFaqItems))
  }

  return (
    <SeoMeta
      title={seo.title}
      description={seo.description}
      canonicalPath={pathname}
      robots={seo.robots || 'index,follow'}
      keywords={seo.keywords}
      structuredData={structuredData}
    />
  )
}

function Layout({ children }) {
  const location = useLocation()
  const isAdmin = location.pathname === '/admin'
  const { isDark } = useTheme()
  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-dark-gradient' : 'bg-light-gradient'}`}>
      {!isAdmin && <Navbar />}
      <main aria-label="Main content">{children}</main>
      {!isAdmin && <Footer />}
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <RouteSeo />
        <TrackingScripts />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#1a1a2e',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.1)',
            },
          }}
        />
        <Layout>
          <Suspense fallback={<div className="min-h-[40vh]" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/destinations/:country" element={<Destinations />} />
              <Route path="/destinations/:country/:course" element={<DestinationCourse />} />
              <Route path="/universities" element={<Universities />} />
              <Route path="/pte-training" element={<PTETraining />} />
              <Route path="/student-success" element={<StudentSuccess />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book-consultation" element={<BookConsultation />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}
