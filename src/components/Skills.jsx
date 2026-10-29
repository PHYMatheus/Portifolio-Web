import { skills } from '../data/skills.js'
import useReveal from '../hooks/useReveal.js'

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className="section reveal" ref={ref}>
      <div className="container">
        <h2 className="section__title">
          <span className="mono accent">02.</span> Skills
        </h2>

        <div className="skills">
          {skills.map((group) => (
            <div key={group.category} className="card">
              <h3 className="card__title">{group.category}</h3>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
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
