import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useTabs } from "./useTabs";

import "./styles.css";

const content = [
  {
    tab: "Section 1",
    content: "content of section 1",
  },
  {
    tab: "Section 2",
    content: "content of section 2",
  },
];

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};
