import React, { useState } from "react";
import Board from "../Board";
import LevelSelect from "../LevelSelect";
import "./Game.css";

function Game() {
  const [gameStart, setGameStart] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const [level, setLevel] = useState('');

  function handleStart() {
    setGameStart(true);
  }

  function handleLevelSelection(level) {
    setLevel(level);
  }

  return (
    <div className="row justify-content-center flex-grow-1 Game-row">
      {gameStart ? <Board /> : <LevelSelect handleStart={handleStart} handleLevelSelection={handleLevelSelection} selectedLevel={level} />}
    </div>
  );
}

export default Game;