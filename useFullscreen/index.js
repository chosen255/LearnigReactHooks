import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { useFullscreen } from "./useFullscreen";

import "./styles.css";

const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "Full" : "Small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="https://i.pinimg.com/236x/87/9a/06/879a06f8479b5caddb28cc2624a87ca5.jpg" />
      </div>
      <button onClick={triggerFull}>Fullscreen</button>
      <button onClick={exitFull}>Exit fullscreen</button>
    </div>
  );
};
