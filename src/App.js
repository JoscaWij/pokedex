import React from "react";
import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ListItemIcon from "./components/ListItemIcon";
import ListItemText from "./components/ListItemText";

function App() {
  return (
    <div className="app">
      <header className="headerSearch">
        Pokedex
        <input className="search" placeholder="  Enter Pokémon" />
      </header>
      <main className="pokemonList colorfulBorder">
        <List>
          <ListItem href="#">
            <ListItemIcon src="A" alt="A" />
            <ListItemText title="Bulbasaur" secondarytitle="#001" />
            <ListItemIcon src="A" alt="A" />
            <ListItemIcon src="A" alt="A" />
          </ListItem>
          <ListItem href="#">
            <ListItemIcon src="A" alt="A" />
            <ListItemText title="Ivysaur" secondarytitle="#002" />
          </ListItem>
          <ListItem href="#">
            <ListItemIcon src="A" alt="A" />
            <ListItemText title="Venusaur" secondarytitle="#003" />
          </ListItem>
        </List>
      </main>
      <footer className="bottomNav">Tabs</footer>
    </div>
  );
}

export default App;
