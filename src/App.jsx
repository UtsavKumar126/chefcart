import { useState,useEffect, useContext } from "react";
import "./App.css";
import Header from "./Components/Header";
import Blackbar from "./Components/BlackBar";
import Calender from "./Components/Calender";
import Cuisine from "./Components/Cuisine";
import Popular from "./Components/Popular";
import { DataContext } from "./DataProvider";
import Recommended from "./Components/Recommended";
import SelectItems from "./Components/SelectItems";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Recipe from "./Pages/Recipe/Recipe";


function App() {
  const {data, setData} = useContext(DataContext);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
      );
      const newData=await response.json();
      setData(newData);
    }
    fetchData();
  }, []);
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/recipe" element={<Recipe/>} />
    </Routes>
      
    </>
  );
}

export default App;
