import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Game from "./Game";
import Home from "./Home";
import Tutorial from "./Tutorial";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/tutorial">
        <Tutorial />
      </Route>

      <Route exact path="/game">
        <Game />
      </Route>

      <Redirect to="/"></Redirect>
    </Switch>
  );
}

export default Routes;