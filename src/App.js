import React, { useEffect } from "react";
import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ListItemAvatar from "./components/ListItemAvatar";
import ListItemText from "./components/ListItemText";
import LoadingScreen from "./components/LoadingScreen";
import { fetchPokemons } from "./api/pokemon";

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
  const [pokemons, setPokemons] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const allPokemons = await fetchPokemons();
      setPokemons(allPokemons);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      {/* {isLoading ( */}
      <div className="app">
        <header className="headerSearch">
          Pokedex
          <input className="search" placeholder="  Enter Pokémon" />
          {/*  <button onClick={handleClick}>Catch them all!</button> */}
        </header>
        <main className="pokemonList colorfulBorder">
          <List>
            {pokemons?.map((pokemon) => (
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
      ) {/* : (
        <LoadingScreen />
      ) */}
    </>
  );
}

export default App;
