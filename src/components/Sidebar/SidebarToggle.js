import React from "react";
import { IconContext } from "react-icons";
import { MdDoubleArrow } from "react-icons/md";

import "./SidebarToggle.css";

function SidebarToggle({ theme, sideBarExpanded, setSideBarExpanded }) {
  const handleToggleClick = () => {
    setSideBarExpanded((sideBarExpanded) => !sideBarExpanded);
  };

  return (
    <button
      onClick={handleToggleClick}
      className={theme === "light" ? "sidebar-toggle" : "sidebar-toggle dark"}
    >
      <IconContext.Provider
        value={{
          size: "32px",
          color: "#6b76f3",
          style: {
            transform: `${sideBarExpanded ? "rotateY(180deg)" : "none"}`,
          },
        }}
      >
        <MdDoubleArrow />
      </IconContext.Provider>
    </button>
  );
}

export default SidebarToggle;
