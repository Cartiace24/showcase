import { lazy, Suspense } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
const Templates = lazy(() => import('./pages/Templates'))
const TemplateDetail = lazy(() => import('./pages/TemplateDetail'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Policy = lazy(() => import('./pages/Policy'))

function PageFrame({ children }: { children: React.ReactNode }) {
  return <motion.div className="page-transition" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .24, ease: 'easeOut' }}>{children}</motion.div>
}

export default function App() {
  const location = useLocation()
  return <div className="site-shell"><Header /><AnimatePresence mode="wait"><PageFrame key={location.pathname}><Suspense fallback={<main className="page-width loading-state">Loading collection…</main>}><Routes location={location}><Route path="/" element={<Home />} /><Route path="/templates" element={<Templates />} /><Route path="/templates/:slug" element={<TemplateDetail />} /><Route path="/about" element={<About />} /><Route path="/contact" element={<Contact />} /><Route path="/terms" element={<Policy />} /><Route path="/privacy" element={<Policy />} /><Route path="*" element={<TemplateDetail />} /></Routes></Suspense><Footer /></PageFrame></AnimatePresence></div>
}
