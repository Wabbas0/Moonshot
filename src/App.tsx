import React from "react";
import logo from "./logo.svg";
import "./App.css";
import api from "./api/index";
function App() {
  api.launches.getLaunches("2021-08-31T20:43:53Z", "2021-11-11T20:43:53Z");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
