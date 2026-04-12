import './Updates.css'

const updates = [
  {
    date: 'April 2026',
    entries: [
      {
        project: 'FHQ',
        title: 'Stripe Integration — Phase 6',
        description:
          'Integrated Stripe for subscription billing in Financial Headquarters, enabling payment flows, webhook handling, and plan management.',
        tags: ['Stripe', 'Payments', 'Flask', 'React'],
      },
      {
        project: 'FHQ',
        title: 'Bug Fixes',
        description:
          'Resolved several issues across the FHQ codebase including edge cases in the tax module and UI glitches in the dashboard.',
        tags: ['Bug Fix'],
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
