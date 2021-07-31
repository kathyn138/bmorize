import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Game from "./Game";
import Landing from "./Landing";
import Tutorial from "./Tutorial";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
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