import React, { useEffect, useState } from 'react';
import usePokemonStore from '../stores/usePokemonStore';

const CaughtPokemonList: React.FC = () => {
  const caughtPokemons = usePokemonStore((state) => state.caughtPokemons);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Or a loading spinner or placeholder
  }

  return (
    <div>
      <h2>Caught Pokemons</h2>
      <ul>
        {caughtPokemons.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CaughtPokemonList;
