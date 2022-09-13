import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ onTyping }) {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." onChange={onTyping} />
    </div>
  );
}

SearchBar.propTypes = {
  onTyping: PropTypes.func.isRequired,
};

export default SearchBar;
