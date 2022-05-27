import React, { useState } from "react";
import "./Home.css";
import StocksGraphQL from "./StocksGraphQL";

function Home() {
  const [value, setValue] = useState("");
  const [ticker, setTicker] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!ticker.includes(value)) {
      setTicker(ticker.concat(value));
      setValue("");
    }
    console.log(ticker);
  };

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
          value={value}
          onChange={handleChange}
          onInput={(e) =>
            (e.target.value = ("" + e.target.value).toUpperCase())
          }
          className="search-bar"
          type="text"
          placeholder="ex: MSFT"
        ></input>
        <button className="search-btn" onSubmit={handleSubmit}>
          Search
        </button>
      </div>
      <div className="main-container">
        <div className="stocks-list">
          {/* {ticker.map((addedTicker) => (
            <StocksGraphQL name={addedTicker} key={addedTicker}></StocksGraphQL>
          ))} */}
          <StocksGraphQL />
          <h2 className="stock-box">1. $MSFT</h2>
        </div>
        <div className="stock-nav">
          <p>My Stocks</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
