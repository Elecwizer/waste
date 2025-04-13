import React, { useState } from 'react';
import '../styles/filterdropdown.css';

function FilterDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    'empty',
    'over 25% full',
    'over 50% full',
    'over 75% full',
    'full',
  ];

  return (
    <div className="filter-dropdown">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="filter-dropdown-button"
      >
        <span>Filters</span>
        <span className="dropdown-indicator">{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <div className="filter-dropdown-menu">
          <div className="menu-items">
            {options.map((label) => (
              <label key={label} className="menu-item">
                <input type="checkbox" className="menu-checkbox" />
                {label}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterDropdown;
