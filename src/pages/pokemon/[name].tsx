import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const PokemonDetails: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;
  const [pokemon, setPokemon] = useState<any>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      if (name) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        setPokemon(data);
      }
    };

    fetchPokemon();
  }, [name]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Type: {pokemon.types.map(type => type.type.name).join(', ')}</p>
      <p>Abilities: {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
      <p>Height: {pokemon.height} decimetres</p>
      <p>Weight: {pokemon.weight} hectograms</p>
      <p>Stats:</p>
      <ul>
        {pokemon.stats.map(stat => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
      <p>Moves: {pokemon.moves.slice(0, 10).map(move => move.move.name).join(', ')}</p>
    </div>
  );
};

export default PokemonDetails;
