import React from "react";

function ArchiveButton ({ archived, onClick }) {
    return (
        <button className="warning" onClick={onClick}>
            {archived ? "Move" : "Archived"}
        </button>
    );
}

export default ArchiveButton;