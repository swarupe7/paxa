import React from 'react';

import Users1 from "../../Assets/Images/Users1.png";

const Task1 = ({message,like,link}) => {
  return (
   
    <div className="card-container">
    <div className="card-id-wrapper">
      <div className="card-id1"></div>
    </div>
    <div className="card-title">
      Old fashioned recipe for preventing allergies and chemical
      sensitivities
    </div>
    <div className="card-tag">
      <div className="card-tag-icon">
        <img src={Users1} alt="users1" />
      </div>

      <div className="card-tag-box">
        <div className="card-tag-icon">
          34
          <img src={message} alt="message" />
        </div>
        <div className="card-tag-icon">
          14
          <img src={like} alt="like" />
        </div>
        <div className="card-tag-icon">
          34
          <img src={link} alt="link" />
        </div>
      </div>
    </div>
  </div>

      
  )
}

export default Task1