import "./fetchStocks.css";
import React, { useState } from "react";

function FetchStocks() {
  return (
    <div>
      <form>
        <button>Search</button>
        <input type="text" placeholder="Search"></input>
      </form>
    </div>
  );
}

export default FetchStocks;
