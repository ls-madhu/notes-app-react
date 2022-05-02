import React, { useRef } from "react";

import "./FilenameInput.css";
import { MdEdit } from "react-icons/md";

function FilenameInput({ notes, setNotes, currentNoteIndex }) {
  const inputRef = useRef(null);

  const buttonClickHandler = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const handleFilenameChange = (e) => {
    setNotes((prevNotes) => {
      const time = new Date();
      const timeString = time.toLocaleTimeString([], {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      return prevNotes.slice(0, currentNoteIndex).concat(
        [
          {
            ...prevNotes[currentNoteIndex],
            title: e.target.value,
            time: timeString,
          },
        ],
        prevNotes.slice(currentNoteIndex + 1)
      );
    });
  };

  return (
    <div className="filename-input">
      <input
        type="text"
        name="filename"
        value={notes[currentNoteIndex].title}
        onChange={handleFilenameChange}
        placeholder="File name"
        maxLength="50"
        disabled
        ref={inputRef}
        onBlur={() => (inputRef.current.disabled = true)}
      />
      <button
        className="tool-btn"
        id="filename-edit-btn"
        onClick={buttonClickHandler}
        title="Edit Filename"
      >
        <MdEdit />
      </button>
    </div>
  );
}

export default FilenameInput;
