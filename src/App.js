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

      <Cards 
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
      
    </div>
  );
}

export default App;
