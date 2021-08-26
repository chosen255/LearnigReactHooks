import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useScroll } from "./useScroll";

import "./styles.css";

const App = () => {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>Hi</h1>
    </div>
  );
};
