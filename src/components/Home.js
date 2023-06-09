import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import data from "../data";
import Card from "./Card";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router";
import { useState } from "react";


function Home() {

  // Making an array to store all the favourite cards
  const [favouriteCards, setFavouriteCards] = useState([])


  // function to add the favourite cards
  const addToFavourite = (item) => {
    setFavouriteCards([...favouriteCards, item])
    navigate("/fav")
  }



  // 'listOfCard' will render all the cards
  const listOfCards = data.map ((item) => {
    return (
        <Card 
          key = {item.id}  // required to avoid the error regarding unique value
          item = {item}    // This will render the entire card
        />
      );
    });

    const navigate = useNavigate()


  return (
    <>
      <Navbar />
      <Hero />
      {/* React component names must always start with a capital letter, while HTML tags must be lowercase. */}
      <section className="cards-list" >
        {listOfCards}
      </section>
      <Link to = "/fav" className='btn text-light bg-danger'>
        Click here to see your favourite cards
      </Link>
    </>
  );

}

export default Home;