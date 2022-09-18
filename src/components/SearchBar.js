import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ keyword, keywordChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </div>
  );
}

SearchBar.propTypes = {
  keywordChange: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
};

export default SearchBar;
