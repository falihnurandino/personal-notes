import React from "react";

function DeleteButton ({ onClick }) {
    return (
        <button className="delete-button" onClick={onClick}>Delete</button>
    );
}

export default DeleteButton;