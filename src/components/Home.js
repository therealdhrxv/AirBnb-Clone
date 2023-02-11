import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import data from "../data";
import Card from "./Card";
import { Link } from "react-router-dom";

function Home() {
  const listOfCards = data.map ((item) => {
    return (
        <Card key = {item.id} item = {item} />
      );
    });
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list" >
        {listOfCards}
      </section>
      <Link to = "/fav" className='btn btn-danger'>
        Click here to see your favourite cards
      </Link>
    </>
  );
}

export default Home;