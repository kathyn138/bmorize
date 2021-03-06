import React from "react";
import LevelBtn from "../LevelBtn";
import "./LevelSelect.css";

/**
 * allows users to select a level
 * and start the game
 */
function LevelSelect({ handleGameStart, handleLevelSelection, selectedLevel }) {
  const levels = ["easy", "medium", "hard"];

  function handleStartClick() {
    handleGameStart();
  }

  return (
    <div className="col-4 my-auto LevelSelect-col">
      <h2>Select a level</h2>

      <div className="LevelSelect-btns">
        {levels.map((l) => (
          <LevelBtn
            key={l}
            level={l}
            handleLevelSelection={handleLevelSelection}
            selectedLevel={selectedLevel}
          />
        ))}
      </div>

      <button
        className="btn btn-main LevelSelect-btn-submit"
        onClick={handleStartClick}
      >
        Start
      </button>
    </div>
  );
}

export default LevelSelect;
