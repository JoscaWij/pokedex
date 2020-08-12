import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="headerSearch">
        Pokedex
        <input className="search" placeholder="  Enter Pokémon" />
      </header>
      <main className="pokemonList">Pokemons-List</main>
      <div>Tabs</div>
    </div>
  );
}

export default App;
