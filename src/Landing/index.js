import React from "react";
import "./Landing.css";
import mascot from "../assets/bmo.png";
import levelSelectDemo from "../assets/level-select-demo.gif";
import gamePlayDemo from "../assets/game-play-demo.gif";
import githubIcon from "../assets/github-icon.png";
import linkedinIcon from "../assets/linkedin-icon.png";

function Landing() {
  return (
    <React.Fragment>
      <div className="row Landing-row">
        <div className="col my-auto">
          <h1 className="Landing-header">Memorize with bmorize</h1>
          <p className="Landing-body-text">Level up your memory today.</p>
          <p className="Landing-body-text">
            A matching card game with a minimalist design.
          </p>
          <a className="btn btn-main" href="/tutorial" role="button">
            Tutorial
          </a>
          <a className="btn btn-main btn-play-now" href="/game" role="button">
            Play Now
          </a>
        </div>
        <div className="col">
          <img className="Landing-mascot" src={mascot} alt="mascot"></img>
        </div>
      </div>
      <div className="row odd-row Landing-row">
        <div className="col">
          <img
            className="Landing-demo-gif"
            src={levelSelectDemo}
            alt="level select demo"
          ></img>
        </div>
        <div className="col my-auto">
          <h1 className="Landing-header">Select a level</h1>
          <p className="Landing-body-text">
            Some days you might be up for a challenge, some days you might not
            be.
          </p>
          <p className="Landing-body-text">
            You can adjust the difficulty of the game with ease.
          </p>
        </div>
      </div>
      <div className="row Landing-row">
        <div className="col my-auto">
          <h1 className="Landing-header">Match all cards</h1>
          <p className="Landing-body-text">No distractions.</p>
          <p className="Landing-body-text">One clear goal.</p>
        </div>
        <div className="col">
          <img
            className="Landing-demo-gif"
            src={gamePlayDemo}
            alt="game play demo"
          ></img>
        </div>
      </div>
      <div className="row odd-row Landing-row">
        <div className="col">
          <h1 className="Landing-header">Meet the Engineer</h1>
          <img
            className="Landing-engineer-icon"
            src="https://kathyn138.github.io/assets/custom/about-pic.png"
            alt=""
          ></img>
          <h2 className="Landing-header">Kathy Nguyen</h2>
          <p className="Landing-body-text">
            A software engineer who is passionate about creating things that
            help people.
          </p>
          <p className="Landing-engineer-links">
            <a href="https://github.com/kathyn138">
              <img
                className="Landing-social-icon"
                src={githubIcon}
                alt=""
              ></img>
            </a>
            <a href="https://www.linkedin.com/in/kathy-n-709a5">
              <img
                className="Landing-social-icon"
                src={linkedinIcon}
                alt=""
              ></img>
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Landing;
