import React from "react";
import FavouriteCards from "./FavouriteCards";
import { Link } from "react-router-dom";



export default function Favourites (props) {
    return (
        <>
            <h1> Hey 👋 there, here is a list of your favourite cards :  </h1>

            {/* The component that will render the fav cards */}
            <FavouriteCards />

            <Link to = "/" className="btn btn-warning">
                Home
            </Link>
        </>
    );
}