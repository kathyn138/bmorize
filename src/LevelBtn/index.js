import React from "react";
import "./LevelBtn.css";

function LevelBtn({ level, handleLevelSelection, selectedLevel }) {
  const levelTitle = level[0].toUpperCase() + level.slice(1);
  const activeStatus = level === selectedLevel ? 'active' : null;

  function handleClick() {
    handleLevelSelection(level);
  }
  return (
    <button type="button"
      className={`btn LevelBtn-outline-${level} ${activeStatus}`}
      onClick={handleClick}>{levelTitle}</button>
  );
}

export default LevelBtn;