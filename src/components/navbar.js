import React from 'react'
import { Link, Navlink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav-wrapper purple lighten-3">
      <div className="container">
        <a href="/" className="brand-logo">Moonflower Studio</a>
        <ul className='right'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contacts">Contacts</Link></li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar;

