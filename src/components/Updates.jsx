import './Updates.css'

const updates = [
  {
    date: 'August 2026',
    entries: [
      {
        project: 'PerfinLab',
        title: 'Apple-Inspired Redesign',
        description:
          'Replaced 770 hardcoded blue/indigo utility classes scattered across 41 components with a single light/dark design-token system, then rebuilt the landing page around five real questions a beginner asks (“Am I doing okay?”, “What will I owe in April?”) instead of a generic SaaS template, each answered with a live figure from the real app.',
        tags: ['React', 'Design System', 'UI'],
      },
      {
        project: 'PerfinLab',
        title: 'Frontend Decomposition, Finished',
        description:
          'Closed out the App.js breakup started in July: migrated the build from Create React App to Vite, then removed the remaining prop-drilling (Dashboard alone took 20 props) by moving every tab onto two React contexts, verified with a differential probe comparing every API call and rendered screen against the pre-refactor app.',
        tags: ['React', 'Vite', 'Architecture'],
      },
      {
        project: 'PerfinLab',
        title: 'Fixing the Conversion Funnel',
        description:
          'A non-premium user hitting the bank-connect paywall used to see a dead-end error with no way to subscribe; it now shows a real upgrade screen wired to Stripe checkout. Also shipped a shareable /demo link for the no-signup sample-data experience, made it the primary landing-page call to action, and added the analytics events needed to actually measure the funnel.',
        tags: ['React', 'Growth', 'Stripe'],
      },
      {
        project: 'PerfinLab',
        title: 'Data & Account Integrity',
        description:
          'Closed a gap where a manually corrected holding fixed the per-position numbers but left the account-level Total Return still dividing by Plaid’s wrong basis, turned on real step-up enforcement for the existing 2FA (a code is now required for destructive actions like a full data wipe or bank unlink), and fixed the backend never calling Plaid’s item-removal endpoint on disconnect — which had been leaving cancelled bank connections billing forever.',
        tags: ['Python', 'Plaid API', 'Finance'],
      },
      {
        project: 'PerfinLab',
        title: 'QA Pass: Real Bugs Found by Looking',
        description:
          'A dedicated visual QA pass caught a $450K house counting as “Financial Services” income in the allocation chart, every expense rendering in the gain (green) color, tax totals displaying three decimal places, and Sign Out silently failing to sign anyone out — each traced to root cause and fixed rather than patched around.',
        tags: ['Bugfix', 'QA', 'React'],
      },
      {
        project: 'PerfinLab',
        title: 'CI & Monitoring Cleanup',
        description:
          'Every pull request now deploys to its own preview URL so a visual change can be reviewed as a live page instead of a JSX diff, fixed a workflow bug that was reporting healthy dependency-update PRs as broken, and silenced noisy (and harmless) ETF-pricing 404s that were burying real errors in the error monitor.',
        tags: ['DevOps', 'CI', 'Observability'],
      },
    ],
  },
  {
    date: 'Late July 2026',
    entries: [
      {
        project: 'PerfinLab',
        title: 'Net Worth Trend, Fixed for Real',
        description:
          'The dashboard’s net worth trend line was quietly plotting portfolio value, so selling stock to pay down a loan — net-worth-neutral — rendered as a crash. Rebuilt it on a new daily net-worth snapshot series, then restored a long growth line via a fixed-basket historical reconstruction so a past sale can never reintroduce the cliff.',
        tags: ['Finance', 'Python', 'Data Viz'],
      },
      {
        project: 'PerfinLab',
        title: 'Security & Data-Loss Audit',
        description:
          'A full audit surfaced and fixed a real data-loss bug (deleting a transaction silently undid itself on the next read), a tax bug understating liability by 25–33% of insurance premiums for every user, open Firestore rules that let a client fabricate its own subscription status, and several rate-limit gaps on bank-sync endpoints.',
        tags: ['Security', 'Python', 'Bugfix'],
      },
      {
        project: 'PerfinLab',
        title: 'Manual Overrides for Bad Bank Data',
        description:
          'Added inline share-count correction alongside the existing cost-basis override, for the cases where Plaid just reports a position wrong and never self-corrects, then closed the follow-up gap where a corrected holding read right in the table while the account-level Total Return percentage still divided by the original wrong number.',
        tags: ['Finance', 'Python', 'React'],
      },
      {
        project: 'PerfinLab',
        title: 'App.js Decomposition, Part 1',
        description:
          'Extracted the data layer out of the app’s 1,300-line, 43-hook god component into a dedicated API client and seven domain hooks, cutting App.js to 680 lines with zero direct axios calls — verified with a differential browser probe comparing every API call and rendered tab against the pre-refactor app.',
        tags: ['React', 'Architecture', 'Refactor'],
      },
      {
        project: 'PerfinLab',
        title: 'Test Coverage: 55 to 247',
        description:
          'Shipped the backend’s first tests beyond pure math — serializers, Plaid-to-model mapping, route auth/validation — then extended coverage to the three biggest Firestore-backed routes (net worth, portfolio save, Stripe webhook), all offline with no emulator needed. Immediately caught a real crash-on-sync bug that had been live since the backend blueprint split.',
        tags: ['Testing', 'Python', 'Reliability'],
      },
      {
        project: 'PerfinLab',
        title: 'Accessibility Pass',
        description:
          'WCAG AA contrast fixes and keyboard/aria support across Edit Portfolio, the legal pages, and the sign-in flow, followed by an automated audit of the landing page that found real screens rendering near-black text on a near-black background — a dark-mode class that never got attached to the pre-auth page wrapper.',
        tags: ['a11y', 'WCAG', 'React'],
      },
      {
        project: 'PerfinLab',
        title: 'Cost-Basis Bug + Inline-Edit Fixes',
        description:
          'QA on the launch click-through found a new manual asset saving its cost basis 10x too high (a per-share vs. total-cost mixup); fixed the underlying form bug and made the inline-edit pencil icons on the Investments table actually visible instead of invisible until hover.',
        tags: ['Bugfix', 'React', 'Finance'],
      },
    ],
  },
  {
    date: 'July 2026',
    entries: [
      {
        project: 'PerfinLab',
        title: 'Backend Architecture Overhaul',
        description:
          'Split the 3,800-line api.py monolith into 7 domain blueprints with shared route helpers, flipped every route to a stricter auth decorator, and fixed a sync-breaking regression that surfaced right after the split.',
        tags: ['Python', 'Flask', 'Architecture'],
      },
      {
        project: 'PerfinLab',
        title: 'AI Analyst Gets Real Web Search',
        description:
          "Gave the AI Analyst chat live web search instead of static knowledge, so it can answer questions about current rates and offers with real citations, and gave margin loans their own AI summary instead of reusing the credit-card one.",
        tags: ['AI', 'Claude API', 'Finance'],
      },
      {
        project: 'PerfinLab',
        title: 'Portfolio & Tax Correctness Fixes',
        description:
          'Fixed portfolio trend cratering on sell-offs and a silent bug that broke period returns and tax-loss harvesting on every sync, then added owner-facing backfill diagnostics (persisted to Firestore, on-demand endpoint, real error surfacing) to catch the next one faster.',
        tags: ['Finance', 'Python', 'Bugfix'],
      },
      {
        project: 'PerfinLab',
        title: 'Production Observability & Reliability',
        description:
          'Enabled Sentry error monitoring across frontend and backend, turned on Dependabot for automated dependency updates plus uptime monitoring, enabled Firestore backups, and quieted noisy false-alarm errors from stale price lookups on cash-like assets.',
        tags: ['Observability', 'Reliability', 'DevOps'],
      },
      {
        project: 'PerfinLab',
        title: 'Account Management & Personalization',
        description:
          'Renamed debts and cards now keep their custom name across future bank syncs instead of reverting, theme preference (dark mode + accent) persists to your account instead of resetting, and the premium panel surfaces every source of premium access with per-user revoke.',
        tags: ['React', 'Firebase', 'UX'],
      },
      {
        project: 'PerfinLab',
        title: 'Settings & Visualization Polish',
        description:
          'Fixed hard-to-read dark-mode colors in Settings, added typed inputs and editable ages to the Visualizations projection simulators, hid the Morning Brief email card until it is actually configured, and fixed a transparent-corner artifact in the app icon.',
        tags: ['React', 'UI', 'UX'],
      },
      {
        project: 'PerfinLab',
        title: 'Cost & Process Tooling',
        description:
          'Scaled the backend Cloud Function to zero when idle to cut standing hosting cost, and added a set of AI-assisted development playbooks to the repo (safe-shipping workflow, a money-math correctness checklist, and changelog generation) to keep future changes safe and consistent.',
        tags: ['DevOps', 'Cost', 'Tooling'],
      },
    ],
  },
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
