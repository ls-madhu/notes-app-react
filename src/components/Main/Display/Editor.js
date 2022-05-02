import React from "react";

import "./Editor.css";

function Editor({ notes, setNotes, currentNoteIndex }) {
  const textChangeHandler = (e) => {
    const time = new Date();
    const timeString = time.toLocaleTimeString([], {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    setNotes((prevNotes) => {
      const modifiedNote = {
        ...prevNotes[currentNoteIndex],
        time: timeString,
        content: e.target.value,
      };
      return prevNotes
        .slice(0, currentNoteIndex)
        .concat([modifiedNote], prevNotes.slice(currentNoteIndex + 1));
    });
  };

  return (
    <div className="editor">
      <textarea
        autoFocus
        onChange={textChangeHandler}
        value={notes[currentNoteIndex].content}
      ></textarea>
    </div>
  );
}

export default Editor;
