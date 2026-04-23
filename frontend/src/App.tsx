import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TickerInput from "./components/TickerInput";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" placeholder="Enter ticker (e.g. AAPL)" />
        <TickerInput />
      </header>
    </div>
  );
}

export default App;
