// ─────────────────────────────────────────────────────────────────────────────
// Visitor analytics in one place.
//
// Two tools listen here:
//   • Vercel Web Analytics (<Analytics /> in main.jsx): cookie-free page views,
//     referrers, countries and devices. Only collects once Web Analytics is
//     switched on for the project in the Vercel dashboard.
//   • Google Analytics 4: the same, plus age/gender/interest reports
//     (demographics) and click events. Loads only in production builds, and only
//     using the ID below (VITE_GA_MEASUREMENT_ID overrides it).
//
// Components call track('event_name', { ...details }) from this file, never a
// tool's own API, so every click event reaches both tools.
// ─────────────────────────────────────────────────────────────────────────────

import { track as vercelTrack } from '@vercel/analytics'

// The GA4 "Measurement ID" (looks like G-XXXXXXXXXX). It is public by design:
// it appears in the page source of every site that uses GA4.
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XTK23LTBNQ'

// Visitors who send Global Privacy Control (a browser "do not sell or share"
// signal that California law asks sites to honor) and automated browsers are
// not sent to Google.
function gaAllowed() {
  if (!import.meta.env.PROD || !GA_MEASUREMENT_ID) return false
  if (typeof navigator === 'undefined') return false
  return !navigator.globalPrivacyControl && !navigator.webdriver
}

export function initAnalytics() {
  if (!gaAllowed()) return

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID)

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)
}

export function track(name, props = {}) {
  vercelTrack(name, props)
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, props)
  }
}
