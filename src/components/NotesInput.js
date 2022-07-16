import React from 'react';

function NotesInput() {
    return (
        <div className='notes-app__input'>
            <form>
                <input type='text' placeholder='Title'/>
                <textarea type='text' placeholder='Write your note'></textarea>
                <button type='submit' >Create</button>
            </form>
        </div>
    )
}

export default NotesInput;