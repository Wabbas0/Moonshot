import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { loadLaunches } from "./redux/modules/launches";

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(loadLaunches("2021-09-5T20:43:53Z", "2021-12-4T20:43:53Z", 0))
  },[])

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
