// src/components/SearchBar.js
import React, { useState, useEffect } from 'react';
import './App.css';

const SearchBar = ({ onSearch, suggestions }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="search-bar-container">
      <h1 className="search-heading">Search Photos</h1> {/* New heading */}
      <form onSubmit={handleSubmit} className="search-bar">
        <input
          type="text"
          placeholder="Search for images..."
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <div className="suggestions">
        {suggestions.map((suggestion, index) => (
          <div key={index} onClick={() => onSearch(suggestion)}>
            {suggestion}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
