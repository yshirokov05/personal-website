import { useEffect, useState } from 'react'
import './Footer.css'

const COUNTED_KEY = 'visit-counted'

// Counts each browser session once, so refreshing or clicking around the page
// doesn't add extra visits. Automated browsers (tests, some bots) are only shown
// the total. Returns null if the counter isn't available, e.g. in local dev.
async function loadVisits() {
  let alreadyCounted = false
  try {
    alreadyCounted = sessionStorage.getItem(COUNTED_KEY) === '1'
  } catch {
    // Storage can be blocked (some private modes); then every page load counts.
  }
  const shouldCount = !alreadyCounted && !navigator.webdriver
  if (shouldCount) {
    try { sessionStorage.setItem(COUNTED_KEY, '1') } catch { /* see above */ }
  }

  try {
    const res = await fetch('/api/visits', { method: shouldCount ? 'POST' : 'GET' })
    if (!res.ok) return null
    const { visits } = await res.json()
    return Number.isFinite(visits) ? visits : null
  } catch {
    return null
  }
}

export default function Footer() {
  const [visits, setVisits] = useState(null)

  useEffect(() => {
    let active = true
    loadVisits().then(count => { if (active) setVisits(count) })
    return () => { active = false }
  }, [])

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo">YS<span>.</span></span>
        <div className="footer__meta">
          {visits !== null && (
            <p className="footer__visits">
              <span aria-hidden="true" className="footer__visits-dot" />
              {visits.toLocaleString('en-US')} {visits === 1 ? 'visit' : 'visits'}
            </p>
          )}
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} Yury Shirokov. Built with React &amp; Vite.
          </p>
        </div>
      </div>
    </footer>
  )
}
