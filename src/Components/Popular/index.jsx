import React, { useContext } from "react";
import "./styles.css";
import { DataContext } from "../../DataProvider";

function Popular() {
  const { data } = useContext(DataContext);
  return (
    <div className="popular-main">
      <h2>Popular Dishes</h2>
      <div className="popular-inner">
        {data &&
          data.popularDishes &&
          data.popularDishes.map((dish, i) => (
            <div className="outline">
              <div
                key={i}
                className="min-size"
                style={{
                  backgroundImage: `url(${dish.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "600",
                  padding: "10px",
                  cursor: "pointer",
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                }}
              >
                {dish.name}
              </div>
            </div>
          ))}
      </div>
      <div className="space"></div>
    </div>
  );
}

export default Popular;
