import './Projects.css'

const projects = [
  {
    title: 'Financial Headquarters (FHQ)',
    description:
      'Serverless full-stack finance app with Plaid API sync, a 50-state tax module at 98%+ accuracy, Gemini AI wealth insights, and distributed rate-limiting with dual-layer persistence.',
    tags: ['React', 'Flask', 'Firebase', 'Plaid API'],
    link: 'https://personal-finance-app-18cbc.web.app/',
    repo: 'https://github.com/yshirokov05/personal-finance-app-pfa',
  },
  {
    title: 'Vanguard RL',
    description:
      'Multiplayer game AI agent with a cross-process C# ↔ PyTorch bridge over UDP at 10Hz, a ResNet-18 + 14D fusion model, and an 8-way parallel bot swarm achieving 200 SPS over 1.6M+ timesteps.',
    tags: ['Python', 'C#', 'PyTorch', 'Stable-Baselines3'],
    link: null,
    repo: 'https://github.com/yshirokov05/rust-rl-agent',
  },
  {
    title: 'Quantbot',
    description:
      'Hybrid options trading engine with a decoupled FastAPI backend, React telemetry dashboard, vectorized TA engine (EMAs, Bollinger Bands) in sub-millisecond ranges, and a PPO agent trained on QQQ options.',
    tags: ['Python', 'FastAPI', 'React', 'PyTorch'],
    link: null,
    repo: 'https://github.com/yshirokov05/trading-bot-etrade',
  },
  {
    title: 'E-commerce Funnel Analytics',
    description:
      'Analyzed 12M+ rows of Google Analytics data in BigQuery to build a multi-stage conversion funnel, identified a 15% mobile checkout drop-off, and validated a 5% lift via A/B test with two-proportion Z-tests.',
    tags: ['Python', 'BigQuery', 'SQL', 'Pandas'],
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

        <div className="projects__grid">
          {projects.map(p => (
            <article key={p.title} className="project-card">
              <div className="project-card__top">
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.description}</p>
              </div>
              <div className="project-card__bottom">
                <ul className="project-card__tags">
                  {p.tags.map(t => <li key={t}>{t}</li>)}
                </ul>
                <div className="project-card__links">
                  {p.repo && (
                    <a href={p.repo} className="project-card__link" aria-label="GitHub repo" target="_blank" rel="noreferrer">
                      <GithubIcon /> Repo
                    </a>
                  )}
                  {p.link && (
                    <a href={p.link} className="project-card__link" aria-label="Live demo" target="_blank" rel="noreferrer">
                      <ExternalIcon /> Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
