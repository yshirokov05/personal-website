import { track } from '@vercel/analytics'
import './Projects.css'

const projects = [
  {
    title: 'PerfinLab',
    logo: '/perfinlab-logo.png',
    screenshot: '/perfinlab-screenshot.png',
    description:
      'Built a full-stack personal finance app that turns linked account data into cash-flow, tax, and financial-health guidance. It combines Plaid sync, 50-state tax projections, and AI-assisted analysis on a Flask/Firebase backend.',
    tags: ['React', 'Flask', 'Firebase', 'Plaid API', 'Claude API'],
    highlights: ['50-state tax engine', '0–100 health score', 'Live bank sync'],
    link: 'https://perfinlab.com/',
    repo: null,
    privateRepo: true,
    featured: true,
  },
  {
    title: 'Vanguard RL',
    description:
      'Built a reinforcement-learning prototype that connects a Rust game server to a Gymnasium/PPO training loop through a versioned JSON bridge. Deterministic resets, action acknowledgments, and automated smoke tests make experiments reproducible.',
    tags: ['Python', 'C#', 'PyTorch', 'Stable-Baselines3'],
    highlights: ['Atomic JSON bridge', 'One-bot MVP', '13 passing tests'],
    link: null,
    repo: 'https://github.com/yshirokov05/rust-rl-agent',
  },
  {
    title: 'Quantbot',
    description:
      'Built an options-first paper-trading system: deterministic indicators screen closed 3-minute candles against a 15-minute trend, then Claude reviews actionable setups and selects a liquid call or put. A FastAPI backend and React dashboard expose scans, positions, trade history, and risk controls.',
    tags: ['Python', 'FastAPI', 'React', 'Claude API'],
    highlights: ['Indicator-based screening', 'Claude-reviewed setups', 'Paper trading with risk limits'],
    link: null,
    repo: null,
    privateRepo: true,
  },
  {
    title: 'E-commerce Funnel Analytics',
    description:
      'Analyzed 12M+ hit-level records from the public Google Analytics sample in BigQuery, built session-level funnel and engagement metrics, and compared conversion behavior by device. The largest funnel drop-off was from product view to add-to-cart.',
    tags: ['Python', 'BigQuery', 'SQL', 'Pandas'],
    highlights: ['12M+ hit-level records', 'Session-level funnel', 'Device segmentation'],
    link: null,
    repo: 'https://github.com/yshirokov05/product-analytics-case-study',
  },
]

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">What I've built</p>
        <h2 className="section-title">Projects</h2>
        <p className="projects__intro">
          Selected work spanning consumer finance, machine learning, and product analytics.
          Each project began with a concrete problem and was built through implementation,
          measurement, and iteration.
        </p>

        <div className="projects__grid">
          {projects.map(p => (
            <article key={p.title} className={`project-card${p.featured ? ' project-card--featured' : ''}`}>
              <div className="project-card__media">
                {p.screenshot ? (
                  <img
                    src={p.screenshot}
                    alt={`${p.title} app screenshot`}
                    className="project-card__screenshot"
                    loading="lazy"
                  />
                ) : (
                  <div className="project-card__signal">
                    <span className="project-card__signal-label">Project signals</span>
                    <ul aria-label={`${p.title} selected results`}>
                      {p.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
                    </ul>
                  </div>
                )}
              </div>
              <div className="project-card__body">
                <div className="project-card__top">
                  <div className="project-card__head">
                    {p.logo && <img src={p.logo} alt="" className="project-card__logo" />}
                    <div>
                      {p.featured && <span className="project-card__eyebrow">Flagship case study</span>}
                      <h3 className="project-card__title">{p.title}</h3>
                    </div>
                  </div>
                  <p className="project-card__desc">{p.description}</p>
                  {p.featured && (
                    <ul className="project-card__highlights" aria-label="PerfinLab selected capabilities">
                      {p.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
                    </ul>
                  )}
                </div>
                <div className="project-card__bottom">
                  <ul className="project-card__tags">
                    {p.tags.map(t => <li key={t}>{t}</li>)}
                  </ul>
                  <div className="project-card__links">
                    {p.repo && (
                      <a
                        href={p.repo}
                        className="project-card__link"
                        aria-label={`${p.title} GitHub repository`}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => track('project_link_click', { project: p.title, type: 'repo' })}
                      >
                        <GithubIcon /> View code
                      </a>
                    )}
                    {p.privateRepo && (
                      <span className="project-card__private">Private codebase</span>
                    )}
                    {p.link && (
                      <a
                        href={p.link}
                        className="project-card__link"
                        aria-label={`${p.title} live demo`}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => track('project_link_click', { project: p.title, type: 'demo' })}
                      >
                        <ExternalIcon /> Visit product
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
