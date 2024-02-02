import React from 'react';
import Photo3 from "../../Assets/Images/Photo3.png";
import Users6 from "../../Assets/Images/Users6.png";

const Task6 = ({message,link,like}) => {
  return (
    <div className="card-container">
        <div className="card-title">
          <img src={Photo3} alt="photo3" style={{ width: "280px" }} />
        </div>
        <div className="card-id-wrapper">
          <div className="card-id card-id4" style={{ marginLeft: "0px" }}></div>
        </div>
        <div className="card-title">How to look up</div>
        <div
          className="card-title"
          style={{ fontSize: "13px", lineHeight: "18px", color: "grey" }}
        >
          Are you considering buying a compatible inkjet cartridge for your
          printer?
        </div>
        <div className="card-tag">
          <div className="card-tag-icon">
            <img src={Users6} alt="users6" />
          </div>

          <div className="card-tag-box">
            <div className="card-tag-icon">
              54
              <img src={message} alt="message" />
            </div>
            <div className="card-tag-icon">
              76
              <img src={like} alt="like" />
            </div>
            <div className="card-tag-icon">
              11
              <img src={link} alt="link" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Task6