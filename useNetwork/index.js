import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useNetwork } from "./useNetwork";

import "./styles.css";

const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "It's online" : "It's offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>{onLine ? "Online" : "Offline"}</h1>
    </div>
  );
};
