import React from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';

export default function DeleteButton({ id, onDelete }) {
  return (
    <button className="action" type="submit" onClick={() => onDelete(id)}>
      <FaTrash className="action" />
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
