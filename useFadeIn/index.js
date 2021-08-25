import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useFadeIn } from "./useFadeIn";

import "./styles.css";

const App = () => {
  const fadeInH1 = useFadeIn(1, 2);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hi</h1>
    </div>
  );
};
