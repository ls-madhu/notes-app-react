import React from "react";
import download from "downloadjs";

import "./Toolbar.css";
import {
  MdDownload,
  MdLightMode,
  MdNightsStay,
  MdRemoveRedEye,
} from "react-icons/md";
import { RiFileEditFill } from "react-icons/ri";

function Toolbar({
  isEditing,
  setIsEditing,
  notes,
  theme,
  setTheme,
  activeNote,
  currentNoteIndex,
}) {
  const toggleMode = () => {
    if (isEditing) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleDownloadClick = () => {
    const filename = `${
      notes[currentNoteIndex].title.split(" ").join("_").toLowerCase() ||
      "untitled-note"
    }.md`;
    download(notes[currentNoteIndex].content, filename, "text/markdown");
  };

  if (activeNote) {
    return (
      <div className="toolbar">
        <div className="editor-icons">
          <button className="tool-btn" title="Toggle Mode" onClick={toggleMode}>
            {isEditing ? <MdRemoveRedEye /> : <RiFileEditFill />}
          </button>
          <button
            onClick={handleDownloadClick}
            className="tool-btn"
            title="Download"
          >
            <MdDownload />
          </button>
        </div>
        <div className="global-icons">
          <button
            className="tool-btn"
            id="theme-toggle-btn"
            onClick={toggleTheme}
            title="Toggle Theme"
          >
            {theme === "light" ? <MdNightsStay /> : <MdLightMode />}
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="toolbar">
        <div></div>
        <div className="global-icons">
          <button
            className="tool-btn"
            id="theme-toggle-btn"
            onClick={toggleTheme}
            title="Toggle Theme"
          >
            {theme === "light" ? <MdNightsStay /> : <MdLightMode />}
          </button>
        </div>
      </div>
    );
  }
}

export default Toolbar;
