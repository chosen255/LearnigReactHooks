import React from "react";
import ReactDOM from "react-dom";
import { useNotification } from "./useNotification";

import "./styles.css";

const App = () => {
  const triggerNotif = useNotification("Hello", { body: "Hi again" });
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick={triggerNotif}>Hi</button>
    </div>
  );
};
