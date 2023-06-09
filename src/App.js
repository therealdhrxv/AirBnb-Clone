import React, {useState} from "react";
import Home from "./components/Home";
import './styles/index.css';
import Favourites from "./components/Favourites";
import { Routes, Route, } from "react-router-dom"


function App() {
  const [favoriteCards, setFavoriteCards] = useState([]);

  const addToFavorites = (item) => {
    setFavoriteCards(prevState => [...prevState, item]);
  }

  const removeFromFavorites = (item) => {
    setFavoriteCards(prevState => prevState.filter(card => card.id !== item.id));
  }  
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} />}
        />
        <Route
          path="fav"
          element={<Favourites favoriteCards = {favoriteCards} />}
        />
      </Routes>
    </>
  );
  
}

export default App;
