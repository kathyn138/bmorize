import React, { useState } from "react";
import Board from "../Board";
import LevelSelect from "../LevelSelect";
import "./Game.css";

function Game() {
  const [gameStart, setGameStart] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const [level, setLevel] = useState('');

  return (
    <div className="row justify-content-center flex-grow-1 Game-row">
      <Board />
      {/* <LevelSelect /> */}
    </div>
  );
}

export default Game;