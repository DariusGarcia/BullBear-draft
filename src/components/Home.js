import React, { useState } from "react";
import "./Home.css";
import StocksGraphQL from "./StocksGraphQL";
import SignOut from "./signOut";

function Home(props) {
  const [value, setValue] = useState("");
  const [ticker, setTicker] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
    // setTicker(event.target.value);
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
        <h1 className="home-title">BullBear</h1>
      </div>
      <ul className="nav-list">
        <li>Market</li>
        <li>Portfolio</li>
        <li>Messages</li>
        <li>
          <SignOut />
        </li>
      </ul>
      {/* <h2 id="stock-market">Stock Market</h2> */}
      <div className="search-box">
        <form className="stocks-form" onSubmit={handleSubmit}>
          <label id="search-label">Stock Market</label>
          <input
            autoFocus
            value={value}
            onChange={handleChange}
            onInput={(e) =>
              (e.target.value = ("" + e.target.value).toUpperCase())
            }
            className="search-bar"
            type="text"
            placeholder="ex: MSFT"
          ></input>
          <button className="search-btn">Search ticker</button>
        </form>
      </div>

      <div className="main-container">
        <div className="stocks-list">
          {ticker.map((favTicker) => (
            <StocksGraphQL name={favTicker} key={favTicker}></StocksGraphQL>
          ))}
        </div>

        <div className="stock-nav">
          <p>My Stocks</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
