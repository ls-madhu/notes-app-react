import React from "react";
import { v4 as uuidv4 } from "uuid";
import SidebarNote from "./SidebarNote";
import SidebarToggle from "./SidebarToggle";

import "./Sidebar.css";
import { IconContext } from "react-icons";
import { FaMarkdown } from "react-icons/fa";
import { MdAddBox } from "react-icons/md";

function Sidebar({
  theme,
  notes,
  setNotes,
  activeNote,
  setActiveNote,
  sideBarExpanded,
  setSideBarExpanded,
}) {
  let iconColor = "#6b76f3";

  const handleAddNoteClick = () => {
    setNotes((prevNotes) => {
      const time = new Date();
      const timeString = time.toLocaleTimeString([], {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      if (
        prevNotes.length !== 0 &&
        prevNotes[0].title === "Untitled Note" &&
        prevNotes[0].content === ""
      ) {
        return [
          {
            ...prevNotes[0],
            time: timeString,
          },
          ...prevNotes.slice(1),
        ];
      }
      return [
        {
          title: "Untitled Note",
          time: timeString,
          content: "",
          id: uuidv4(),
        },
        ...prevNotes,
      ];
    });
  };

  return (
    <IconContext.Provider value={{ size: "24px", color: `${iconColor}` }}>
      <div className="sidebar-container">
        <div className={sideBarExpanded ? "sidebar" : "sidebar hide"}>
          <div className="sidebar-header">
            <div className="sidebar-header__logo">
              <FaMarkdown />
              Notes
            </div>
            <button
              className="tool-btn"
              title="New File"
              onClick={handleAddNoteClick}
            >
              <MdAddBox />
            </button>
          </div>
          <div className="sidebar-notes">
            {notes.length !== 0 &&
              notes.map((note) => (
                <SidebarNote
                  title={note.title}
                  time={note.time}
                  content={note.content}
                  activeNote={activeNote}
                  setActiveNote={setActiveNote}
                  key={note.id}
                  id={note.id}
                  notes={notes}
                  setNotes={setNotes}
                />
              ))}
          </div>
        </div>
        <SidebarToggle
          theme={theme}
          sideBarExpanded={sideBarExpanded}
          setSideBarExpanded={setSideBarExpanded}
        />
      </div>
    </IconContext.Provider>
  );
}

export default Sidebar;
