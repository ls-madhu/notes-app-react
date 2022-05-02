import React, { useState } from "react";
import Editor from "./Display/Editor";
import Preview from "./Display/Preview";
import Toolbar from "./Toolbar/Toolbar";
import FilenameInput from "./FilenameInput/FilenameInput";

import "./Main.css";

function Main({ notes, setNotes, theme, setTheme, activeNote }) {
  const [isEditing, setIsEditing] = useState(true);
  const currentNoteIndex = notes.findIndex((note) => note.id === activeNote);

  if (activeNote) {
    return (
      <div className="main">
        <FilenameInput
          notes={notes}
          setNotes={setNotes}
          currentNoteIndex={currentNoteIndex}
        />
        {isEditing ? (
          <Editor
            notes={notes}
            setNotes={setNotes}
            currentNoteIndex={currentNoteIndex}
          />
        ) : (
          <Preview
            notes={notes}
            theme={theme}
            currentNoteIndex={currentNoteIndex}
          />
        )}
        <Toolbar
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          notes={notes}
          currentNoteIndex={currentNoteIndex}
          theme={theme}
          setTheme={setTheme}
          activeNote={activeNote}
        />
      </div>
    );
  } else {
    return (
      <div className="main">
        <div className="no-active-note">No Active Note</div>
        <Toolbar
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          theme={theme}
          setTheme={setTheme}
          activeNote={activeNote}
        />
      </div>
    );
  }
}

export default Main;
