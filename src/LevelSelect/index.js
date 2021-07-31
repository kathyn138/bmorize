import React, { useState } from "react";
import "./LevelSelect.css";

function LevelSelect() {
  const [level, setLevel] = useState('');

  function handleSubmit() {

  }

  //TODO: logic to only select one level at a time
  // add "active" class to the selected level btn

  return (
    <div className="col-4 my-auto LevelSelect-col">
      <h2>Select a level</h2>

      <div className="LevelSelect-btns">
        <button type="button"
          className="btn LevelSelect-btn-outline-easy">Easy</button>
        <button type="button"
          className="btn LevelSelect-btn-outline-med">Medium</button>
        <button type="button"
          className="btn LevelSelect-btn-outline-hard">Hard</button>
      </div>

      <button className="btn btn-main LevelSelect-btn-submit"
        onSubmit={handleSubmit}>Start</button>
    </div>
  );
}

export default LevelSelect;