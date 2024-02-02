import React from 'react'
import Users13 from "../../Assets/Images/Users13.png";
const Task14 = ({message,like,link}) => {
  return (
    <div className="card-container">
        <div className="card-id-wrapper">
          <div className="card-id card-id6" style={{ marginLeft: "0px" }}></div>
          <div className="card-id card-id4" style={{ marginLeft: "5px" }}></div>
        </div>
        <div className="card-title">Home business advertising ideas</div>
        <div
          className="card-title"
          style={{ fontSize: "13px", lineHeight: "18px", color: "grey" }}
        >
          Successful businesses know the importance of building and maintaining
          good working.
        </div>
        <div className="card-tag">
          <div className="card-tag-icon">
            <img src={Users13} alt="users13" />
          </div>

          <div className="card-tag-box">
            <div className="card-tag-icon">
              13
              <img src={message} alt="message" />
            </div>
            <div className="card-tag-icon">
              11
              <img src={like} alt="like" />
            </div>
            <div className="card-tag-icon">
              43
              <img src={link} alt="link" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Task14