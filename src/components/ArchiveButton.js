import React from 'react';
import PropTypes from 'prop-types';
import { MdArchive } from 'react-icons/md';

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
      {archived ? <MdArchive fill="#fff" /> : <MdArchive />}
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnArchive: PropTypes.func.isRequired,
};
