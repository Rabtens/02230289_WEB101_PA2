import create from 'zustand';

interface Pokemon {
  id: number;
  name: string;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
  height: number;
  weight: number;
  moves: { move: { name: string } }[];
}

interface PokemonStore {
  caughtPokemons: Pokemon[];
  catchPokemon: (pokemon: Pokemon) => void;
}

const usePokemonStore = create<PokemonStore>(set => ({
  caughtPokemons: [],
  catchPokemon: (pokemon) => set(state => ({
    caughtPokemons: [...state.caughtPokemons, pokemon]
  }))
}));

export default usePokemonStore;
