import ReactDOM from "react-dom";
import { usePreventLeave } from "./usePreventLeave";

import "./styles.css";

const App = () => {
  const { enablePreve, disablePreve } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePreve}>Protect</button>
      <button onClick={disablePreve}>Unprotect</button>
    </div>
  );
};
