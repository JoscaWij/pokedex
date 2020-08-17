import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemon } from "../api/pokemon";

function Pokemon() {
  const [pokemon, setPokemon] = useState(null);

  const { name } = useParams();
  useEffect(() => {
    async function fetchData() {
      const pokemonDetails = await fetchPokemon(name);
      setPokemon(pokemonDetails);
    }
    fetchData();
  }, [name]);

  if (pokemon === null) {
    return <div>no pokemon</div>;
  }
  return (
    <div>
      <span>Name: {pokemon.name}</span>
      <span>ID: {pokemon.id}</span>
      <div>
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      </div>
    </div>
  );
}

export default Pokemon;
