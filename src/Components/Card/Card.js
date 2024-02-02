import React from "react";



import message from "../../Assets/Images/message.png";

import like from "../../Assets/Images/Heart.png";
import link from "../../Assets/Images/link.png";

import "./Card.css";
import Task1 from "../Tasks/Task1";
import Task2 from "../Tasks/Task2";
import Task3 from "../Tasks/Task3";
import { Droppable } from "react-beautiful-dnd";

export default function Card() {
  return (
    <>
     <Droppable droppableId="droppable">
      {(provided) => (
        <div
          className="list-card-items"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
    <Task1 message={message} like={like} link={link}/>
    <Task2 message={message} like={like} link={link}/>
    <Task3 message={message} like={like} link={link}/>
     
    {provided.placeholder}
        </div>
      )}
    </Droppable>
      

      

      
    </>
  );
}
