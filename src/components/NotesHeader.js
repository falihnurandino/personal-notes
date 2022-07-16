import React from 'react';

function NotesHeader() {
    return (
        <div className='notes-app__header'>
            <h1>Notes</h1>
            <input type="text" placeholder="Search..." />
        </div>
    )
}

export default NotesHeader;