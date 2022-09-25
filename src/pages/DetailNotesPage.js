import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NotesDetail from '../components/NotesDetail';
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from '../utils/local-data';

export default function DetailNotesPage() {
  let { id } = useParams();
  let note = getNote(id);

  const navigate = useNavigate();

  function onArchiveHandler(id) {
    archiveNote(id);
    navigate('/');
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
      <NotesDetail
        note={note}
        onArchive={onArchiveHandler}
        onUnArchive={onUnArchiveHandler}
        onDelete={onDeleteHandler}
      />
    </>
  );
}
