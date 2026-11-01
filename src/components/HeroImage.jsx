import { useEffect, useRef } from 'react'
import { FaJava, FaReact, FaGitAlt, FaDatabase, FaPlug } from 'react-icons/fa'
import { SiSpringboot } from 'react-icons/si'
import '../styles/heroimage.css'

// Foto do hero com "palco": aura vermelha girando, tecnologias orbitando em 3D,
// brasas subindo, inclinação com o mouse e selo de disponibilidade.
// Tudo mora aqui (componente + heroimage.css).

const TECHS = [
  { label: 'Java', Icon: FaJava },
  { label: 'Spring Boot', Icon: SiSpringboot },
  { label: 'React', Icon: FaReact },
  { label: 'SQL', Icon: FaDatabase },
  { label: 'Git', Icon: FaGitAlt },
  { label: 'API REST', Icon: FaPlug },
]

// Brasas: posições/tempos fixos (sem Math.random pra não mudar a cada render)
const EMBERS = Array.from({ length: 16 }, (_, i) => ({
  x: 8 + ((i * 53) % 84),
  size: 3 + ((i * 7) % 4),
  delay: ((i * 37) % 70) / 10,
  dur: 5 + ((i * 11) % 50) / 10,
  sway: ((i % 2 ? 1 : -1) * (10 + ((i * 13) % 18))),
}))

export default function HeroImage() {
  const wrapRef = useRef(null)
  const stageRef = useRef(null)
  const chipRefs = useRef([])

  // Órbita 3D das tecnologias: elipse inclinada em volta da cabeça.
  // Quem está "atrás" fica menor, mais apagado e por trás da foto; quem está "na frente" passa por cima.
  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0

    const place = (t) => {
      const W = wrap.offsetWidth
      const H = wrap.offsetHeight
      const cx = W * 0.5
      const cy = H * 0.36
      const rx = W * 0.6
      const ry = H * 0.095
      const tilt = (-9 * Math.PI) / 180
      chipRefs.current.forEach((el, i) => {
        if (!el) return
        // órbita lenta (uma volta ~40s) + balanço leve em cada chip, como se estivessem flutuando
        const ang = t * 0.16 + (i * Math.PI * 2) / TECHS.length
        const bobY = Math.sin(t * 0.9 + i * 1.7) * 7
        const bobX = Math.sin(t * 0.6 + i * 2.3) * 3
        const sway = Math.sin(t * 0.7 + i * 1.1) * 2
        const ex = Math.cos(ang) * rx
        const ey = Math.sin(ang) * ry
        const x = cx + ex * Math.cos(tilt) - ey * Math.sin(tilt)
        const y = cy + ex * Math.sin(tilt) + ey * Math.cos(tilt)
        const depth = Math.sin(ang) // -1 (atrás) .. 1 (frente)
        const k = (depth + 1) / 2
        el.style.transform = `translate(${x + bobX}px, ${y + bobY}px) translate(-50%, -50%) rotate(${sway}deg) scale(${0.78 + 0.32 * k})`
        el.style.opacity = String(0.5 + 0.5 * k)
        el.style.zIndex = depth > 0 ? '3' : '0'
      })
    }

    if (reduce) {
      place(0.6)
      return undefined
    }
    const loop = (ms) => {
      place(ms / 1000)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  // Inclinação com o mouse (só em desktop com mouse, e sem "movimento reduzido")
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return undefined
    const noHover = !window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (noHover || reduce) return undefined

    const onMove = (e) => {
      const nx = e.clientX / window.innerWidth - 0.5
      const ny = e.clientY / window.innerHeight - 0.5
      stage.style.setProperty('--ry', `${(nx * 12).toFixed(2)}deg`)
      stage.style.setProperty('--rx', `${(-ny * 8).toFixed(2)}deg`)
      stage.style.setProperty('--px', `${(-nx * 14).toFixed(1)}px`)
      stage.style.setProperty('--py', `${(-ny * 10).toFixed(1)}px`)
    }
    const onLeave = () => {
      ;['--ry', '--rx', '--px', '--py'].forEach((p) => stage.style.removeProperty(p))
    }
    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div className="hero-photo" ref={wrapRef}>
      <div className="hero-photo__stage" ref={stageRef}>
        {/* Aura e anéis atrás da foto */}
        <div className="hero-photo__aura" aria-hidden="true" />
        <div className="hero-photo__ring hero-photo__ring--solid" aria-hidden="true" />
        <div className="hero-photo__ring hero-photo__ring--dashed" aria-hidden="true" />

        {/* Brasas subindo */}
        <div className="hero-photo__embers" aria-hidden="true">
          {EMBERS.map((e, i) => (
            <span
              key={i}
              style={{
                '--x': `${e.x}%`,
                '--size': `${e.size}px`,
                '--delay': `${e.delay}s`,
                '--dur': `${e.dur}s`,
                '--sway': `${e.sway}px`,
              }}
            />
          ))}
        </div>

        <div className="hero-photo__figure">
          <img
            className="hero-photo__img"
            src={`${import.meta.env.BASE_URL}matheus-hero.png`}
            alt="Matheus Guilherme"
            width="900"
            height="985"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Tecnologias orbitando */}
        <ul className="hero-photo__orbit" aria-label="Tecnologias que uso">
          {TECHS.map(({ label, Icon }, i) => (
            <li
              key={label}
              className="tech-chip"
              ref={(el) => {
                chipRefs.current[i] = el
              }}
            >
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </li>
          ))}
        </ul>

        <div className="hero-photo__badge">
          <span className="hero-photo__dot" aria-hidden="true" />
          BackEnd Software Engineer
        </div>
      </div>
    </div>
  )
}