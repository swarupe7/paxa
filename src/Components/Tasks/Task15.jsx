import React from 'react'
import Photo6 from "../../Assets/Images/Photo6.png";
import Users14 from "../../Assets/Images/Users14.png";
const Task15 = ({message,like,link}) => {
  return (
    <div className="card-container">
        <div className="card-title">
          <img src={Photo6} alt="photo6" style={{ width: "280px" }} />
        </div>
        <div className="card-id-wrapper">
          <div className="card-id card-id5" style={{ marginLeft: "0px" }}></div>
          <div className="card-id1" style={{ marginLeft: "5px" }}></div>
        </div>
        <div className="card-title">
          Tips for choosing the perfect gloss for your lips
        </div>
        <div
          className="card-title"
          style={{ fontSize: "13px", lineHeight: "18px", color: "grey" }}
        >
          With MySpace becoming more popular every day, there is the constant
          need to be different. There are millions of users.
        </div>
        <div className="card-tag">
          <div className="card-tag-icon">
            <img src={Users14} alt="users14" />
          </div>

          <div className="card-tag-box">
            <div className="card-tag-icon">
              21
              <img src={message} alt="message" />
            </div>
            <div className="card-tag-icon">
              23
              <img src={like} alt="like" />
            </div>
            <div className="card-tag-icon">
              12
              <img src={link} alt="link" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Task15