import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import NotesItemBody from "./NotesItemBody";

function NotesItem ({ note, deleteNote, archiveNote }) {
    return (
        <div className="notes-item">
            <NotesItemBody title={note.title} createdAt={note.createdAt} body={note.body}/>

        <div className="notes-item__actions">
            <DeleteButton onClick={() => deleteNote(note.id)}/>
            <ArchiveButton archived={note.archived} onClick={() => archiveNote(note.id)}/>

        </div>
        </div>
    );
}

export default NotesItem;