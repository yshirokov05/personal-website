import { caseStudy } from '../content'
import './Updates.css'

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
