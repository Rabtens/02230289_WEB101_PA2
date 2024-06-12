import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Pokemon"
      />
      <Button   className='bg-blue-500 font-serif' onClick={handleSearch} >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;

