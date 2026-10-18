import './About.css'

const facts = [
  { label: 'Based in', value: 'San Jose, CA' },
  { label: 'Education', value: 'B.A. Economics, UC\u00a0Berkeley' },
  { label: 'Graduating', value: 'May 2027' },
  { label: 'Looking for', value: 'Finance & data/business analyst roles' },
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
              I’m a senior at UC Berkeley studying Economics, graduating in May 2027. I’m most
              interested in finance and in using data to make better business decisions. I build
              things to solve problems I run into myself, and I hope they help other people too.
              PerfinLab is one of those projects. I have a hard time settling for “good enough.”
            </p>
            <p>
              Outside of class and work, I train Brazilian Jiu Jitsu, weightlift, and hike.
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
