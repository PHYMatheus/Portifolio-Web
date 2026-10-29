import { useEffect, useRef } from 'react'

// Adiciona a classe "visible" quando o elemento entra na tela.
// Uso: const ref = useReveal(); <section ref={ref} className="reveal">
export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
