import React from "react";
import { Link } from "react-router-dom";


export default function Favourites () {
    return (
        <>
            <h1> These are your favourite cards vrooo! </h1>
            <Link to = "/" className="btn btn-warning">
                Home
            </Link>
        </>
    );
}