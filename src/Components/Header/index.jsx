import React from 'react'
import "./Styles.css"
import arrow from "../../assets/Arrow.jpg"

function Header() {
  return (
    <div className='header'>
        <img src={arrow} alt="" />
        <p>Select Dishes</p>
    </div>
  )
}

export default Header