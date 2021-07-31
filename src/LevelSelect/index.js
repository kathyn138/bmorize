import React from "react";
import LevelBtn from "../LevelBtn";
import "./LevelSelect.css";

function LevelSelect({ handleStart, handleLevelSelection, selectedLevel }) {
  const levels = ['easy', 'medium', 'hard'];

  //TODO: logic to only select one level at a time
  // add "active" class to the selected level btn

  function handleStartClick() {
    handleStart();
  }

  return (
    <div className="col-4 my-auto LevelSelect-col">
      <h2>Select a level</h2>

      <div className="LevelSelect-btns">
        {levels.map(l => <LevelBtn level={l}
          handleLevelSelection={handleLevelSelection}
          selectedLevel={selectedLevel} />)}
      </div>

      <button className="btn btn-main LevelSelect-btn-submit"
        onClick={handleStartClick}>Start</button>
    </div>
  );
}

export default LevelSelect;