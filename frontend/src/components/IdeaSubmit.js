import React from 'react'

export const IdeaSubmit = () => {
  return (
    <div classNameName="ideaSubmit">
        <form className="cf">
            <div className="halfLeft">
                <input type="text" id="input-name" placeholder="Name" />
                <input type="email" id="input-email" placeholder="Email address" />
                <input type="text" id="input-subject"   placeholder="Idea Title" />
            </div>
            <div className="halfRight">
            <textarea name="message" type="text" id="input-message" placeholder="Description"></textarea>
            </div>
            <input type="submit" value="Submit" id="input-submit" />
        </form>
    </div>
  )
}
