import create from 'zustand';
import { persist } from 'zustand/middleware';

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

const usePokemonStore = create<PokemonStore>(
  persist(
    (set) => ({
      caughtPokemons: [],
      catchPokemon: (pokemon) => set((state) => ({
        caughtPokemons: [...state.caughtPokemons, pokemon],
      })),
    }),
    {
      name: 'pokemon-storage', // name of the item in the storage (must be unique)
      getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
    }
  )
);

export default usePokemonStore;
