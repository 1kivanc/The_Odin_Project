import { useState, useEffect } from "react";
import axios from "axios";

const useFetchImages = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
      );
      const results = response.data.results;

      const pokemonData = await Promise.all(
        results.map(async (pokemon) => {
          const pokeResponse = await axios.get(pokemon.url);
          return {
            name: pokeResponse.data.name,
            image: pokeResponse.data.sprites.front_default,
          };
        })
      );

      setPokemons(pokemonData);
    };

    fetchPokemons();
  }, []);

  return pokemons;
};

export default useFetchImages;
