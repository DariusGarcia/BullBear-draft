import React from "react";
import { Link } from "react-router-dom";
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
      <div className="main-container">
        <h2 id="stock-market">Stock Market</h2>

        <div className="stocks-container">
          <div className="stocks-list">
            <h2 className="stock-box">1. $MSFT</h2>

            <StocksGraphQL />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
