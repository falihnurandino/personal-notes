import React from 'react';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';

export default function SearchBar({ keyword, keywordChange }) {
  const { locale } = React.useContext(LocaleContext);
  return (
    <div className="search-bar" tabIndex="0">
      <input
        type="text"
        placeholder={
          locale === 'en' ? 'Search by title...' : 'Cari berdasarkan judul...'
        }
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
