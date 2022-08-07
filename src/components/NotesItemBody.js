import React from "react";
import { showFormattedDate } from "../utils";

function NotesItemBody ({ title, createdAt, body }) {
    return (
        <div className='notes-item__body'>
            <h3>{title}</h3>
            <time dateTime={createdAt}>{showFormattedDate(createdAt)}</time>
            <p>{body}</p>
        </div>
    );
}

export default NotesItemBody;