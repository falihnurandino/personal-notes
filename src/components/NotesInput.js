import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

export default function NotesInput({ addNote }) {
  const [title, onTitleChangeEventHandler] = useInput('');
  const [body, onBodyChangeEventHandler] = useInput('', 'text');

  const onSubmitChangeEventHandler = (event) => {
    event.preventDefault();
    addNote({ title, body });
  };

  return (
    <div className="notes-app__input">
      <form onSubmit={onSubmitChangeEventHandler}>
        <input
          type="text"
          placeholder="Title"
          onChange={(event) => {
            onTitleChangeEventHandler(event);
          }}
          value={title}
          required
        />

        <div
          className="notes-app__input-body"
          data-placeholder="Write your note"
          contentEditable
          onInput={(event) => {
            onBodyChangeEventHandler(event);
          }}
          required
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

NotesInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};
