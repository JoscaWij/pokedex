import React from "react";
import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ListItemAvatar from "./components/ListItemAvatar";
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
            <ListItemAvatar src="A" alt="A" />
            <ListItemText title="Bulbasaur" secondarytitle="#001" />
            {/* <ListItemIcon src="B" alt="B" />
            <ListItemIcon src="B" alt="B" /> */}
          </ListItem>
          <ListItem href="#">
            <ListItemAvatar src="A" alt="A" />
            <ListItemText title="Ivysaur" secondarytitle="#002" />
          </ListItem>
          <ListItem href="#">
            <ListItemAvatar src="A" alt="A" />
            <ListItemText title="Venusaur" secondarytitle="#003" />
          </ListItem>
        </List>
      </main>
      <footer className="bottomNav">Tabs</footer>
    </div>
  );
}

export default App;
