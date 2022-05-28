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
      `https://alpha-vantage.p.rapidapi.com/query?function=GLOBAL_QUOTE&symbol=${props.name}&datatype=json`,
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
        console.log(myRes);
      })
      .catch((err) => console.error(err));
    // console.log(response);
  }, [props.name]);

  let info;

  if (ticker) {
    info = (
      <div className="info-div">
        <div className="second">
          <p className="stock-titles-p" id="department">
            {/* Current price: */}
          </p>{" "}
          <p className="stock-info-p">
            <span className="card-titles">Current price: </span> ${tickerPrice}
          </p>
        </div>
        <div className="third">
          <p className="stock-titles-p" id="description">
            {/* Previous closing price: */}
          </p>{" "}
          <p className="stock-info-p">
            <span className="card-titles">Previous closing price: </span> $
            {closingPrice}{" "}
          </p>
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
        <h2 id="ticker-title">${ticker}</h2>
      </div>
      <div className="class-title">
        <p>{info}</p>
      </div>
    </div>
  );
}

export default StocksGraphQL;
