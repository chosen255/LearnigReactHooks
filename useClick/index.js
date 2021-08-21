import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { useClick } from "./useClick";

import "./styles.css";

const App = () => {
  const sayHello = () => console.log("hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};
