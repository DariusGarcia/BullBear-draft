import React from "react";
import "./Home.css";
import StocksGraphQL from "./StocksGraphQL";

function Home() {
  return (
    <div className="home-parent">
      <div className="logo-header">
        <h1 className="home-title">
          <span id="bull">Bull</span>
          <span id="bear">Bear</span>
        </h1>
      </div>
      <ul className="nav-list">
        <li>Market</li>
        <li>Portfolio</li>
        <li>Messages</li>
      </ul>
      <div className="search-box">
        <h2 id="stock-market">Stock Market</h2>
        <label id="search-label">
          Enter ticker: <span id="dollar">$</span>
        </label>
        <input
          onInput={(e) =>
            (e.target.value = ("" + e.target.value).toUpperCase())
          }
          className="search-bar"
          type="text"
          placeholder="ex: MSFT"
        ></input>
      </div>
      <div className="main-container">
        <div className="stocks-list">
          <h2 className="stock-box">1. $MSFT</h2>

          <StocksGraphQL />
        </div>
        <div className="stock-nav">
          <p>My Stocks</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
