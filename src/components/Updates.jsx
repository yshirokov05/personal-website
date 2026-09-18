import './Updates.css'

const updates = [
  {
    title: 'Rebuilt the product around real user questions',
    problem: 'The landing page looked like a generic SaaS template and the interface carried hundreds of hardcoded color utilities.',
    change: 'Introduced a shared light/dark token system and reorganized the experience around five questions a new user actually asks.',
    result: 'A clearer product story and one maintainable visual system across 41 components.',
    tags: ['Product', 'React', 'Design System'],
  },
  {
    title: 'Removed a dead end in the upgrade funnel',
    problem: 'Users who reached bank connect without premium access saw an error but had no path forward.',
    change: 'Added a real upgrade screen, connected it to Stripe checkout, and made the no-signup demo shareable.',
    result: 'Every blocked user now has a clear next action, with analytics events to measure conversion.',
    tags: ['Growth', 'Stripe', 'Analytics'],
  },
  {
    title: 'Finished the frontend architecture overhaul',
    problem: 'Core screens depended on heavy prop-drilling, including a Dashboard receiving 20 props.',
    change: 'Migrated to Vite and moved each tab onto two focused React contexts.',
    result: 'A smaller, easier-to-change application verified against the pre-refactor behavior.',
    tags: ['Architecture', 'Vite', 'React'],
  },
  {
    title: 'Hardened account and financial-data integrity',
    problem: 'Corrected holdings could still leave account-level returns wrong, and sensitive actions lacked enforced step-up verification.',
    change: 'Fixed return aggregation, enforced 2FA for destructive actions, and completed Plaid item removal on disconnect.',
    result: 'More trustworthy calculations, safer account controls, and no lingering disconnected-bank billing.',
    tags: ['Finance', 'Security', 'Plaid API'],
  },
  {
    title: 'Turned visual QA into production fixes',
    problem: 'A focused review found category, color, precision, and sign-out bugs that automated checks had missed.',
    change: 'Traced each issue to its source and fixed the underlying data or UI behavior.',
    result: 'Corrected allocation, expense, tax, and authentication experiences across the product.',
    tags: ['QA', 'Bugfix', 'Accessibility'],
  },
]

export default function Updates() {
  return (
    <section id="updates">
      <div className="container">
        <p className="section-label">Build log</p>
        <h2 className="section-title">Recent product work</h2>
        <p className="updates__intro">
          A concise look at the problems I found, the changes I shipped, and what improved.
        </p>

        <div className="updates__feed">
          {updates.map(update => (
            <article key={update.title} className="update-item">
              <span className="update-item__project">PerfinLab · August 2026</span>
              <h3 className="update-item__title">{update.title}</h3>
              <dl className="update-item__story">
                <div><dt>Problem</dt><dd>{update.problem}</dd></div>
                <div><dt>Change</dt><dd>{update.change}</dd></div>
                <div><dt>Result</dt><dd>{update.result}</dd></div>
              </dl>
              <ul className="update-item__tags">
                {update.tags.map(tag => <li key={tag}>{tag}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <a
          className="updates__history"
          href="https://perfinlab.com/"
          target="_blank"
          rel="noreferrer"
        >
          See PerfinLab in action <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}
