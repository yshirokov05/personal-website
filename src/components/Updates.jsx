import './Updates.css'

const updates = [
  {
    date: 'April 2026',
    entries: [
      {
        project: 'FYMO',
        title: 'Rebrand — Wealthstack → FYMO',
        description:
          'Rebranded the app from Wealthstack to FYMO with a new domain (projectfymo.com), updated favicon, GA4 analytics integration, and sitemap.xml for Google Search Console indexing.',
        tags: ['Branding', 'SEO', 'Analytics'],
      },
      {
        project: 'FYMO',
        title: 'Landing Page',
        description:
          'Replaced the bare login screen with a full marketing landing page, giving FYMO a proper public-facing presence before users sign in.',
        tags: ['React', 'UI', 'Marketing'],
      },
      {
        project: 'FYMO',
        title: 'Visualizations Overhaul',
        description:
          'Rebuilt the Visualizations tab with a debt accelerator, compound savings projections, portfolio sparkline, and improved navigation. Added empty states for investments and goals.',
        tags: ['React', 'Data Viz', 'Firebase'],
      },
      {
        project: 'FYMO',
        title: 'Transaction Improvements',
        description:
          'Added transaction search and filtering, CSV export, overage alerts, custom category support, and ignored transaction styling.',
        tags: ['React', 'Flask', 'UX'],
      },
      {
        project: 'FYMO',
        title: 'Stripe Subscription & Customer Portal',
        description:
          'Shipped Stripe-powered subscription billing with a self-serve customer portal for plan management and webhook handling for lifecycle events.',
        tags: ['Stripe', 'Payments', 'Flask'],
      },
      {
        project: 'FYMO',
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
