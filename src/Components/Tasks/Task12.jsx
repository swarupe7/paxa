import React from 'react'
import Users12 from "../../Assets/Images/Users12.png";
const Task12 = ({message,like,link}) => {
  return (
    <div className="card-container">
        <div className="card-id-wrapper">
          <div className="card-id card-id2"></div>
          <div className="card-id card-id4"></div>
        </div>
        <div className="card-title">Dna the future of nutrition</div>
        <div
          className="card-title"
          style={{ fontSize: "13px", lineHeight: "18px", color: "grey" }}
        >
          “Why does anyone want a vasectomy reversal?” This is a question I hear
          any time I tell someone what I do for a living.
        </div>
        <div className="card-tag">
          <div className="card-tag-icon">
            <img src={Users12} alt="users12" />
          </div>

          <div className="card-tag-box">
            <div className="card-tag-icon">
              12
              <img src={message} alt="message" />
            </div>
            <div className="card-tag-icon">
              33
              <img src={like} alt="like" />
            </div>
            <div className="card-tag-icon">
              66
              <img src={link} alt="link" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Task12