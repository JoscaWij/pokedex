import React from "react";
import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ListItemIcon from "./components/ListItemIcon";

function App() {
  return (
    <div className="app">
      <header className="headerSearch">
        Pokedex
        <input className="search" placeholder="  Enter Pokémon" />
      </header>
      <main className="pokemonList colorfulBoder">
        <List>
          <ListItem href="#">
            <ListItemIcon src="" alt=""></ListItemIcon>
          </ListItem>
        </List>
      </main>
      <footer>Tabs</footer>
    </div>
  );
}

export default App;
