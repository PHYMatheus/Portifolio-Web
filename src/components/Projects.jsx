import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../data/projects.js'
import useReveal from '../hooks/useReveal.js'

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projetos" className="section reveal" ref={ref}>
      <div className="container">
        <h2 className="section__title">
          <span className="mono accent">03.</span> Projetos
        </h2>

        <div className="projects">
          {projects.map((p) => (
            <article key={p.title} className="card project">
              <h3 className="card__title">{p.title}</h3>

              <p className="project__problem">
                <span className="project__tag">Problema</span>
                {p.problem}
              </p>
              <p className="project__desc">
                <span className="project__tag">Solução</span>
                {p.description}
              </p>

              <ul className="chips">
                {p.stack.map((s) => (
                  <li key={s} className="chip chip--mono">
                    {s}
                  </li>
                ))}
              </ul>

              <div className="project__links">
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer" aria-label={`Código de ${p.title}`}>
                    <FaGithub /> Código
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" aria-label={`Demo de ${p.title}`}>
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
