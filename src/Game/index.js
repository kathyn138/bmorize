import React, { useState } from "react";
import Board from "../Board";
import GameEnd from "../GameEnd";
import LevelSelect from "../LevelSelect";
import "./Game.css";

function Game() {
  const [gameStart, setGameStart] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const [level, setLevel] = useState("");

  function handleGameStart() {
    setGameStart(true);
    setLevel(level);
  }

  function handleLevelSelection(level) {
    setLevel(level);
  }

  function handleEndGame() {
    setGameEnd(true);
    setGameStart(false);
  }

  function handleResetGame() {
    setGameEnd(false);
    setGameStart(false);
    setLevel("");
  }

  let display;

  if (gameStart) {
    display = <Board level={level} handleEndGame={handleEndGame} />;
  } else if (gameEnd) {
    display = <GameEnd handleResetGame={handleResetGame} />;
  } else {
    display = (
      <LevelSelect
        handleGameStart={handleGameStart}
        handleLevelSelection={handleLevelSelection}
        selectedLevel={level}
      />
    );
  }

  return (
    <div className="row justify-content-center flex-grow-1 Game-row">
      {display}
    </div>
  );
}

export default Game;
