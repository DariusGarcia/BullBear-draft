import "./StocksGraphQL.css";

import React, { useState, useEffect } from "react";
import axios from "axios";

function StocksGraphQL(props) {
  //   const [tickerPrice, setTicketPrice] = useState({});

  const options = {
    method: "GET",
    url: "https://stock-market-data.p.rapidapi.com/market/index/s-and-p-five-hundred",
    headers: {
      "X-RapidAPI-Host": "stock-market-data.p.rapidapi.com",
      "X-RapidAPI-Key": "0d97302266msh6b2a73e1ff1a13dp1c8242jsn8cf1b0c3f629",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data.stocks[3]);
    })
    .catch(function (error) {
      console.error(error);
    });

  return <></>;
}

export default StocksGraphQL;
