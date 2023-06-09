import React from "react";
import Card from "./Card";

export default function FavouriteCards({ favoriteCards }) {
  return (
    <section className="cards-list">
      {favoriteCards && favoriteCards.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </section>
  );
}
