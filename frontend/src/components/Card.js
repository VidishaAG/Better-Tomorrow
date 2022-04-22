import React from 'react'

import user from '../assets/user.png'
import upvote from '../assets/upvote.png'

export const Card = () => {
  return (
    <div class="card">
      {/* TODO: 1. LINK PROFILE PHOTO AND NAME FROM DATABASE 2. MAKE STUFF CLICKABLE */}
      <div class="nameAndProfile"><img src={user} alt="user.png" width="30px" /><span>Name</span></div>
      <div class="card-content"></div>
      <div class="card-body">
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div class="votesAndComments">
        <a href='/'><img src={upvote} alt="" width="14px" class="upvoteImage" /></a><span class="upvoteCount">0</span>
      </div>
    </div>
  )
}
