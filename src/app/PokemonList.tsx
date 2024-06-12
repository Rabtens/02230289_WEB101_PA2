import React from 'react';
import PokemonCard from './PokemonCard';

interface PokemonListProps {
  pokemons: any[];
  onCatch: (pokemon: any) => void;
  onPokemonClick: (pokemon: any) => void;
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons, onCatch, onPokemonClick }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} onClick={() => onPokemonClick(pokemon)}>
          <PokemonCard pokemon={pokemon} onCatch={onCatch} onClose={() => {}} />
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
