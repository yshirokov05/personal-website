import { track } from '@vercel/analytics'
import { caseStudy } from '../content'
import './Analysis.css'

const formatCount = new Intl.NumberFormat('en-US').format
const formatRate = rate => `${(rate * 100).toFixed(1)}%`

export default function Analysis() {
  const { funnel } = caseStudy
  const top = funnel[0].sessions
  // The step that loses the most sessions gets emphasized in the chart.
  const losses = funnel.map((step, i) => (i === 0 ? 0 : funnel[i - 1].sessions - step.sessions))
  const biggestLoss = losses.indexOf(Math.max(...losses))

  return (
    <section id="analysis">
      <div className="container">
        <p className="section-label">Case study</p>
        <h2 className="section-title">Analysis</h2>
        <p className="analysis__intro">{caseStudy.intro}</p>

        <article className="analysis-card">
          <span className="analysis-card__eyebrow">{caseStudy.eyebrow}</span>
          <h3 className="analysis-card__title">{caseStudy.title}</h3>

          <div className="analysis-card__grid">
            <dl className="analysis-card__story">
              {caseStudy.story.map(item => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.text}</dd>
                </div>
              ))}
            </dl>

            <figure className="funnel">
              <figcaption>
                Sessions reaching each step, out of {formatCount(caseStudy.totalSessions)}
              </figcaption>
              <ol>
                {funnel.map((step, i) => {
                  const rate = i === 0 ? null : step.sessions / funnel[i - 1].sessions
                  const detail = rate === null
                    ? `${step.stage}: ${formatCount(step.sessions)} sessions`
                    : `${step.stage}: ${formatCount(step.sessions)} sessions, ${formatRate(rate)} of the previous step (${formatCount(losses[i])} lost)`
                  return (
                    <li
                      key={step.stage}
                      className={i === biggestLoss ? 'funnel__row funnel__row--emphasis' : 'funnel__row'}
                      title={detail}
                    >
                      <span className="funnel__stage">{step.stage}</span>
                      <span className="funnel__track" aria-hidden="true">
                        <span className="funnel__bar" style={{ width: `${(step.sessions / top) * 100}%` }} />
                      </span>
                      <span className="funnel__value">{formatCount(step.sessions)}</span>
                      {rate !== null && (
                        <span className="funnel__rate">
                          {formatRate(rate)} of previous step
                          {i === biggestLoss && ' · biggest loss'}
                        </span>
                      )}
                    </li>
                  )
                })}
              </ol>
            </figure>
          </div>

          <ul className="analysis-card__tags" aria-label="Tools used">
            {caseStudy.tags.map(tag => <li key={tag}>{tag}</li>)}
          </ul>
        </article>

        <a
          className="analysis__link"
          href={caseStudy.link}
          target="_blank"
          rel="noreferrer"
          onClick={() => track('project_link_click', { project: 'E-commerce Funnel Analysis', type: 'case_study' })}
        >
          See the SQL and notebook <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}
