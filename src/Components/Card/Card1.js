import React from "react";
import message from "../../Assets/Images/message.png";
import like from "../../Assets/Images/Heart.png";
import link from "../../Assets/Images/link.png";
import "./Card.css";
import Task4 from "../Tasks/Task4";
import Task5 from "../Tasks/Task5";
import Task6 from "../Tasks/Task6";

export default function Card() {
  return (
    <>

<Task4 message={message} like={like} link={link}/>
<Task5 message={message} like={like} link={link}/>
<Task6 message={message} like={like} link={link}/>
      

     

      
    </>
  );
}
