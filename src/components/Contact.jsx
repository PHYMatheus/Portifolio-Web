import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { profile } from '../data/profile.js'
import useReveal from '../hooks/useReveal.js'

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contato" className="section reveal" ref={ref}>
      <div className="container contact">
        <h2 className="section__title section__title--center">
          <span className="mono accent">04.</span> Bora conversar?
        </h2>
        <p className="contact__text">
          Estou aberto a oportunidades de estágio e vaga Jr. Se curtiu meu trabalho, me chama!
        </p>

        <div className="contact__actions">
          <a href={`mailto:${profile.email}`} className="btn btn--primary">
            <FaEnvelope /> Enviar e-mail
          </a>
          <a
            href={`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(profile.whatsappMessage)}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn--whatsapp"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>

        <div className="contact__links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}