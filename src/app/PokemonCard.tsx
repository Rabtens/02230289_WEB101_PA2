import React from 'react';

interface PokemonCardProps {
  pokemon: {
    id: number;
    name: string;
    sprites: { front_default: string };
    types: { type: { name: string } }[];
    height: number;
    weight: number;
    moves: { move: { name: string } }[];
  };
  onCatch: (pokemon: any) => void;
  onClose: () => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onCatch, onClose }) => {
  return (
    <div style={{ border: '1px solid #17c2e8', borderRadius: '8px', padding: '10px', margin: '10px', width: '300px', position: 'relative' }}>
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '5px',
          right: '5px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '5px',
        }}
      >
        X
      </button>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{ width: '200px', height: '200px' }} />
      <div>
        <p><strong>Type:</strong> {pokemon.types.map(type => type.type.name).join(', ')}</p>
        <p><strong>Height:</strong> {pokemon.height} decimetres</p>
        <p><strong>Weight:</strong> {pokemon.weight} hectograms</p>
        <p><strong>Moves:</strong> {pokemon.moves.slice(0, 5).map(move => move.move.name).join(', ')}</p>
      </div>
      <button onClick={() => onCatch(pokemon)} style={{ padding: '10px', marginTop: '10px' }}>Catch</button>
    </div>
  );
};

export default PokemonCard;
