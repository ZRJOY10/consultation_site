import { BrowserRouter as Router, Routes, Route, useLocation, matchPath } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SeoMeta from './components/SeoMeta'
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
        title={`${courseName} in ${countryName} | Fees, Universities & Careers`}
        description={`Explore ${courseName} in ${countryName} with fees, top universities, admission criteria, and career options. Book a free consultation and apply with confidence today.`}
        canonicalPath={pathname}
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
        title={`Study in ${countryName} | Universities, Costs & Visa Guide`}
        description={`Plan your study in ${countryName} with tuition, intakes, visa requirements, and top course insights. Speak with our experts and start your journey today.`}
        canonicalPath={pathname}
        structuredData={[buildBreadcrumbSchema(pathname, destinationTrail)]}
      />
    )
  }

  const pageSeo = {
    '/': {
      title: 'Study Abroad Consultancy in Australia | Global Talent Education',
      description:
        'Get expert study abroad counselling, visa support, and scholarship guidance for top destinations. Book your free consultation and start your global journey today.',
    },
    '/about': {
      title: 'About Global Talent Education | Trusted Study Abroad Experts',
      description:
        'Learn about our mission, expertise, and student-first approach to study abroad success. Connect with our team and plan your education journey today.',
    },
    '/services': {
      title: 'Study Abroad Services | Counselling, Visa, Scholarships & PR',
      description:
        'Explore complete study abroad services including counselling, visa processing, scholarships, and career planning. Talk to our experts and get started today.',
    },
    '/destinations': {
      title: 'Top Study Destinations | Australia, Canada, UK, USA & More',
      description:
        'Compare popular study destinations by costs, universities, visa pathways, and intakes. Get personalized guidance and book your free consultation today.',
    },
    '/universities': {
      title: 'Partner Universities Worldwide | Global Talent Education',
      description:
        'Browse world-ranked partner universities across major destinations and find your best-fit option. Speak with an expert and shortlist your choices today.',
    },
    '/pte-training': {
      title: 'PTE and IELTS Training | Score Improvement Programs',
      description:
        'Join practical PTE and IELTS training with expert mentors, mock tests, and score-focused plans. Enroll now and reach your target score with confidence.',
    },
    '/student-success': {
      title: 'Student Success Stories | Visa Approvals and Scholarship Wins',
      description:
        'Read real student outcomes with visa approvals, scholarship wins, and top university admissions. Book a consultation to create your own success story today.',
    },
    '/blog': {
      title: 'Study Abroad Blog | Visa Guides, Scholarships and Tips',
      description:
        'Read expert study abroad articles on visas, scholarships, universities, and student life. Stay updated and contact us for personalized guidance today.',
    },
    '/contact': {
      title: 'Contact Global Talent Education | Study Abroad Support Team',
      description:
        'Contact our study abroad experts for counselling, visa help, and university guidance. Send us your query and get a personalized response within 24 hours.',
    },
    '/book-consultation': {
      title: 'Book Free Study Abroad Consultation | Global Talent Education',
      description:
        'Book a free consultation with our study abroad experts and get a clear plan for admissions, visa, and scholarships. Reserve your slot and begin today.',
    },
    '/privacy-policy': {
      title: 'Privacy Policy | Global Talent Education',
      description: 'Read how Global Talent Education collects, uses, and protects your personal information.',
    },
    '/terms-of-service': {
      title: 'Terms of Service | Global Talent Education',
      description: 'Review the terms and conditions for using Global Talent Education services and website.',
    },
    '/cookie-policy': {
      title: 'Cookie Policy | Global Talent Education',
      description: 'Learn how cookies and similar technologies are used on the Global Talent Education website.',
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
    structuredData.push(faqSchemaFromItems(homeFaqItems))
  }

  return (
    <SeoMeta
      title={seo.title}
      description={seo.description}
      canonicalPath={pathname}
      robots={seo.robots || 'index,follow'}
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
