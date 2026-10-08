import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return <footer className="site-footer"><div className="footer-top"><Link to="/" className="wordmark" aria-label="Templates by Isaiah home"><span className="wordmark-dot" />TEMPLATES BY ISAIAH<span className="wordmark-period">.</span></Link><p>A small collection of thoughtful portfolio websites.</p><nav aria-label="Footer navigation"><Link to="/templates">Templates</Link><Link to="/about">About</Link><Link to="/contact">Contact</Link><a href="https://github.com" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={12} /></a><Link to="/terms">Terms</Link><Link to="/privacy">Privacy</Link></nav></div><div className="footer-bottom"><span>Independent templates, made with care.</span><span>© {new Date().getFullYear()} Templates</span></div></footer>
}
