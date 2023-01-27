import React from "react";

export default function Cards() {
    return (
        <div className="card" >

            <img src = {require("../images/katie-zaferes.png")} className="card--image" />


            <div className="card--stats" >  

                <img src = {require("../images/star.png")} /> 
                <span> &nbsp;5.0 </span>
                <span className="gray" > (6) • </span> 
                <span> &nbsp; USA </span>
                  
            </div>

            <div className="card--text" >
                <p className="card--firstline" > Life Lessons with Katie Zaferes </p>
                <p className="card--secondline" > <strong> From $136 / </strong> person </p>
            </div>




        </div>
    );
}