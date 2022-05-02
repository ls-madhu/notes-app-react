import React, { useEffect, useState } from "react";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import useWindowDimensions from "./hooks/useWindowDimensions";

import "./App.css";
import { IconContext } from "react-icons";

function App() {
  const { width } = useWindowDimensions();
  const [notes, setNotes] = useState([]);
  const [theme, setTheme] = useState("dark");
  const [activeNote, setActiveNote] = useState(null);
  const [sideBarExpanded, setSideBarExpanded] = useState(true);

  useEffect(() => {
    if (width > 766) {
      setSideBarExpanded(true);
    }
  }, [width]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark";
    setTheme(storedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    if (notes.length === 0) {
      localStorage.removeItem("notes");
    } else {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes]);

  let iconColor = theme === "light" ? "#333" : "#ccc";

  return (
    <div className={theme === "light" ? "App" : "App dark"}>
      <IconContext.Provider value={{ size: "24px", color: `${iconColor}` }}>
        <Sidebar
          theme={theme}
          notes={notes}
          setNotes={setNotes}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
          sideBarExpanded={sideBarExpanded}
          setSideBarExpanded={setSideBarExpanded}
        />
        <Main
          theme={theme}
          setTheme={setTheme}
          notes={notes}
          setNotes={setNotes}
          activeNote={activeNote}
        />
      </IconContext.Provider>
    </div>
  );
}

export default App;
