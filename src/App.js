import React from "react";
import Weather from "./Weather"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Container">
    <Weather />
    <footer>
    Open-source code by{" "}
    <a hRef="https://github.com/lamoureuxmarie/react-weather-app" Target="_blank">Marie Lamoureux</a>
    </footer>
    </div>
    </div>
  );
}

export default App;
