import React, { useState } from "react";
import Board from "../Board";
import GameEndModal from "../GameEndModal";
import LevelSelect from "../LevelSelect";
import "./Game.css";

function Game() {
  const [gameStart, setGameStart] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const [level, setLevel] = useState('');

  function handleStart() {
    setGameStart(true);
    setLevel(level);
  }

  function handleLevelSelection(level) {
    setLevel(level);
  }

  function handleEndGame() {
    setGameEnd(true);
  }

  return (
    <div className="row justify-content-center flex-grow-1 Game-row">
      {gameEnd && <GameEndModal />}
      {gameStart ? <Board level={level} handleEndGame={handleEndGame} /> : <LevelSelect handleStart={handleStart} handleLevelSelection={handleLevelSelection} selectedLevel={level} />}
    </div>
  );
}

export default Game;