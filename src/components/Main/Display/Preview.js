import React from "react";
import ReactMarkdown from "react-markdown";

import "./Preview.css";
import "../../../github-markdown-light.css";
import "../../../github-markdown-dark.css";

function Preview({ notes, theme, currentNoteIndex }) {
  return (
    <div className="preview">
      <ReactMarkdown
        className={theme === "light" ? "markdown-body" : "markdown-body-dark"}
      >
        {notes[currentNoteIndex].content}
      </ReactMarkdown>
    </div>
  );
}

export default Preview;
