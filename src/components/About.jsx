import './About.css'

const facts = [
  { label: 'Based in', value: 'San Jose, CA' },
  { label: 'Education', value: 'Economics at UC Berkeley' },
  { label: 'Work', value: 'Personal Trainer' },
  { label: 'Interests', value: 'BJJ · Weightlifting · Hiking' },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <p className="section-label">Who I am</p>
        <h2 className="section-title">About Me</h2>

        <div className="about__grid">
          <div className="about__text">
            <p>
              I’m studying Economics at UC Berkeley. Outside of class, I build PerfinLab and work
              on a few data and software projects.
            </p>
            <p>
              I also work as a personal trainer and have trained Brazilian Jiu-Jitsu for more than
              eight years. I enjoy lifting, hiking, cooking, cars, and games.
            </p>
            <a href="#contact" className="btn btn-outline" style={{ marginTop: '24px' }}>
              Let's Talk
            </a>
          </div>

          <div className="about__sidebar">
            <p className="about__sidebar-title">Quick profile</p>
            <ul className="about__facts">
              {facts.map(f => (
                <li key={f.label}>
                  <span className="about__fact-label">{f.label}</span>
                  <span className="about__fact-value">{f.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
