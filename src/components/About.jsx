import { profile } from '../data/profile.js'
import useReveal from '../hooks/useReveal.js'

export default function About() {
  const ref = useReveal()

  return (
    <section id="sobre" className="section reveal" ref={ref}>
      <div className="container">
        <h2 className="section__title">
          <span className="mono accent">01.</span> Sobre mim
        </h2>

        <div className="about">
          <div className="about__text">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="about__cards">
            {profile.highlights.map((h) => (
              <div key={h.label} className="card card--small">
                <span className="card__label">{h.label}</span>
                <strong>{h.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
