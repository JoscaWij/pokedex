import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemon } from "../api/pokemon";
import LoadingScreen from "../components/LoadingScreen";

function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { name } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const pokemonDetails = await fetchPokemon(name);
        setPokemon(pokemonDetails);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error);
      }
    }
    fetchData();
  }, [name]);

  if (error) {
    return <div>{`You may need some help: ${error}`}</div>;
  }

  if (loading || !pokemon) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <span>Name: {pokemon.name}</span>
      <div>ID: {pokemon.id}</div>
      <div>
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      </div>
    </div>
  );
}

export default Pokemon;
