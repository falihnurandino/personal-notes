import React from 'react';
import { useNavigate } from 'react-router-dom';
import NotesInput from '../components/NotesInput';
import { addNote } from '../utils/network-data';

export default function AddPage() {
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    addNote(note);
    navigate('/');
  }
  return (
    <section>
      <NotesInput addNote={onAddNoteHandler} />
    </section>
  );
}
