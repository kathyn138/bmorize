import React from "react";
import mascot from "../assets/bmo-tutorial.png";
import levelSelectDemo from "../assets/level-select-demo.gif";
import gamePlayDemo from "../assets/game-play-demo.gif";
import gameEndDemo from "../assets/game-end-demo.gif";
import "./Tutorial.css";

function Tutorial() {
  return (
    <React.Fragment>
      <div className="row Tutorial-row">
        <div className="col">
          <img className="Tutorial-mascot" src={mascot} alt=""></img>
        </div>
        <div className="col my-auto">
          <h1 className="Tutorial-header">Tutorial</h1>
          <p className="Tutorial-body-text">Learn how to play</p>
        </div>
      </div>
      <div className="row odd-row Tutorial-row">
        <div className="col my-auto">
          <h1 className="Tutorial-header">Select a level</h1>
          <p className="Tutorial-body-text">
            Pick between three levels: easy, medium, hard.
          </p>
          <p className="Tutorial-body-text">Click "Start" to begin the game.</p>
        </div>
        <div className="col">
          <img
            className="Tutorial-demo-gif"
            src={levelSelectDemo}
            alt="level select demo"
          ></img>
        </div>
      </div>
      <div className="row Tutorial-row">
        <div className="col">
          <img
            className="Tutorial-demo-gif"
            src={gamePlayDemo}
            alt="game play demo"
          ></img>
        </div>
        <div className="col my-auto">
          <h1 className="Tutorial-header">Flip cards</h1>
          <p className="Tutorial-body-text">
            Click on a card to flip it over and reveal its identity.
          </p>
          <p className="Tutorial-body-text">
            Pairs of non-matching flipped cards will automatically be reflipped
            after a second.
          </p>
        </div>
      </div>
      <div className="row odd-row Tutorial-row">
        <div className="col my-auto">
          <h1 className="Tutorial-header">Win</h1>
          <p className="Tutorial-body-text">
            Win the game by matching all cards.
          </p>
          <p className="Tutorial-body-text">
            Once the game is complete, you will have the option of playing
            another game or returning to the homepage.
          </p>
        </div>
        <div className="col">
          <img
            className="Tutorial-demo-gif"
            src={gameEndDemo}
            alt="game end demo"
          ></img>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Tutorial;
