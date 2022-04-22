import React from 'react'
import logo from '../assets/logo.png'
import user from '../assets/user.png'

export const Navbar = () => {
  return (
    <>
      <div className="logoAndNav">
        <div className="logo">
          <img src={logo} alt="logo.png" width="100" />
        </div>
        <div className="navitem">
          <a href="/">Nav item 1</a>
        </div>
        <div className="navitem">
          <a href="/">Nav item 2</a>
        </div>
        <div className="navitem">
          <a href="/">Nav item 3</a>
        </div>
      </div>
      <div className="profile">
        <a href="/"><img src={user} alt="user.png" width="50" /></a>
      </div>
      <div>
      </div>
    </>
  )
}
