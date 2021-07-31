import React from "react";
import "./Tutorial.css";

function Tutorial() {
  return (
    <React.Fragment>
      <div className="row Tutorial-row">
        <div className="col my-auto">
          <h1>tutorial</h1>
          <p>something something
          other headers are: practice memorization, train your memory
          </p>
          <a className="btn btn-main" href="/tutorial" role="button">Tutorial</a>
          <a className="btn btn-main btn-play-now" href="/game" role="button">Play Now</a>
        </div>
        <div className="col">
          image here
        </div>
      </div>
      <div className="row Tutorial-row">
        <div className="col">
          screenshot here
        </div>
        <div className="col">
          <h1>Select a difficulty</h1>
          <p>
            Some days you might be up for a challenge, some days you might not be.
            You can adjust the difficulty of the game with ease.
          </p>
        </div>
      </div>
      <div className="row Tutorial-row">
        <div className="col">
          <h1>Win by matching all cards</h1>
          <p>
            idk what is a good header rn tbh
          </p>
        </div>
        <div className="col">
          screenshot here
        </div>
      </div>
      <div className="row Tutorial-row">
        <div className="col">
          screenshot here
        </div>
      </div>
    </React.Fragment>
  );
}

export default Tutorial;