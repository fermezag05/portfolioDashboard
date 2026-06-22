import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import TickerInput from "./components/TickerInput";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center p-8">
      <h1 className="text-5xl font-bold mb-8">Portfolio Dashboard</h1>
      <TickerInput />
    </div>
  );
}

export default App;
