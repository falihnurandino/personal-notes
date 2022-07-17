import React from 'react';

function NotesInput() {
    return (
        <div className='notes-app__input'>
            <form>
                <input type='text' placeholder='Title' required/>
                <textarea type='text' placeholder='Write your note' required></textarea>
                <button type='submit' >Create</button>
            </form>
        </div>
    )
}

export default NotesInput;