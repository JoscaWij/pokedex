import React, { useEffect } from "react";
import "./App.css";
import Pokemons from "./pages/Pokemons";
import { Router, Switch, Route } from "react-router-dom";

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
    <Router>
      {/* {isLoading ( */}
      <div className="app">
        <Switch>
          <Route path="/pokemons">
            <Pokemons />
          </Route>
        </Switch>
        <footer className="bottomNav">Tabs</footer>
      </div>
      {/* : (
        <LoadingScreen />
      ) */}
    </Router>
  );
}

export default App;
