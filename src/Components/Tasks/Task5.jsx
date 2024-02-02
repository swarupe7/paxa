import React from 'react';
import Photo2 from "../../Assets/Images/Photo2.png";
import Users5 from "../../Assets/Images/Users5.png";

const Task5 = ({message,link,like}) => {
  return (
    <div className="card-container">
        <div className="card-title">
          <img src={Photo2} alt="photo2" style={{ width: "280px" }} />
        </div>
        <div className="card-id-wrapper">
          <div className="card-id card-id1"></div>
          <div className="card-id card-id5" style={{ marginLeft: "5px" }}></div>
        </div>
        <div className="card-title">
          Unmatched toner cartridge quality 20 less than oem price
        </div>
        <div
          className="card-title"
          style={{ fontSize: "13px", lineHeight: "18px", color: "grey" }}
        >
          Why read motivational sayings? For motivation! You might need a bit,
          if you can use last year’s list of goals this year because it’s as
          good as new.
        </div>
        <div className="card-tag">
          <div className="card-tag-icon">
            <img src={Users5} alt="users5" />
          </div>

          <div className="card-tag-box">
            <div className="card-tag-icon">
              76
              <img src={message} alt="message" />
            </div>
            <div className="card-tag-icon">
              32
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

export default Task5