import React from "react";
import FavouriteCards from "./FavouriteCards";
import { Link, useLocation } from "react-router-dom";




export default function Favourites ({favoriteCards}) {
    console.log(favoriteCards)

    return (
        <>
            <h1> Hey 👋 there, here is a list of your favourite cards :  </h1>

            {/* The component that will render the fav cards */}
            {/* <FavouriteCards favoriteCards = {favoriteCards} /> */}
            <FavouriteCards favoriteCards={favoriteCards} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} />


            <Link to = "/" className="btn btn-warning">
                Home
            </Link>
        </>
    );
}