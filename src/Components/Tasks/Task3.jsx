import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Users3 from "../../Assets/Images/Users3.png";
import Photo1 from "../../Assets/Images/Photo1.png";
const Task3 = ({message,link,like}) => {
  return (

   

    <div className="card-container">
        <div className="card-title">
          <img src={Photo1} alt="photo1" style={{ width: "280px" }} />
        </div>
        <div className="card-id-wrapper">
          <div className="card-id card-id5"></div>
        </div>
        <div className="card-title">
          Cosmetic surgery abroad making the right choice
        </div>
        <div className="card-tag">
          <div className="card-tag-icon">
            <img src={Users3} alt="users3" />
          </div>

          <div className="card-tag-box">
            <div className="card-tag-icon">
              54
              <img src={message} alt="message" />
            </div>
            <div className="card-tag-icon">
              16
              <img src={like} alt="like" />
            </div>
            <div className="card-tag-icon">
              33
              <img src={link} alt="link" />
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Task3