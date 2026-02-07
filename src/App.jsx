import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import CursorTrail from './components/CursorTrail'
import Report from './pages/Report'
import Dashboard from './pages/Dashboard'
import About from './pages/About'

export default function App() {
  const location = useLocation()
  return (
    <>
      <CursorTrail />
      <Header />
      <main>
        <div key={location.pathname} className="page-fade">
          <Routes location={location}>
            <Route path="/" element={<Report />} />
            <Route path="/report" element={<Report />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </main>
    </>
  )
}
