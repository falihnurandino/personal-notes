import React from 'react';
import PropTypes from 'prop-types';
import showFormattedDate from '../utils';
import { Link } from 'react-router-dom';

export default function NotesItem({ note }) {
  const { id, title, body, createdAt } = note;
  const formattedDate = showFormattedDate(createdAt);

  return (
    <div className="notes-item">
      <h3 className="notes-item__title">
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <time className="notes-item__createdAt">{formattedDate}</time>
      <p className="notes-item__body">{body}</p>
    </div>
  );
}

NotesItem.propTypes = {
  note: PropTypes.object.isRequired,
};
