import React from 'react'
import Photo4 from '../../Assets/Images/Photo4.png'
import Users7 from '../../Assets/Images/Users7.png'
const Task7 = ({message,link,like}) => {
  return (
    <div className="card-container">
            <div className="card-title">
              <img src={Photo4} alt='photo4' style={{width:"280px"}}/>
            </div>
            <div className="card-id-wrapper">
                <div className="card-id card-id6"></div>
                <div className="card-id card-id3"></div>
                <div className="card-id card-id5" style={{marginLeft:"5px"}}></div>
            </div>
            <div className="card-title">
            Types of paper in catalog printing
            </div>
            <div className="card-title" style={{fontSize:"13px",lineHeight:"18px",color:"grey"}}>
            Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article).
            </div>
            <div className="card-tag">
                <div className="card-tag-icon"><img src={Users7} alt='users7'/></div>

                
                <div className="card-tag-box">
                    <div className="card-tag-icon">34<img src={message} alt='message'/></div>
                    <div className="card-tag-icon">23<img src={like} alt='like'/></div>
                    <div className="card-tag-icon">98<img src={link} alt='link'/></div>
                </div>
                        
            </div>
        </div>
  )
}

export default Task7