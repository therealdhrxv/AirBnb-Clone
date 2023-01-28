import React from "react";

export default function Cards(props) {
    return (
        <div className="card" >

            <img src = { require( "../images/" + props.img ) } className="card--image" />


            <div className="card--stats" >  

                <img src = { require("../images/star.png") } /> 
                <span> &nbsp; {props.rating} </span>
                <span className="gray" > ({props.reviewCount}) • </span> 
                <span> &nbsp; {props.country} </span>
                  
            </div>

            <div className="card--text" >
                <p className="card--firstline" > {props.title} </p>
                <p className="card--secondline" > <strong> From ${props.price} / </strong> person </p>
            </div>




        </div>
    );
}