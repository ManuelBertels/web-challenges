import { useState } from "react";
import { useEffect } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        setPokemon(data.results);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadPokemon();
  }, []);

  if (!pokemon) {
    return null;
  }

  return (
    <main>
      <button type="button">Load Pokémon</button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
