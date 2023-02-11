import React from "react";



export default function Card (props) {

    // Logic to dynamically render the badge of either 'SOLD OUT' or 'ONLINE'
    let badge
    if (props.item.openSpots === 0) {
        badge = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badge = "ONLINE"
    }   

    

    // handleClick logic => To render the favourite cards into the 'http://localhost:3000/fav' page
    function handleClick () {
        alert(`You've clicked on activity number : ${props.item.id}`);
    }



    return (
        <div className="card" >

            { badge && <div className="card--badge" > {badge} </div> }   {/* see if 'sold out' badge is rendered on the screen or not */}

            {/* like button */}
            <div className="card--like" >
                <span class="material-symbols-outlined" onClick={handleClick} >
                    favorite
                </span> 
            </div>

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
