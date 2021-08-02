import { NavLink } from "react-router-dom";
import React from "react";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="row Nav-row">
      <div className="col Nav-col">
        <nav className="navbar navbar-expand-lg">
          <NavLink className="navbar-brand" id="Nav-brand-name" to="/">
            bmorize
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/tutorial">
                  Tutorial
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
