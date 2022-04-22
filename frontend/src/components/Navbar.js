import React from 'react'

export const Navbar = () => {
  return (
    <>
      <div className="logoAndNav">
        <div className="logo">
          <img src="/assets/logo2.png" alt="logo2.png" width="100" />
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
        <a href="/"><img src="/assets/user.png" alt="user.png" width="50" /></a>
      </div>
      <div>
      </div>
    </>
  )
}
