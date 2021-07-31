import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Game from "./Game";
import Home from "./Home";
import Leaderboard from "./Leaderboard";
import LoginForm from "./LoginForm";
import PrivateRoute from "./PrivateRoute";
import Profile from "./Profile";
import RegisterForm from "./RegisterForm";
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

      <Route exact path="/login">
        <LoginForm />
      </Route>

      <Route exact path="/register">
        <RegisterForm />
      </Route>

      <Route exact path="/leaderboard">
        <Leaderboard />
      </Route>

      <Route exact path="/game">
        <Game />
      </Route>

      <PrivateRoute exact path="/profile">
        <Profile />
      </PrivateRoute>

      <Redirect to="/"></Redirect>
    </Switch>
  );
}

export default Routes;