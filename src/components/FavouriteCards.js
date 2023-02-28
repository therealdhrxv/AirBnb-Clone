import React from "react";
import ArrayOfFavCards from "./ArrayOfFavCards";


export default function FavouriteCards() {


    // 'listOfCard' will render all the favourite cards
    const listOfFavCards = ArrayOfFavCards.map ((item) => {
    // return (
    //     <Card 
    //       key = {item.id}  // required to avoid the error regarding unique value
    //       item = {item}    // This will render the entire card
    //     />
    //   );
    });



    return (
        <>
            <section className="cards-list" >
                {listOfFavCards}
            </section>
        </>
    )
}