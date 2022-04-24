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
        <div className="navitem">
          <Link to="/leaderboard">Leaderboard</Link>
        </div>
      </div>
      <div className="profile">

        <div className="dropdown">
        <button className="dropbtn"><span>{localStorage.email}</span></button>
        <div className="dropdown-content">
          <a href="/profile">Your Profile</a>
          <a href="/">Sign out</a>
        </div>
      </div>
        <Link to="/"><img src={user} alt="user.png" width="50" /></Link>
      </div>
      <div>
      </div>
    </header>
  )
}
