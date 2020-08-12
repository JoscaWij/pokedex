import React from "react";
import "./App.css";
import List from "./components/List";

function App() {
  return (
    <div className="app">
      <header className="headerSearch">
        Pokedex
        <input className="search" placeholder="  Enter Pokémon" />
      </header>
      <main className="pokemonList colorfulBoder">
        <List></List>
      </main>
      <footer>Tabs</footer>
    </div>
  );
}

export default App;
