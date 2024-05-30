import React, { useEffect, useState } from "react";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import recipe1 from "../../assets/recipe1.png";
import recipe2 from "../../assets/recipe2.png";
import { StarBorderRounded } from "@mui/icons-material";
import StarRounded from "@mui/icons-material/StarRounded";
import clock from "../../assets/clock.jpg";
import arrowDown from "../../assets/Path 786@2x.jpg";
import refri from "../../assets/refriimg.jpg"
import "./styles.css"
function Recipe() {
  const [data2, setData2] = useState({});
  console.log(data2);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1"
      );
      const data = await response.json();
      setData2(data);
    }
    getData();
  }, []);
  return (
    <>
      <div className="header-recipe">
        <ArrowBackIosRoundedIcon fontSize="medium" />
      </div>
      <div className="image-container">
        <div className="images-section">
          <div className="image-item1">
            <img src={recipe1} alt="Ingredients 1" />
          </div>
          <div className="image-item2">
            <img src={recipe2} alt="Ingredients 2" />
          </div>
        </div>
      </div>
      {data2 && (
        <div className="recipe-container">
          <h1 className="recipe-name">{data2.name}</h1>
          <div className="recipe-rating">
            4.2{" "}
            <span>
              <StarRounded />
            </span>
          </div>
        </div>
      )}
      <div className="recipe-text">
        Mughlai Masala is a style of cookery developed in the Indian
        Subcontinent by the imperial kitchens of the Mughal Empire.
      </div>
      <div className="timer">
        <img src={clock} alt="" />
        <p>1 hour</p>
      </div>
      <div className="gapbar"></div>
      <div className="ingredients">
        <h1>Ingredients</h1>
        <p>For 2 people</p>
      </div>
      <center>
        <div className="gapbar extra"></div>
      </center>
      <div className="vegetable">
        {data2 && data2.ingredients && data2.ingredients.vegetables && (
          <h2>Vegetables (0{data2.ingredients.vegetables.length})</h2>
        )}
        <img src={arrowDown} alt="" />
      </div>
      {data2 && data2.ingredients && data2.ingredients.vegetables && (
        <div className="vegetable-container">
          {
            data2.ingredients.vegetables.map((veg, index) => (
              <div className="veg-item">
                <p>{veg.name}</p>
                <p>{veg.quantity}</p>
              </div>
            ))
          }
        </div>
      )}
      <div className="vegetable">
        {data2 && data2.ingredients && data2.ingredients.spices && (
          <h2>Spices (0{data2.ingredients.spices.length})</h2>
        )}
        <img src={arrowDown} alt="" />
      </div>
      {data2 && data2.ingredients && data2.ingredients.spices && (
        <div className="vegetable-container">
          {
            data2.ingredients.spices.map((spi, index) => (
              <div className="veg-item">
                <p>{spi.name}</p>
                <p>{spi.quantity}</p>  
              </div>
            ))
          }
        </div>
      )}
      <div className="vegetable">
        {data2 && data2.ingredients && data2.ingredients.appliances && (
          <h2>Appliances</h2>
        )}
      </div>
      {data2 && data2.ingredients && data2.ingredients.appliances && (
        <div className="appliance-container">
          {
            data2.ingredients.appliances.map((app, index) => (
              <div className="refri-inner">
                <img src={refri} alt="" />
                <p>{app.name}</p>
              </div>
            ))
          }
        </div>
      )}
    </>
  );
}

export default Recipe;
