import React, { useEffect } from "react";
import List from "../components/List";
import ListItem from "../components/ListItem";
import ListItemAvatar from "../components/ListItemAvatar";
import ListItemText from "../components/ListItemText";
/* import LoadingScreen from "../components/LoadingScreen"; */
import { fetchPokemons } from "../api/pokemon";
import LoadingScreen from "../components/LoadingScreen";

function Pokemons(props) {
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

  if (isLoading || !pokemons) {
    return <LoadingScreen />;
  }
  return (
    <>
      <header className="headerSearch">
        Pokedex
        <input className="search" placeholder="  Enter Pokémon" />
        {/*  <button onClick={handleClick}>Catch them all!</button> */}
      </header>
      <main className="pokemonList colorfulBorder">
        <List>
          {pokemons?.map((pokemon) => (
            <ListItem key={pokemon.id} href={`/pokemons/${pokemon.link}`}>
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
    </>
  );
}

export default Pokemons;
