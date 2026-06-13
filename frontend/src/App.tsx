import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import TickerInput from "./components/TickerInput";
//import PriceChart from "./components/PriceChart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TickerInput />
      </header>
    </div>
  );
}

export default App;
