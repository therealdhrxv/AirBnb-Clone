import React from "react";
import { useState } from "react";

export default function Card (props) {

    // Logic to dynamically render the badge of either 'SOLD OUT' or 'ONLINE'
    let badge
    if (props.item.openSpots === 0) {
        badge = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badge = "ONLINE"
    }   


    // let heartIcon = fav.isFavorite ? "liked.png" : "notLiked.png"



    return (
        <div className="card" >

            { badge && <div className="card--badge" > {badge} </div> }   {/* see if 'sold out' badge is rendered on the screen or not */}

            <img src = { require( "../images/liked.png" ) } className="card--like" alt="" />

            <img src = { require( "../images/" + props.item.coverImg ) } className="card--image" alt="" />


            <div className="card--stats" >  
                <img src = { require("../images/star.png") } className = "card--star" alt="" /> 
                <span> &nbsp; {props.item.stats.rating} </span>
                <span className="gray" > ({props.item.stats.reviewCount}) • </span> 
                <span> &nbsp; {props.item.location} </span>
            </div>

            <div className="card--text" >
                <p className="card--firstline" > {props.item.title} </p>
                <p className="card--secondline" > <strong> From ${props.item.price} / </strong> person </p>
            </div>


        </div>
    );
}





































