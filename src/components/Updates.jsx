import './Updates.css'

const updates = [
  {
    date: 'Apr 2026',
    project: 'FHQ',
    title: 'Stripe Integration — Phase 6',
    description:
      'Integrated Stripe for subscription billing in Financial Headquarters, enabling payment flows, webhook handling, and plan management.',
    tags: ['Stripe', 'Payments', 'Flask', 'React'],
  },
  {
    date: 'Apr 2026',
    project: 'FHQ',
    title: 'Bug Fixes',
    description:
      'Resolved several issues across the FHQ codebase including edge cases in the tax module and UI glitches in the dashboard.',
    tags: ['Bug Fix'],
  },
]

export default function Updates() {
  return (
    <section id="updates">
      <div className="container">
        <p className="section-label">What I'm building now</p>
        <h2 className="section-title">Latest Developments</h2>

        <div className="updates__feed">
          {updates.map((u, i) => (
            <div key={i} className="update-item">
              <div className="update-item__meta">
                <span className="update-item__date">{u.date}</span>
                <span className="update-item__project">{u.project}</span>
              </div>
              <div className="update-item__body">
                <h3 className="update-item__title">{u.title}</h3>
                <p className="update-item__desc">{u.description}</p>
                <ul className="update-item__tags">
                  {u.tags.map(t => <li key={t}>{t}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
