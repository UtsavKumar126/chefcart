import React, { useContext } from "react";
import arrowDown from "../../assets/Path 786@2x.jpg";
import "./styles.css";
import { DataContext } from "../../DataProvider";
import Dishcomp from "../Dishcomp";
function Recommended() {
  const { data } = useContext(DataContext);
  return (
    <div className="recommended-main">
      <div className="recommended-inner">
        <div className="arrow-div">
          <h1 className="title">Recommended</h1>
          <img src={arrowDown} alt="" />
        </div>
        <button className="recommended-button">Menu</button>
      </div>
      <div className="dish-main">
        {data &&
          data.dishes &&
          data.dishes.map((dish, i) => (
            <Dishcomp dish={dish} i={i}/>
          ))}
      </div>
    </div>
  );
}

export default Recommended;
