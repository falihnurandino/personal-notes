import React from 'react';
import PropTypes from 'prop-types';
import NotesItem from './NotesItem';
import LocaleContext from '../contexts/LocaleContext';

export default function NotesList({ notes }) {
  const { locale } = React.useContext(LocaleContext);

  return (
    <>
      {notes.length ? (
        <div className="notes-list">
          {notes.map((note) => (
            <NotesItem key={note.id} id={note.id} note={note} />
          ))}
        </div>
      ) : (
        <div className="notes-list-empty not-found">
          <h2>
            {locale === 'en' ? 'No Notes Found' : 'Catatan Tidak Ditemukan'}
          </h2>
        </div>
      )}
      ;
    </>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
