import React from 'react'

import user from '../assets/user.png'
import upvote from '../assets/upvote.png'

export const Card = () => {
  return (
    <div className="card">
      {/* TODO: 1. LINK PROFILE PHOTO AND NAME FROM DATABASE 2. MAKE STUFF CLICKABLE */}
      <div className="nameAndProfile"><img src={user} alt="user.png" width="30px" /><span>Name</span></div>
      <div className="card-content"></div>
      <div className="card-body">
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="votesAndComments">
        <a href='/'><img src={upvote} alt="" width="14px" className="upvoteImage" /></a><span className="upvoteCount">0</span>
      </div>
    </div>
  )
}
