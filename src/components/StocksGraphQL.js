import "./StocksGraphQL.css";

import React, { useState, useEffect } from "react";
import axios from "axios";

function StocksGraphQL(props) {
  const [ticker, setTicker] = useState([]);
  const [tickerPrice, setTickerPrice] = useState([]);
  const [closingPrice, setClosingPrice] = useState([]);

  useEffect(() => {
    let resTicker;
    let resPrice;
    let resClosingPrice;
    let res;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
        "X-RapidAPI-Key": "0d97302266msh6b2a73e1ff1a13dp1c8242jsn8cf1b0c3f629",
      },
    };
    fetch(
      "https://alpha-vantage.p.rapidapi.com/query?function=GLOBAL_QUOTE&symbol=AAPL&datatype=json",
      options
    )
      .then((response) => response.json())

      .then((data) => {
        const res = data["Global Quote"];
        const myRes = Object.values(res);
        setTicker(myRes[0]);
        setTickerPrice(myRes[4]);
        setClosingPrice(myRes[7]);
        console.log(myRes[7]);
      })
      .catch((err) => console.error(err));
    // console.log(response);
  }, []);

  let info;

  if (ticker) {
    info = (
      <div className="info-div">
        <div className="first">
          <p className="class-titles-p">Stock:</p>
          <p className="class-info-p" id="title">
            {ticker}{" "}
          </p>
        </div>
        <div className="second">
          <p className="class-titles-p" id="department">
            Department:
          </p>{" "}
          <p className="class-info-p">{tickerPrice}</p>
        </div>
        <div className="third">
          <p className="class-titles-p" id="description">
            Description:
          </p>{" "}
          <p className="class-info-p">{closingPrice}</p>
        </div>
      </div>
    );
  } else if (ticker == null) {
    info = <p id="class-nf">Stock Not Found...</p>;
  } else {
    info = <p>Loading...</p>;
  }

  return (
    <div className="class">
      <div className="class-title">
        <h2>{ticker}</h2>
      </div>
      <div className="class-title">
        <p>{tickerPrice}</p>
      </div>
      <div className="class-title">
        <p>{closingPrice}</p>
      </div>
    </div>
  );
}

export default StocksGraphQL;
