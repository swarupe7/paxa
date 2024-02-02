import React from 'react'

import Users4 from "../../Assets/Images/Users4.png";
const Task13 = ({message,like,link}) => {
  return (
    <div className="card-container">
        <div className="card-id-wrapper">
          <div className="card-id card-id1"></div>
          <div className="card-id card-id3"></div>
          <div className="card-id card-id6"></div>
        </div>
        <div className="card-title">
          At home treatments for beauty on a budget
        </div>
        <div
          className="card-title"
          style={{ fontSize: "13px", lineHeight: "18px", color: "grey" }}
        >
          The holidays bring with them thoughts of carving and serving delicious
          turkey dinners to your family and friends. Tradition has its fans, but
          perhaps this year you’d like to try a twist to your turkey recipe.
        </div>
        <div className="card-tag">
          <div className="card-tag-icon">
            <img src={Users4} alt="users4" />
          </div>

          <div className="card-tag-box">
            <div className="card-tag-icon">
              87
              <img src={message} alt="message" />
            </div>
            <div className="card-tag-icon">
              54
              <img src={like} alt="like" />
            </div>
            <div className="card-tag-icon">
              32
              <img src={link} alt="link" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Task13