import React from 'react'
import '../styles/Footer.scss'
import logo from '../assets/KasaLogo2.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={logo} alt="Kasa logo" />
      </div>
      <div className="footer-content">
        <p>
          &copy; 2020 Kasa. All
          <span className="mobile-text"> rights reserved</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
