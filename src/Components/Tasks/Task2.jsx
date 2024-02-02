import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Users2 from "../../Assets/Images/Users2.png";

const Task2 = ({message,link,like}) => {
  return (
   
    <div className="card-container">
    <div className="card-id-wrapper">
      <div className="card-id card-id2"></div>
      <div className="card-id card-id3"></div>
      <div className="card-id card-id6"></div>
      <div className="card-id card-id4"></div>
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
        <img src={Users2} alt="users2" />
      </div>

      <div className="card-tag-box">
        <div className="card-tag-icon">
          23
          <img src={message} alt="message" />
        </div>
        <div className="card-tag-icon">
          12
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

export default Task2;