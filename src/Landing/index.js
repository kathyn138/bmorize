import React from "react";
import "./Landing.css";
import mascot from "../assets/bmo.png";
import githubIcon from "../assets/github-icon.png";
import linkedinIcon from "../assets/linkedin-icon.png";

function Landing() {
  return (
    <React.Fragment>
      <div className="row Landing-row">
        <div className="col my-auto">
          <h1>Level up your memory</h1>
          <p>something something
          other headers are: practice memorization, train your memory
          </p>
          <a className="btn btn-main" href="/tutorial" role="button">Tutorial</a>
          <a className="btn btn-main btn-play-now" href="/game" role="button">Play Now</a>
        </div>
        <div className="col">
          <img className="Landing-mascot" src={mascot} alt="mascot"></img>
        </div>
      </div>
      <div className="row Landing-row">
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
      <div className="row Landing-row">
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
      <div className="row Landing-row">
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
      <div className="row Landing-row">
        <div className="col">
          <h1>Meet the Engineers</h1>
        </div>
      </div>
      <div className="row Landing-row">
        <div className="col">
          <img className="Landing-engineer-icon" src="https://cdn.discordapp.com/attachments/729097963095457844/839648505005342730/813819507658719232.png" alt="engineer1"></img>
          <h1>person1 name</h1>
          <p>person1 bio</p>
          <p className="Landing-engineer-links">
            <a href="">
              <img class="Landing-social-icon" src={githubIcon} alt=""></img>
            </a>
            <a href="">
              <img class="Landing-social-icon" src={linkedinIcon} alt=""></img>
            </a>
          </p>
        </div>
        <div className="col">
          <img className="Landing-engineer-icon" src="https://cdn.discordapp.com/attachments/729097963095457844/839648505005342730/813819507658719232.png" alt="engineer2"></img>
          <h1>person2 name</h1>
          <p>person1 bio</p>
          <p className="Landing-engineer-links">
            <a href="">
              <img class="Landing-social-icon" src={githubIcon} alt=""></img>
            </a>
            <a href="">
              <img class="Landing-social-icon" src={linkedinIcon} alt=""></img>
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Landing;