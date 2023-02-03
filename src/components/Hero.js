import React from "react";

export default function Navbar() {
    return (
        <section className="hero" >
            <img src = { require("../images/photo-grid.png") } alt="None" className="hero--photo" />
            <h1 className="hero--title"> Online experiences </h1> <br>
            </br> 
            <p className="hero--text" > Join unique interactive activities led by <br></br>
                 one-of-a-kind hosts- all without leaving <br></br>
                 home. </p>
        </section>
    );
}