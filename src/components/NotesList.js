import React from 'react';
import PropTypes from 'prop-types';
import NotesItem from './NotesItem';

export default function NotesList({ notes }) {
  if (notes.length) {
    return (
      <div className="notes-list">
        {notes.map((note) => (
          <NotesItem key={note.id} id={note.id} note={note} />
        ))}
      </div>
    );
  }

  return (
    <div className="notes-list-empty not-found">
      <h2>No Notes Found</h2>
    </div>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
