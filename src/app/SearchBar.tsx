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
        style={{ padding: '10px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
      />
      <Button style={{ backgroundColor: '#1e90ff', color: '#fff', padding: '10px 20px', fontSize: '16px' }} onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
