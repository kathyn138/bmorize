import React, { useState } from "react";
import Board from "../Board";
import GameEnd from "../GameEnd";
import LevelSelect from "../LevelSelect";
import "./Game.css";

function Game() {
  const [gameScreen, setGameScreen] = useState("");
  const [level, setLevel] = useState("");

  function handleGameStart() {
    setGameScreen("board");
    setLevel(level);
  }

  function handleLevelSelection(level) {
    setLevel(level);
  }

  function handleEndGame() {
    setGameScreen("end");
  }

  function handleResetGame() {
    setGameScreen("");
    setLevel("");
  }

  let display;

  if (gameScreen === "board") {
    display = <Board level={level} handleEndGame={handleEndGame} />;
  } else if (gameScreen === "end") {
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
