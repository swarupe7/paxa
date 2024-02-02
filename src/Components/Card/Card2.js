import React from 'react'


import message from '../../Assets/Images/message.png'


import like from '../../Assets/Images/Heart.png'
import link from '../../Assets/Images/link.png'
import './Card.css'
import Task7 from '../Tasks/Task7'
import Task8 from '../Tasks/Task8'

export default function Card2() {
  return (
    <>

<Task7 message={message} like={like} link={link}/>
<Task8 message={message} like={like} link={link}/>

        

        

       

    </>
  )
}