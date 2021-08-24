import React, { useEfctfe } from "react";
import ReactDOM from "react-dom";
import { useBeforeLeave } from "./useBeforeLeave";

import "./styles.css";

const App = () => {
  const begForLife = () => console.log("Please don't leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
};
