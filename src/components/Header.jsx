import { Link } from 'react-router-dom'
import '../styles/Header.scss'
import logo from '../assets/KasaLogo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="logo-banner">
        <img src={logo} alt="Kasa logo" />
      </div>

      <nav className="nav">
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
  )
}

export default Header
