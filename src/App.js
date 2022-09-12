import React from 'react';
import NotesHeader from './components/NotesHeader';
import NotesInput from './components/NotesInput';
import NotesList from './components/NotesList';
import { getAllNotes } from './utils/local-data';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchQuery: '',
      notes: getAllNotes(),
    };

    this.addNotesHandler = this.addNotesHandler.bind(this);
    this.deleteNotesHandler = this.deleteNotesHandler.bind(this);
    this.archiveNotesHandler = this.archiveNotesHandler.bind(this);
    this.searchTypingHandler = this.searchTypingHandler.bind(this);
  }

  addNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        ...prevState,
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  searchTypingHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        searchQuery: event.target.value,
      };
    });
  }

  deleteNotesHandler(id) {
    this.setState((prevState) => {
      return {
        ...prevState,
        notes: prevState.notes.filter((note) => note.id !== id),
      };
    });
  }

  archiveNotesHandler(id) {
    const { notes } = this.state;
    notes.forEach((note) => {
      if (note.id === id) note.archived = !note.archived;
    });
    this.setState((prevState) => ({ ...prevState, notes }));
  }

  notesList() {
    const { searchQuery, notes } = this.state;

    const list = searchQuery.trim().length
      ? notes.filter((note) =>
          note.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : notes;

    return list.sort((a, b) => a.date - b.date).reverse();
  }

  render() {
    return (
      <div className="notes-app">
        <NotesHeader onTyping={this.searchTypingHandler} />

        <div className="notes-app__main">
          <h2 className="notes-app__input-title">Create a note</h2>
          <NotesInput addNote={this.addNotesHandler} />

          <h2 className="notes-app__list-title">Active Notes</h2>
          <NotesList
            list={this.notesList().filter((note) => !note.archived)}
            deleteNote={this.deleteNotesHandler}
            archiveNote={this.archiveNotesHandler}
          />

          <h2 className="notes-app__archived-title">Archived Notes</h2>
          <NotesList
            list={this.notesList().filter((note) => note.archived)}
            deleteNote={this.deleteNotesHandler}
            archiveNote={this.archiveNotesHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
