import React from 'react';
import '../styles/searchbar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search..."
        className="search-bar-input"
      />
    </div>
  );
};

export default SearchBar;
