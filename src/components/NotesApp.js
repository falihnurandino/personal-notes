import React from 'react';
import NotesHeader from './NotesHeader';
import NotesInput from './NotesInput';
import { getInitialData } from '../utils';
import NotesList from './NotesList';

class NotesApp extends React.Component {
    constructor() {
        super();

        this.state = {
            searchQuery: "",
            notes: getInitialData()
        };

        this.deleteNoteHandler = this.deleteNotesHandler.bind(this);
        this.archiveNoteHandler = this.archiveNotesHandler.bind(this);
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

        const list = searchQuery.trim().length ? notes.filter((note) => 
        note.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : notes;

        return list.sort((a, b) => a.date - b.date).reverse();
    }


    render() {
        return (
            <div className='notes-app'>
                <NotesHeader/>

                <div className='notes-app__main'>
                <h2>Create a note</h2>
                <NotesInput/>

                <h2>Notes</h2>
                <NotesList 
                list={this.notesList().filter((note) => !note.archived)}
                deleteNote={this.deleteNotesHandler}
                archiveNote={this.archiveNotesHandler}
                />

                <h2>Archived Notes</h2>
                <NotesList 
                list={this.notesList().filter((note) => note.archived)}
                deleteNote={this.deleteNotesHandler}
                archiveNote={this.archiveNotesHandler}
                />
                </div>

            </div>
        )
    }
}

export default NotesApp;