import React from "react";

function Tutorial() {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <h1>Tutorial</h1>
        </div>
      </div>
      <div className="row">
        <div className="col my-auto">
          <h1>Level up your memory</h1>
          <p>something something
          other headers are: practice memorization, train your memory
          </p>
          <button type="button" className="btn btn-main">Tutorial</button>
          <button type="button" className="btn btn-main btn-play-now">Play Now</button>
        </div>
        <div className="col">
          some
        </div>
      </div>
      <div className="row">
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
      <div className="row">
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
      <div className="row">
        <div className="col">
          screenshot here
        </div>
        <div className="col">
          <h1>Beat records</h1>
          <p>
            idk what is a good header rn tbh
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Tutorial;