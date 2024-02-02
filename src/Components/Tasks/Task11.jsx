import React from 'react'
import Users11 from "../../Assets/Images/Users11.png";
const Task11 = ({message,link,like}) => {
  return (
    <div className="card-container">
    <div className="card-id-wrapper">
      <div className="card-id1"></div>
    </div>
    <div className="card-title">Linux or windows which is it</div>
    <div
      className="card-title"
      style={{ fontSize: "13px", lineHeight: "18px", color: "grey" }}
    >
      Saving money – is something we would all like.
    </div>
    <div className="card-tag">
      <div className="card-tag-icon">
        <img src={Users11} alt="users11" />
      </div>

      <div className="card-tag-box">
        <div className="card-tag-icon">
          55
          <img src={message} alt="message" />
        </div>
        <div className="card-tag-icon">
          23
          <img src={like} alt="like" />
        </div>
        <div className="card-tag-icon">
          19
          <img src={link} alt="link" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Task11