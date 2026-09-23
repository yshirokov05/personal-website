import './Updates.css'

const caseStudy = {
  title: 'Safer portfolio edits at PerfinLab',
  problem:
    'Guests shared one demo portfolio, so an anonymous save could alter its sample data. Manual cash, savings, checking, and housing values could also be saved blank, zero, or negative.',
  change:
    'Made the guest demo read-only, required sign-in for portfolio writes, and added validation before manual values can be saved.',
  result:
    'Confirmed the validation in production with a synthetic QA entry. An isolated browser harness verified persistence after reload and stale-save conflict handling.',
  tags: ['Access Control', 'Validation', 'QA'],
}

export default function Updates() {
  return (
    <section id="updates">
      <div className="container">
        <p className="section-label">Selected case study</p>
        <h2 className="section-title">Recent product work</h2>
        <p className="updates__intro">
          A recent PerfinLab improvement to protect shared demo data and make portfolio edits more reliable.
        </p>

        <div className="updates__feed">
          <article className="update-item">
            <span className="update-item__project">PerfinLab · September 2026</span>
            <h3 className="update-item__title">{caseStudy.title}</h3>
            <dl className="update-item__story">
              <div><dt>Problem</dt><dd>{caseStudy.problem}</dd></div>
              <div><dt>Change</dt><dd>{caseStudy.change}</dd></div>
              <div><dt>Result</dt><dd>{caseStudy.result}</dd></div>
            </dl>
            <ul className="update-item__tags">
              {caseStudy.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
          </article>
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
