import React from "react";
import "./LevelBtn.css";

/**
 * button that represents a level
 * 
 * calls upon function prop `handleLevelSelection`
 * that runs in parent and handles level selection 
 * when a user clicks on the component.
 */
function LevelBtn({ level, handleLevelSelection, selectedLevel }) {
  const levelTitle = level[0].toUpperCase() + level.slice(1);
  const activeStatus = level === selectedLevel ? "active" : "";

  function handleClick() {
    handleLevelSelection(level);
  }

  return (
    <button
      type="button"
      className={`btn LevelBtn-outline-${level} ${activeStatus}`}
      onClick={handleClick}
    >
      {levelTitle}
    </button>
  );
}

export default LevelBtn;
