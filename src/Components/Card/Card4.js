import React from "react";



import message from "../../Assets/Images/message.png";

import like from "../../Assets/Images/Heart.png";
import link from "../../Assets/Images/link.png";
import "./Card.css";
import Task13 from "../Tasks/Task13";
import Task14 from "../Tasks/Task14";
import Task15 from "../Tasks/Task15";

export default function Card4() {
  return (
    <>
    <Task13 message={message} like={like} link={link}/>
    <Task14 message={message} like={like} link={link}/>
    <Task15 message={message} like={like} link={link}/>
      

      

      
    </>
  );
}
