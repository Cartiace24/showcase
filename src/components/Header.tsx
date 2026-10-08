import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Templates', to: '/templates' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="wordmark" aria-label="Templates by Isaiah home" onClick={() => setOpen(false)}>
          <span className="wordmark-dot" />TEMPLATES BY ISAIAH<span className="wordmark-period">.</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => <NavLink key={link.to} to={link.to} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>{link.label}</NavLink>)}
        </nav>
        <button className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map((link) => <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>{link.label}</NavLink>)}</nav>}
    </header>
  )
}
