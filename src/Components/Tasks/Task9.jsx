import React from 'react';
import Users9 from "../../Assets/Images/Users9.png";

const Task9 = () => {
  return (
    <div className="card-container">
        <div className="card-id-wrapper">
          <div className="card-id card-id5"></div>
          <div className="card-id card-id3"></div>
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
            <img src={Users9} alt="users9" />
          </div>

          <div className="card-tag-box">
            <div className="card-tag-icon">
              32
              <img src={message} alt="message" />
            </div>
            <div className="card-tag-icon">
              87
              <img src={like} alt="like" />
            </div>
            <div className="card-tag-icon">
              31
              <img src={link} alt="link" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Task9