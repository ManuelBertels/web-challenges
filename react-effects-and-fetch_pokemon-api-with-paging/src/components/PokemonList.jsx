import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${index}`
        );
        const data = await response.json();
        console.log(data);
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [index]);

  return (
    <main>
      <button onClick={() => setIndex(index - 1)} type="button">
        Previous Page
      </button>
      <button onClick={() => setIndex(index + 1)} type="button">
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
