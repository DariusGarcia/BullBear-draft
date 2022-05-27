import "./StocksGraphQL.css";

import React, { useState, useEffect } from "react";
import axios from "axios";

function StocksGraphQL(props) {
  const [tickerPrice, setTickerPrice] = useState({});

  const url = "https://api.peterportal.org/graphql";

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
        "X-RapidAPI-Key": "0d97302266msh6b2a73e1ff1a13dp1c8242jsn8cf1b0c3f629",
      },
    };

    fetch(
      "https://alpha-vantage.p.rapidapi.com/query?function=GLOBAL_QUOTE&symbol=MSFT&datatype=json",
      options
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data["Global Quote"]["01. symbol"]);
      });
  });
  //   let info;

  //   if (tickerInfo) {
  //     info = (
  //       <div className="info-div">
  //         <div className="first">
  //           <p className="class-titles-p">Stock:</p>
  //           <p className="class-info-p" id="title">
  //             {tickerInfo.title}{" "}
  //           </p>
  //         </div>
  //         <div className="second">
  //           <p className="class-titles-p" id="department">
  //             Department:
  //           </p>{" "}
  //           <p className="class-info-p">{classInfo.department_name}</p>
  //         </div>
  //         <div className="third">
  //           <p className="class-titles-p" id="description">
  //             Description:
  //           </p>{" "}
  //           <p className="class-info-p">{classInfo.description}</p>
  //         </div>
  //       </div>
  //     );
  //   } else if (classInfo == null) {
  //     info = <p id="class-nf">Class Not Found...</p>;
  //   } else {
  //     info = <p>Loading...</p>;
  //   }

  //   return (
  //     <div className="class">
  //       <div className="class-title">{props.name}</div>
  //       <div className="information">{info}</div>
  //     </div>
  //   );
  return <></>;
}

export default StocksGraphQL;
