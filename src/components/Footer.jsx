import { profile } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          Feito por <span className="accent">{profile.name}</span> ·{' '}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
