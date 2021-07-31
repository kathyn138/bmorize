import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute() {
  let currentUser = true; 

  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  return (
    "private route"
  );
}

export default PrivateRoute;