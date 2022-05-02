import React from "react";
import { IconContext } from "react-icons";
import { MdAccessTime } from "react-icons/md";

import "./SidebarNote.css";

function SidebarNote({
  title,
  time,
  activeNote,
  setActiveNote,
  id,
  notes,
  setNotes,
}) {
  const handleNoteClick = () => {
    setActiveNote(id);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    const index = notes.findIndex((note) => note.id === id);
    if (id === activeNote || notes.length === 1) {
      setActiveNote(null);
    }
    setNotes((prevNotes) => {
      return prevNotes.slice(0, index).concat(prevNotes.slice(index + 1));
    });
  };
  return (
    <div
      className={`sidebar-note ${activeNote === id && "active"}`}
      onClick={handleNoteClick}
    >
      <div className="sidebar-note__top">
        {title ? (
          <h3 className="note-title">
            {title.slice(0, 20) + `${title.length > 20 ? ".." : ""}`}
          </h3>
        ) : (
          <h3 className="note-title">Untitled Note</h3>
        )}
        <button className="tool-btn" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
      <small className="note-modified">
        <IconContext.Provider value={{ size: "15px" }}>
          <MdAccessTime />
        </IconContext.Provider>
        <b>Last Modified:</b> {time}
      </small>
    </div>
  );
}

export default SidebarNote;
