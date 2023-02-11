import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Card from "./Card";
import data from "../data";


export default function Favourites (props) {
    // [item, setItem] = useState(0);

    const listOfFavCards = data.map ((item) => {
            if (props.item.liked === true) {
                return (
                        <Card key = {item.id} item = {item} />
                    );
            }
        });   
    // return statement    
    return (
        <>
            <h1> Here is a list of your favourite cards :  </h1>
            {/* <Card /> */}
            <Link to = "/" className="btn btn-warning">
                Home
            </Link>
            <section className="cards-list" >
                {listOfFavCards}
            </section>
        </>
    );
}