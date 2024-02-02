import React from 'react'
import Users8 from '../../Assets/Images/Users8.png'
const Task8 = ({message,link,like}) => {
  return (
    <div className="card-container">
            <div className="card-id-wrapper">
                <div className="card-id card-id2"></div>
                <div className="card-id card-id4"></div>
            </div>
            <div className="card-title">
            There is no competition
            </div>
            <div className="card-title" style={{fontSize:"13px",lineHeight:"18px",color:"grey"}}>
            This article is floated online with an aim to help you find the best dvd printing solution.
            </div>
            <div className="card-tag">
                <div className="card-tag-icon"><img src={Users8} alt='users8'/></div>

                
                <div className="card-tag-box">
                    <div className="card-tag-icon">23<img src={message} alt='message'/></div>
                    <div className="card-tag-icon">12<img src={like} alt='like'/></div>
                    <div className="card-tag-icon">44<img src={link} alt='link'/></div>
                </div>
                        
            </div>
        </div>
  )
}

export default Task8