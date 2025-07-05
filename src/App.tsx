import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import Home from '@/pages/home'
import './App.css'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <Home />
      </div>
    </ThemeProvider>
  )
}

export default App
