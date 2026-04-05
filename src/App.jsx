import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Destinations from './pages/Destinations'
import Universities from './pages/Universities'
import PTETraining from './pages/PTETraining'
import StudentSuccess from './pages/StudentSuccess'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import BookConsultation from './pages/BookConsultation'
import AdminDashboard from './pages/AdminDashboard'
import DestinationCourse from './pages/DestinationCourse'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

function Layout({ children }) {
  const location = useLocation()
  const isAdmin = location.pathname === '/admin'
  const { isDark } = useTheme()
  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-dark-gradient' : 'bg-light-gradient'}`}>
      {!isAdmin && <Navbar />}
      <main>{children}</main>
      {!isAdmin && <Footer />}
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
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
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}
