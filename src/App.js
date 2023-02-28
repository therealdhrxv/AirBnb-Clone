import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import FavouriteCards from "./components/FavouriteCards";
import './styles/index.css';

function App() {
  
  const cards = data.map ((item) => {
    return (
        < Card
          key = {item.id}
          item = {item} 
        />
      );
    });
    
    
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list" >
        {cards}
      </section>
      <FavouriteCards />
    </div>
  );
}

export default App;
