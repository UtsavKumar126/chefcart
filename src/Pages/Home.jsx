import React from "react";
import Header from "../Components/Header";
import Blackbar from "../Components/BlackBar";
import Calender from "../Components/Calender";
import Cuisine from "../Components/Cuisine";
import Popular from "../Components/Popular";
import Recommended from "../Components/Recommended";
import SelectItems from "../Components/SelectItems";

function Home() {
  return (
    <>
      <Header />
      <Blackbar />
      <Calender />
      <Cuisine />
      <Popular />
      <Recommended />
      <SelectItems />
    </>
  );
}

export default Home;
