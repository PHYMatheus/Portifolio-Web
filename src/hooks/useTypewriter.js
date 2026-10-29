import { useEffect, useState } from 'react'

// Efeito de digitação que alterna entre várias frases.
export default function useTypewriter(words, speed = 70, pause = 1600) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    let delay = deleting ? speed / 2 : speed

    if (!deleting && text === current) delay = pause
    else if (deleting && text === '') delay = 300

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => i + 1)
      } else {
        setText(
          deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1),
        )
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, deleting, index, words, speed, pause])

  return text
}
