import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

// Bumped when light became the default. The old key held a 'dark' value for
// everyone who had already visited, and a stored preference beats the default —
// so without a new key those visitors would never see the light theme.
const STORAGE_KEY = 'global-talent-theme-v2'

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) return stored === 'dark'
    } catch {
      // Safari in private mode throws on localStorage access.
    }
    return false // Light mode is default
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    try {
      localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light')
    } catch {
      // Non-fatal: the theme just will not persist across reloads.
    }
  }, [isDark])

  const toggleTheme = () => setIsDark(prev => !prev)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
