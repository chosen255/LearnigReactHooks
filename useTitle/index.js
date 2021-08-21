import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useTitle } from "./useTitle";

import "./styles.css";

const App = () => {
  const titleUpadeter = useTitle("Loading...");
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};
