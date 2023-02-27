import React from "react";
import Home from "./components/Home";
import './styles/index.css';
import Favourites from "./components/Favourites";
import { Routes, Route, } from "react-router-dom"


function App() {  
  return (
    <>
      <Routes>
        <Route path = "/" element = {< Home />} />
        <Route path = "fav" element = {< Favourites />} />
      </Routes>
    </>
  );
  
}

export default App;
