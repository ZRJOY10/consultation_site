import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiUsers, FiFileText, FiTrendingUp, FiDollarSign, FiCheckCircle, FiClock, FiAlertCircle, FiMenu, FiX, FiHome, FiBook, FiSettings, FiLogOut, FiBell, FiSearch, FiMoreVertical, FiEye } from 'react-icons/fi'
import { HiAcademicCap } from 'react-icons/hi'

const stats = [
  { label: 'Total Enquiries', value: '1,284', change: '+12.5%', icon: FiUsers, color: 'from-blue-600 to-blue-400', bg: 'bg-blue-600/10' },
  { label: 'Active Applications', value: '386', change: '+8.2%', icon: FiFileText, color: 'from-purple-600 to-purple-400', bg: 'bg-purple-600/10' },
  { label: 'Visa Success Rate', value: '98.2%', change: '+0.4%', icon: FiCheckCircle, color: 'from-green-600 to-green-400', bg: 'bg-green-600/10' },
  { label: 'Revenue (Month)', value: '$84,200', change: '+18.7%', icon: FiDollarSign, color: 'from-amber-600 to-amber-400', bg: 'bg-amber-600/10' },
]

const recentApplications = [
  { id: '#A1024', name: 'Priya Sharma', country: '🇦🇺', university: 'Univ. of Melbourne', course: 'Data Science', status: 'Visa Approved', statusColor: 'text-green-400 bg-green-400/10', date: 'Dec 14' },
  { id: '#A1023', name: 'Rahul Patel', country: '🇨🇦', university: 'Univ. of Toronto', course: 'MBA Finance', status: 'Docs Pending', statusColor: 'text-amber-400 bg-amber-400/10', date: 'Dec 13' },
  { id: '#A1022', name: 'Anjali Singh', country: '🇬🇧', university: 'Imperial College', course: 'MSc Eng', status: 'Offer Received', statusColor: 'text-blue-400 bg-blue-400/10', date: 'Dec 12' },
  { id: '#A1021', name: 'Mohammed Ali', country: '🇺🇸', university: 'Stanford Univ.', course: 'MS CS', status: 'In Review', statusColor: 'text-white/60 bg-white/5', date: 'Dec 11' },
  { id: '#A1020', name: 'Sarah Chen', country: '🇳🇿', university: 'Univ. of Auckland', course: 'B.Commerce', status: 'Visa Approved', statusColor: 'text-green-400 bg-green-400/10', date: 'Dec 10' },
  { id: '#A1019', name: 'Vikram Singh', country: '🇦🇺', university: 'Monash Uni', course: 'B.Engineering', status: 'Applied', statusColor: 'text-purple-400 bg-purple-400/10', date: 'Dec 9' },
]

const consultations = [
  { name: 'Fatima Al-Rashid', time: '10:00 AM', type: 'Visa Consult', counsellor: 'David Chen', status: 'upcoming' },
  { name: 'Arun Kumar', time: '11:30 AM', type: 'Study Abroad', counsellor: 'Sarah Mitchell', status: 'upcoming' },
  { name: 'Wei Zhang', time: '2:00 PM', type: 'Scholarship', counsellor: 'Priya Kapoor', status: 'completed' },
  { name: 'James Park', time: '3:30 PM', type: 'PTE Training', counsellor: 'Michael Torres', status: 'cancelled' },
]

const navItems = [
  { icon: FiHome, label: 'Dashboard', active: true },
  { icon: FiUsers, label: 'Applications' },
  { icon: FiFileText, label: 'Enquiries' },
  { icon: FiBook, label: 'Consultations' },
  { icon: FiTrendingUp, label: 'Analytics' },
  { icon: FiSettings, label: 'Settings' },
]

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeNav, setActiveNav] = useState('Dashboard')

  return (
    <div className="min-h-screen bg-[#060609] flex">
      {/* Sidebar */}
      <motion.aside
        animate={{ width: sidebarOpen ? 240 : 70 }}
        className="bg-[#0a0a0f] border-r border-white/5 flex flex-col h-screen sticky top-0 overflow-hidden"
        style={{ minWidth: sidebarOpen ? 240 : 70 }}
      >
        {/* Logo */}
        <div className="p-4 border-b border-white/5 flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
            <HiAcademicCap className="w-5 h-5 text-white" />
          </div>
          {sidebarOpen && <span className="text-white font-bold font-poppins">Counsil Admin</span>}
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map(({ icon: Icon, label }) => (
            <button
              key={label}
              onClick={() => setActiveNav(label)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-sm font-medium ${activeNav === label ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {sidebarOpen && <span>{label}</span>}
            </button>
          ))}
        </nav>

        {/* Toggle + logout */}
        <div className="p-3 border-t border-white/5 space-y-1">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-all text-sm">
            {sidebarOpen ? <FiX className="w-4 h-4" /> : <FiMenu className="w-4 h-4" />}
            {sidebarOpen && 'Collapse'}
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-white/40 hover:text-red-400 hover:bg-red-500/5 transition-all text-sm">
            <FiLogOut className="w-4 h-4" />
            {sidebarOpen && 'Sign Out'}
          </button>
        </div>
      </motion.aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h1 className="text-lg font-bold text-white">Dashboard</h1>
            <p className="text-xs text-white/30">Welcome back, Admin</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input type="text" placeholder="Search..." className="bg-white/5 border border-white/10 rounded-lg px-9 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/20 w-48" />
            </div>
            <button className="relative w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors">
              <FiBell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-blue-500" />
            </button>
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white text-xs font-bold">
              A
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {stats.map(({ label, value, change, icon: Icon, color, bg }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-5"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${change.startsWith('+') ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'}`}>
                    {change}
                  </span>
                </div>
                <p className={`text-2xl font-black font-poppins bg-gradient-to-r ${color} bg-clip-text text-transparent mb-1`}>{value}</p>
                <p className="text-xs text-white/40">{label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Applications table */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="xl:col-span-2 glass-card overflow-hidden">
              <div className="p-5 border-b border-white/5 flex items-center justify-between">
                <h2 className="font-semibold text-white">Recent Applications</h2>
                <button className="text-xs text-blue-400 hover:text-blue-300">View all</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/5">
                      {['ID', 'Student', 'University', 'Status', 'Date', ''].map(h => (
                        <th key={h} className="text-left px-4 py-3 text-xs text-white/30 font-medium uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {recentApplications.map(app => (
                      <tr key={app.id} className="hover:bg-white/2 transition-colors">
                        <td className="px-4 py-3 text-xs text-white/40">{app.id}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className="text-sm">{app.country}</span>
                            <span className="text-sm text-white font-medium">{app.name}</span>
                          </div>
                          <span className="text-xs text-white/30">{app.course}</span>
                        </td>
                        <td className="px-4 py-3 text-xs text-white/50 hidden md:table-cell">{app.university}</td>
                        <td className="px-4 py-3">
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${app.statusColor}`}>
                            {app.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-xs text-white/30 hidden sm:table-cell">{app.date}</td>
                        <td className="px-4 py-3">
                          <button className="text-white/30 hover:text-white/60 transition-colors">
                            <FiEye className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Today's consultations */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="glass-card overflow-hidden">
              <div className="p-5 border-b border-white/5 flex items-center justify-between">
                <h2 className="font-semibold text-white">Today's Consultations</h2>
                <span className="text-xs text-white/30">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="p-4 space-y-3">
                {consultations.map((c, i) => (
                  <div key={i} className="glass-card p-3 group">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-sm font-medium text-white">{c.name}</p>
                        <p className="text-xs text-white/30">{c.type}</p>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        c.status === 'upcoming' ? 'bg-blue-400/10 text-blue-400' :
                        c.status === 'completed' ? 'bg-green-400/10 text-green-400' :
                        'bg-red-400/10 text-red-400'
                      }`}>
                        {c.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-white/30">
                      <span className="flex items-center gap-1"><FiClock className="w-3 h-3" />{c.time}</span>
                      <span className="flex items-center gap-1"><FiUsers className="w-3 h-3" />{c.counsellor}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom quick actions */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="glass-card p-5">
            <h2 className="font-semibold text-white mb-4">Quick Actions</h2>
            <div className="flex flex-wrap gap-3">
              {['New Application', 'Schedule Consultation', 'Send Newsletter', 'Generate Report', 'Add Blog Post', 'Manage Team'].map(action => (
                <button key={action} className="px-4 py-2 glass-card-hover rounded-lg text-sm text-white/60 hover:text-white transition-colors">
                  {action}
                </button>
              ))}
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
