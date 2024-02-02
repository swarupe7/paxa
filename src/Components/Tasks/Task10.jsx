import React from 'react'
import Photo5 from "../../Assets/Images/Photo5.png";
import Users10 from "../../Assets/Images/Users10.png";
const Task10 = () => {
  return (
    <div className="card-container">
        <div className="card-title">
          <img src={Photo5} alt="photo5" style={{ width: "280px" }} />
        </div>
        <div className="card-id-wrapper">
          <div className="card-id card-id6"></div>
          <div className="card-id card-id3"></div>
          <div className="card-id card-id5" style={{ marginLeft: "5px" }}></div>
        </div>
        <div className="card-title">Be single minded</div>
        <div
          className="card-title"
          style={{ fontSize: "13px", lineHeight: "18px", color: "grey" }}
        >
          Create a list with all possible keywords that fit to your product,
          service or business field.
        </div>
        <div className="card-tag">
          <div className="card-tag-icon">
            <img src={Users10} alt="users10" />
          </div>

          <div className="card-tag-box">
            <div className="card-tag-icon">
              21
              <img src={message} alt="message" />
            </div>
            <div className="card-tag-icon">
              34
              <img src={like} alt="like" />
            </div>
            <div className="card-tag-icon">
              17
              <img src={link} alt="link" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Task10