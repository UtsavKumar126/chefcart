import React, { useContext } from 'react'
import "./styles.css"



function Cuisine() {
    const cuisines = [
        "Italian", "Mexican", "Chinese", "Japanese", 
        "Indian", "French", "Thai", "Greek", 
        "Spanish", "Lebanese"
    ]
  return (
    <div className='cuisin'>
        {
            cuisines.map((cuisine,i) =>(
                <div key={i} className='inactive' onClick={(e)=>{
                    e.target.classList.toggle("active")
                }}>{cuisine}</div>
            ))
        }
    </div>
  )
}

export default Cuisine