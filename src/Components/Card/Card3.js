import React from "react";




import message from "../../Assets/Images/message.png";

import like from "../../Assets/Images/Heart.png";
import link from "../../Assets/Images/link.png";
import "./Card.css";
import Task11 from "../Tasks/Task11";
import Task12 from "../Tasks/Task12";

export default function Card3() {
  return (
    <>
      
      <Task11 message={message} like={like} link={link}/>
      <Task12 message={message} like={like} link={link}/>
      

     

      
    </>
  );
}
