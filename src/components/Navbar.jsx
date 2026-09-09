import { useState, useEffect } from 'react'
import { track } from '@vercel/analytics'
import './Navbar.css'

const links = ['About', 'Projects', 'Updates', 'Skills', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    const closeOnEscape = event => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('scroll', handler)
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      window.removeEventListener('scroll', handler)
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} aria-label="Primary">
      <div className="navbar__inner container">
        <a href="#hero" className="navbar__logo">YS<span>.</span></a>

        <ul
          id="primary-navigation"
          className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}
        >
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{l}</a>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          className="navbar__resume"
          target="_blank"
          rel="noreferrer"
          onClick={() => track('resume_download')}
        >
          Resume
        </a>

        <button
          className="navbar__burger"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
