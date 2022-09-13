import React from 'react';
import PropTypes from 'prop-types';
import showFormattedDate from '../utils';

function NotesItemBody({ title, createdAt, body }) {
  return (
    <div className="notes-item__body">
      <h3>{title}</h3>
      <time dateTime={createdAt}>{showFormattedDate(createdAt)}</time>
      <p>{body}</p>
    </div>
  );
}

NotesItemBody.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NotesItemBody;
