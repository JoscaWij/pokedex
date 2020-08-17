import React from "react";
import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ListItemAvatar from "./components/ListItemAvatar";
import ListItemText from "./components/ListItemText";

const bulbasaur = {
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
const allPokemons = [bulbasaur, ivysaur];

function App() {
  return (
    <div className="app">
      <header className="headerSearch">
        Pokedex
        <input className="search" placeholder="  Enter Pokémon" />
        <button onClick={() => alert("catch them!")}>Catch them all!</button>
      </header>
      <main className="pokemonList colorfulBorder">
        <List>
          {allPokemons.map((pokemon) => (
            <ListItem key={pokemon.id} href={pokemon.link}>
              <ListItemAvatar
                src={pokemon.imgSrc}
                alt={`Picture of ${pokemon.name}`}
              />
              <ListItemText
                title={pokemon.name}
                secondarytitle={`#${pokemon.id}`}
              />
            </ListItem>
          ))}
        </List>
      </main>
      <footer className="bottomNav">Tabs</footer>
    </div>
  );
}

export default App;
