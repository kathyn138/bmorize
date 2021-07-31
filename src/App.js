import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import Routes from "./Routes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App container-fluid h-100 d-flex flex-column">
        <Navigation />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
