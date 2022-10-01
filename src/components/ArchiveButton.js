import React from 'react';
import PropTypes from 'prop-types';
import { FaArchive } from 'react-icons/fa';

export default function ArchiveButton({
  id,
  archived,
  onArchive,
  onUnArchive,
}) {
  return (
    <button
      className="action"
      onClick={() => (archived ? onUnArchive(id) : onArchive(id))}
    >
      {archived ? (
        <FaArchive className="action" fill="#fff" />
      ) : (
        <FaArchive className="action" />
      )}
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnArchive: PropTypes.func.isRequired,
};
