import "./App.css";
import React from "react";
import { Link } from "react-router-dom";

// importing login component
import Login from "./components/login";
//importing landing component
import Home from "./components/Home";
import FetchStocks from "./components/fetchStocks";

function App() {
  return (
    <div className="App">
      <Home />

      <Login />
    </div>
  );
}

export default App;
