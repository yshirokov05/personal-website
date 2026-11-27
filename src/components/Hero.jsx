import { track } from '../analytics'
import { hero, perfinlabBetaLink } from '../content'
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__inner container">
        <div className="hero__copy">
          <h1 className="hero__name">Yury Shirokov</h1>
          <h2 className="hero__title">
            {hero.title} <span>- {hero.school}</span>
          </h2>
          <p className="hero__bio">{hero.bio}</p>
          <div className="hero__cta">
            <a href="#projects" className="btn btn-primary">View selected work</a>
            <a
              href="/resume.pdf"
              className="btn btn-outline"
              target="_blank"
              rel="noreferrer"
              onClick={() => track('resume_click', { location: 'hero' })}
            >
              View résumé
            </a>
            <a
              href={perfinlabBetaLink}
              className="btn btn-outline"
              onClick={() => track('beta_join_click', { location: 'hero' })}
            >
              Join the PerfinLab beta
            </a>
          </div>
        </div>

        <a
          className="hero__showcase"
          href="https://perfinlab.com/"
          target="_blank"
          rel="noreferrer"
          onClick={() => track('perfinlab_click', { location: 'hero' })}
          aria-label="Open PerfinLab, Yury's flagship personal finance project"
        >
          <div className="hero__showcase-topline">
            <span>Currently building</span>
            <span aria-hidden="true">↗</span>
          </div>
          <img
            src="/perfinlab-screenshot.png"
            alt="PerfinLab net worth summary card"
            width="1032"
            height="780"
          />
          <div className="hero__showcase-copy">
            <strong>PerfinLab</strong>
            <p>A personal finance app for net worth, cash flow, and taxes, with the math behind every number.</p>
            <ul aria-label="Selected PerfinLab capabilities">
              <li>Bank sync</li>
              <li>50-state tax estimate</li>
              <li>AI Analyst</li>
            </ul>
          </div>
        </a>

        <div className="hero__scroll-hint" aria-hidden="true">
          <span />
        </div>
      </div>

      <div className="hero__glow" aria-hidden="true" />
    </section>
  )
}
