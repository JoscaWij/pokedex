import React, { useEffect } from "react";
import "./App.css";
import Pokemons from "./pages/Pokemons";

/* const bulbasaur = {
  name: "Bulbasaur",
  imgSrc: "https://img.pokemondb.net/artwork/large/bulbasaur.jpg",
  id: "001",
  link: "#bulbasaur",
};
const ivysaur = {
  name: "Ivysaur",
  imgSrc: "https://img.pokemondb.net/artwork/large/ivysaur.jpg",
  id: "002",
  link: "#ivysaur",
};
const allPokemons = [bulbasaur, ivysaur]; */

function App() {
  return (
    <>
      {/* {isLoading ( */}
      <div className="app">
        <Pokemons />
        <footer className="bottomNav">Tabs</footer>
      </div>
      {/* : (
        <LoadingScreen />
      ) */}
    </>
  );
}

export default App;
