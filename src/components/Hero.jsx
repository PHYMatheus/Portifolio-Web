import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa'
import { profile } from '../data/profile.js'
import useTypewriter from '../hooks/useTypewriter.js'
import HeroImage from './HeroImage.jsx'

export default function Hero() {
  const typed = useTypewriter(profile.roles)

  return (
    <section id="inicio" className="hero">
      <div className="container hero__inner">
        <p className="hero__hello">Olá, eu sou</p>
        <h1 className="hero__name">
          <span className="gradient-text">{profile.name}</span>
        </h1>
        <p className="hero__role">
          <span className="mono">{'> '}</span>
          {typed}
          <span className="cursor" aria-hidden="true">
            |
          </span>
        </p>
        <p className="hero__headline">{profile.headline}</p>

        <div className="hero__actions">
          <a href="#projetos" className="btn btn--primary">
            Ver projetos
          </a>
          <a href="#contato" className="btn btn--ghost">
            Falar comigo
          </a>
        </div>

        <div className="hero__socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hero__resume"
            aria-label="Abrir currículo em PDF"
          >
            <FaFilePdf /> <span>Currículo</span>
          </a>
        </div>

        <HeroImage />
      </div>
    </section>
  )
}