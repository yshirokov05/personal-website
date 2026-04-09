import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__inner container">
        <p className="section-label">Hello, I'm</p>
        <h1 className="hero__name">Yury Shirokov</h1>
        <h2 className="hero__title">
          Economics @ <span>UC Berkeley</span> · Developer
        </h2>
        <p className="hero__bio">
          I build performant web applications, trading tools, and AI-powered
          systems — focused on clean code and real-world impact.
        </p>
        <div className="hero__cta">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
        </div>

        <div className="hero__scroll-hint" aria-hidden="true">
          <span />
        </div>
      </div>

      <div className="hero__glow" aria-hidden="true" />
    </section>
  )
}
