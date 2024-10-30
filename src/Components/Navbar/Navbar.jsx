import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">
        <img src="https://www.porsche.com/filestore/image/multimedia/none/wordmark/svg/9bee0427-35f0-11ea-80c6-005056bbdc38/porsche-svg.svg" />
      </div>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>Explorar</li>
        <li>Sobre</li>
        <li className='nav-contact'>Contato</li>
      </ul>
    </div>
  )
}

export default Navbar