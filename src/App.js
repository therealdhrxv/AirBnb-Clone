import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import './styles/index.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
    </div>
  );
}

export default App;
