import React from 'react';

function NotesHeader({ onTyping }) {
    return (
        <div className="notes-app__header">
            <h1>Notes</h1>
            <input type="text" placeholder="Search..." onChange={onTyping} />
        </div>
    )
}

export default NotesHeader;