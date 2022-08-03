import React from "react";
import NotesItem from "./NotesItem";

function NotesList ({ list, deleteNote, archiveNote}) {
    if (list.length) {
        return (
            <div className="notes-list">
                {list.map((item) => (
                    <NotesItem
                        note={item}
                        key={item.id}
                        deleteNote={deleteNote}
                        archiveNote={archiveNote}
                    />
                ))}
            </div>
        );
    }

    return <p>Tidak ada catatan</p>;
}    

export default NotesList;