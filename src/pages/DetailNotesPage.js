import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NotesDetail from '../components/NotesDetail';
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from '../utils/local-data';
import PageNotFound from './PageNotFound';

export default function DetailNotesPage() {
  let { id } = useParams();
  let note = getNote(id);

  const navigate = useNavigate();

  function onArchiveHandler(id) {
    archiveNote(id);
    navigate('/archives');
  }
  function onUnArchiveHandler(id) {
    unarchiveNote(id);
    navigate('/');
  }
  function onDeleteHandler(id) {
    deleteNote(id);
    navigate('/');
  }

  return (
    <>
      {note ? (
        <NotesDetail
          note={note}
          onArchive={onArchiveHandler}
          onUnArchive={onUnArchiveHandler}
          onDelete={onDeleteHandler}
        />
      ) : (
        <PageNotFound />
      )}
    </>
  );
}
