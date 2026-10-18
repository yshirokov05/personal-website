import { skillCategories } from '../content'
import './Skills.css'

export default function Skills() {
  return (
    <section id="coursework" className="skills">
      <div className="container">
        <p className="section-label">What I've studied and use</p>
        <h2 className="section-title">Coursework &amp; Skills</h2>

        <div className="skills__grid">
          {skillCategories.map(cat => (
            <div key={cat.name} className="skills__category">
              <h3 className="skills__category-name">{cat.name}</h3>
              <ul className="skills__list">
                {cat.skills.map(s => (
                  <li key={s} className="skills__item">
                    <span className="skills__dot" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
