import React from "react";
import "./styles.css";
import calender from "../../assets/Calender.jpg";
import alarm from "../../assets/Alarm.jpg";
function Calender() {
  return (
    <div className="center-main">
      <div className="calender-main">
        <div className="calender-inner">
          <img src={calender} alt="" className="imges"/>
          <p className="date-time">21 May 2021</p>
        </div>
        <div className="calender-inner" >
          <img src={alarm} alt=""  className="imges"/>
          <p className="date-time">10:30 PM - 12:30 PM</p>
        </div>
      </div>
    </div>
  );
}

export default Calender;
