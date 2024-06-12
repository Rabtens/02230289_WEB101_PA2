"use client";
import React, { useState, useEffect } from 'react';
import SearchBar from '../app/SearchBar';
import PokemonList from '../app/PokemonList';
import usePokemonStore from '../stores/usePokemonStore';
import CaughtPokemonList from '../app/CaughtPokemonList';
import Pagination from '../app/Pagination';
import PokemonCard from '../app/PokemonCard';

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState([]);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isSpecificSearch, setIsSpecificSearch] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const catchPokemon = usePokemonStore(state => state.catchPokemon);

  const fetchPokemons = async (page: number) => {
    const limit = 10;
    const offset = (page - 1) * limit;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await response.json();
    const results = await Promise.all(data.results.map(async (result: any) => {
      const res = await fetch(result.url);
      return res.json();
    }));
    setPokemons(results);
    setTotalPages(Math.ceil(data.count / limit));
  };

  const fetchPokemonByName = async (name: string) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
      const data = await response.json();
      setSelectedPokemon(data);
      setIsSpecificSearch(true);
    } catch (error) {
      console.error('Pokemon not found', error);
      setPokemons([]);
      setTotalPages(0);
    }
  };

  useEffect(() => {
    if (query) {
      fetchPokemonByName(query);
      setIsSpecificSearch(true);
    } else {
      fetchPokemons(currentPage);
      setIsSpecificSearch(false);
    }
  }, [query, currentPage]);

  const handleSearch = (query: string) => {
    setQuery(query);
    setCurrentPage(1);
    setSelectedPokemon(null);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSelectedPokemon(null);
  };

  const handlePokemonClick = async (name: string) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
      const data = await response.json();
      setSelectedPokemon(data);
      setIsSpecificSearch(true);
    } catch (error) {
      console.error('Pokemon not found', error);
      setSelectedPokemon(null);
    }
  };

  const handleClose = () => {
    setSelectedPokemon(null);
    setIsSpecificSearch(false);
  };

  return (
    <div>
      <h1>Pokedex</h1>
      <CaughtPokemonList />
      <SearchBar  onSearch={handleSearch} />
      {selectedPokemon ? (
        <PokemonCard pokemon={selectedPokemon} onCatch={catchPokemon} onClose={handleClose} />
      ) : (
        <PokemonList pokemons={pokemons} onCatch={catchPokemon} onPokemonClick={handlePokemonClick} />
      )}
      {!isSpecificSearch && totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default Home;
