import React from "react";
import mascot from "../assets/bmo-game-end.gif";
import "./GameEnd.css";

function GameEnd({ handleResetGame }) {
  function handlePlayAgainClick() {
    handleResetGame();
  }

  return (
    <React.Fragment>
      <div className="col-4 my-auto LevelSelect-col">
        <h2>Congratulations!</h2>
        <p>You won the game!</p>
        <img className="GameEnd-mascot" src={mascot} alt=""></img>
        <button className="btn btn-main GameEnd-btn" onClick={handlePlayAgainClick}>Play Again</button>
        <a className="btn btn-main GameEnd-btn" href="/">Back to Home</a>
      </div>
    </React.Fragment>
  );
}

export default GameEnd;