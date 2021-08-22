import ReactDOM from "react-dom";
import { useConfirm } from "./useConfirm";

import "./styles.css";

const App = () => {
  const delWorld = () => console.log("Deleting...");
  const abort = () => console.log("Aborted.");
  const confirmDelete = useConfirm("Are you sure?", delWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Del</button>
    </div>
  );
};
