import './Updates.css'

const updates = [
  {
    date: 'Late June – July 2026',
    entries: [
      {
        project: 'PerfinLab',
        title: 'Rebrand — FYMO → PerfinLab',
        description:
          'Rebranded the app to PerfinLab on its own domain (perfinlab.com): fixed the Google OAuth redirect that broke after the switch, shipped a full-bleed logo (P + rising arrow) across favicons and app icons, and swept the docs and backend touchpoints for the new name.',
        tags: ['Branding', 'OAuth', 'React'],
      },
      {
        project: 'PerfinLab',
        title: 'Public Learn Hub',
        description:
          'Shipped a public Learn hub with three educational articles, reachable whether or not a visitor is signed in, plus a landing-page "Learn" teaser section pointing to it.',
        tags: ['React', 'SEO', 'Content'],
      },
      {
        project: 'PerfinLab',
        title: 'Landing & Mobile Polish',
        description:
          'Added a "Why PerfinLab exists" mission section and an honest "built in the open / active development" disclaimer to the landing page, and fixed clipped asset names on mobile with a stacked card layout.',
        tags: ['React', 'UX', 'Mobile'],
      },
      {
        project: 'PerfinLab',
        title: 'Dashboard Reliability Fixes',
        description:
          'Fixed a bug where a premium-check hiccup after Google login could blank the whole dashboard to $0 net worth and Free tier, made app owners always resolve to premium independent of the whitelist doc, and sped up net-worth loads by reusing already-fetched prices behind an instant-render cache.',
        tags: ['Firebase', 'Bugfix', 'Performance'],
      },
      {
        project: 'PerfinLab',
        title: 'SEO: Prerendered Public Pages',
        description:
          'Added a build step that bakes real per-page titles, meta descriptions, Open Graph/Twitter tags, and crawlable body copy into static HTML for the homepage, Learn hub and articles, privacy, and terms — so crawlers and link unfurlers see actual content instead of one empty root div.',
        tags: ['SEO', 'Open Graph', 'Performance'],
      },
      {
        project: 'PerfinLab',
        title: 'Production Reliability Hardening',
        description:
          'Added Sentry-routed alerting for previously-silent failures, a dashboard tripwire that flags a $0-net-worth regression for users with real holdings, a deep health check that verifies Firestore connectivity, and an always-warm Cloud Function instance to kill cold-start lag on the first ad click.',
        tags: ['Observability', 'Reliability', 'Firebase'],
      },
      {
        project: 'PerfinLab',
        title: 'AI Advisor Cleanup',
        description:
          'Removed a leftover AI advisor tool that was returning hardcoded placeholder data instead of live prices and offers, deleted ~400 lines of dead advisor code behind it, and trimmed the backend dependency list from a 90-line pip-freeze dump down to the 15 packages actually used directly.',
        tags: ['AI', 'Code Quality', 'Python'],
      },
    ],
  },
  {
    date: 'June 2026',
    entries: [
      {
        project: 'PerfinLab',
        title: 'HYSA APY Insights',
        description:
          'Added high-yield savings tracking with AI-estimated APYs and manual entry, surfaced directly on each cash account row so idle cash is easy to evaluate.',
        tags: ['AI', 'React', 'Finance'],
      },
      {
        project: 'PerfinLab',
        title: 'Credit Card Intelligence',
        description:
          'Built a credit-card summary with side-by-side comparison, detailed card specs, and an option to specify the exact card for precise rewards and fee data.',
        tags: ['React', 'Data', 'UX'],
      },
      {
        project: 'PerfinLab',
        title: 'Email-Based Premium & Comp Panel',
        description:
          'Made premium entitlements follow a user across login methods by keying off email, and shipped an owner self-serve panel to grant or revoke complimentary premium by email.',
        tags: ['Auth', 'Flask', 'Firebase'],
      },
      {
        project: 'PerfinLab',
        title: 'Snapshot-Based Returns Engine',
        description:
          'Rebuilt portfolio period returns on reconstructed historical snapshots (Vanguard-style $ and % gain), fixed N/A periods via Yahoo Finance historical prices, handled short option positions, added broker realized-gains overrides for ground-truth accuracy, and excluded transfers from spending totals.',
        tags: ['Finance', 'Python', 'Yahoo Finance'],
      },
      {
        project: 'PerfinLab',
        title: 'Security & Accessibility Hardening',
        description:
          'Shipped an XSS fix, security headers, CORS hardening, and MIME validation, patched dependency CVEs, and added modal focus traps, Escape handling, and a WCAG 2.1 AA pass across high-traffic screens.',
        tags: ['Security', 'a11y', 'WCAG'],
      },
      {
        project: 'PerfinLab',
        title: 'Reliability & Compliance',
        description:
          'Added Sentry error monitoring, daily Firestore backups to GCS, and a financial-math unit suite gating CI, plus per-IP rate limiting, optimistic concurrency on saves, a CCPA privacy/terms rewrite, and CA auto-renewal billing disclosure.',
        tags: ['Observability', 'Compliance', 'CI'],
      },
      {
        project: 'PerfinLab',
        title: 'Mobile & Brand Polish',
        description:
          'Made the Industry Allocation donut responsive on mobile, added real FYMO app icons and legible cash-account names, improved Plaid account selection and the onboarding flow, and refined landing-page trust copy.',
        tags: ['UI', 'Mobile', 'Plaid API'],
      },
    ],
  },
  {
    date: 'May 2026',
    entries: [
      {
        project: 'PerfinLab',
        title: 'AI Stack: Gemini → Claude',
        description:
          'Migrated the entire AI stack from Google Gemini to the Claude API — wealth insights, the AI Analyst, and paystub/document extraction now run on Claude, with SSE-streamed responses and a Clear Chat control.',
        tags: ['Claude API', 'AI', 'Python'],
      },
      {
        project: 'PerfinLab',
        title: '2FA & Morning Brief (v1.6–v1.7)',
        description:
          'Shipped two-factor authentication, a scheduled morning-brief email via Resend, a Financial Health Score, and a dividend & earnings calendar.',
        tags: ['Security', 'React', 'Flask'],
      },
      {
        project: 'PerfinLab',
        title: 'Data Integrity & Advanced Tools',
        description:
          'Added atomic writes with an audit log, milestone tracking, tax-loss harvesting, capital-gains tax integration, and lazy-loaded routes for faster page loads.',
        tags: ['Firebase', 'Finance', 'Performance'],
      },
      {
        project: 'PerfinLab',
        title: 'Return-Math Overhaul',
        description:
          'Replaced a broken Modified Dietz calculation with a value-weighted current-basket return, fixed benchmark anchoring and cash-flow income, and surfaced honest N/A states when a period can’t be computed.',
        tags: ['Finance', 'Python', 'Data Viz'],
      },
      {
        project: 'PerfinLab',
        title: 'UI Revamp & Dark Mode',
        description:
          'Refined the dashboard with minimal cards, cleaner donut charts, a sorted category breakdown, and tax-math transparency, plus a full dark-mode sweep across components.',
        tags: ['React', 'UI', 'CSS'],
      },
      {
        project: 'PerfinLab',
        title: 'SEO & Marketing Kit',
        description:
          'Shipped a punchier SERP listing with Open Graph images and JSON-LD structured data, a richer sitemap, auto-generated OG PNGs on deploy, and an Instagram marketing playbook; rewrote the landing-page CTA copy.',
        tags: ['SEO', 'Marketing', 'Open Graph'],
      },
    ],
  },
  {
    date: 'April 2026',
    entries: [
      {
        project: 'PerfinLab',
        title: 'Rebrand — Wealthstack → FYMO',
        description:
          'Rebranded the app from Wealthstack to FYMO with a new domain (projectfymo.com), updated favicon, GA4 analytics integration, and sitemap.xml for Google Search Console indexing.',
        tags: ['Branding', 'SEO', 'Analytics'],
      },
      {
        project: 'PerfinLab',
        title: 'Landing Page',
        description:
          'Replaced the bare login screen with a full marketing landing page, giving FYMO a proper public-facing presence before users sign in.',
        tags: ['React', 'UI', 'Marketing'],
      },
      {
        project: 'PerfinLab',
        title: 'Visualizations Overhaul',
        description:
          'Rebuilt the Visualizations tab with a debt accelerator, compound savings projections, portfolio sparkline, and improved navigation. Added empty states for investments and goals.',
        tags: ['React', 'Data Viz', 'Firebase'],
      },
      {
        project: 'PerfinLab',
        title: 'Transaction Improvements',
        description:
          'Added transaction search and filtering, CSV export, overage alerts, custom category support, and ignored transaction styling.',
        tags: ['React', 'Flask', 'UX'],
      },
      {
        project: 'PerfinLab',
        title: 'Stripe Subscription & Customer Portal',
        description:
          'Shipped Stripe-powered subscription billing with a self-serve customer portal for plan management and webhook handling for lifecycle events.',
        tags: ['Stripe', 'Payments', 'Flask'],
      },
      {
        project: 'PerfinLab',
        title: 'Portfolio Returns & Show Math',
        description:
          'Fixed period returns using portfolio snapshots across institutions, added weighted-ticker fallbacks, and shipped Show Math panels on dashboard summary cards for full transparency.',
        tags: ['Finance', 'Plaid API', 'React'],
      },
    ],
  },
]

export default function Updates() {
  return (
    <section id="updates">
      <div className="container">
        <p className="section-label">What I'm building now</p>
        <h2 className="section-title">Latest Developments</h2>

        <div className="updates__feed">
          {updates.map(group => (
            <div key={group.date} className="updates__group">
              <div className="updates__date-header">
                <span>{group.date}</span>
              </div>
              <div className="updates__entries">
                {group.entries.map((e, i) => (
                  <div key={i} className="update-item">
                    <span className="update-item__project">{e.project}</span>
                    <h3 className="update-item__title">{e.title}</h3>
                    <p className="update-item__desc">{e.description}</p>
                    <ul className="update-item__tags">
                      {e.tags.map(t => <li key={t}>{t}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
