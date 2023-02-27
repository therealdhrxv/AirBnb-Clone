import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import data from "../data";
import Card from "./Card";
import { Link } from "react-router-dom";

function Home() {

  // 'listOfCard' will render all the cards
  const listOfCards = data.map ((item) => {
    return (
        <Card 
          key = {item.id}  // required to avoid the error regarding unique value
          item = {item}    // This will render the entire card
        />
      );
    });

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list" >
        {listOfCards}
      </section>
      <Link to = "/fav" className='btn text-light bg-dark '>
        Click here to see your favourite cards
      </Link>
    </>
  );

}

export default Home;