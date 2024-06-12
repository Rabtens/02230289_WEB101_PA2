// PokemonList.tsx

import React from 'react';
import PokemonCard from './PokemonCard';

interface PokemonListProps {
  pokemons: any[];
  onCatch: (pokemon: any) => void;
  onPokemonClick: (name: string) => void; // New prop
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons, onCatch, onPokemonClick }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} onCatch={onCatch} onPokemonClick={onPokemonClick} />
      ))}
    </div>
  );
};

export default PokemonList;
