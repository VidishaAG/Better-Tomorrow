import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import user from '../assets/user.png'

export const Navbar = () => {
  return (
    <header>
      <div className="logoAndNav">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo.png" width="100" />
          </Link>
        </div>
        <div className="navitem">
          <Link to="/issues">Issues</Link>
        </div>
        <div className="navitem">
          <Link to="/ngo">Featured NGOs</Link>
        </div>
        <div className="navitem">
          <Link to="/ideasubmit">Submit Ideas</Link>
        </div>
        <div className="navitem">
          <Link to="/about">About Us</Link>
        </div>
      </div>
      <div className="profile">
        
        <div class="dropdown">
        <button class="dropbtn"><span>{localStorage.email}</span></button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div> 
        <Link to="/"><img src={user} alt="user.png" width="50" /></Link>
      </div>
      <div>
      </div>
    </header>
  )
}
