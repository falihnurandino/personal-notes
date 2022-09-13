import React from 'react';
import PropTypes from 'prop-types';

function ArchiveButton({ archived, onClick }) {
  return (
    <button className="archive-button" onClick={onClick}>
      {archived ? 'Move' : 'Archived'}
    </button>
  );
}

ArchiveButton.propTypes = {
  archived: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ArchiveButton;
