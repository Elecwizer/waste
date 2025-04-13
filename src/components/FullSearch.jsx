import React from 'react';
import SearchBar from './SearchBar';
import FilterDropdown from './FilterDropdown';
import '../styles/fullsearch.css';

const FullSearch = () => {
  return (
    <div className="full-search">
      {/* Search */}
      <div className="full-search-item">
        <SearchBar />
      </div>
      {/* Filter */}
      <div className="full-search-item">
        <FilterDropdown />
      </div>
    </div>
  );
};

export default FullSearch;
