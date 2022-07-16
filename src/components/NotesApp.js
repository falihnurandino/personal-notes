import React from 'react';
import NotesHeader from './NotesHeader';
import NotesInput from './NotesInput';

class NotesApp extends React.Component {
    render() {
        return (
            <div className='notes-app'>
                <NotesHeader/>

                <div className='notes-app__main'>
                <h2>Create a note</h2>
                <NotesInput/>
                </div>
            </div>
        )
    }
}

export default NotesApp;