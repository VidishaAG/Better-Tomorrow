import React from 'react'

export const Profile = () => {
  return (
    <div classNameName="prof">
      <h1 className="title-pen">Your Profile </h1>
      <div className="user-profile">
        <img className="avatar" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTF_erFD1SeUnxEpvFjzBCCDxLvf-wlh9ZuPMqi02qGnyyBtPWdE-3KoH3s" alt="Ash" />
          <div className="username">{localStorage.name}</div>
        <div className="bio">
          Senior UI Designer
        </div>
          <div className="description">
            I use to design websites and applications
            for the web.
        </div>
        <ul className="data">
          <li>
            <span className="entypo-heart"> 127</span>
          </li>
          <li>
            <span className="entypo-eye"> 853</span>
          </li>
          <li>
            <span className="entypo-user"> 311</span>
          </li>
        </ul>
      </div>
    </div>
  )
}