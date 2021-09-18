import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Mobile />
    </div>
  );
}

function Mobile() {
  const [state, setstate] = useState(100);
  let batteryHandalar = () => {
    let newState = state - 10;

    if (newState <= 0) {
      newState = 0;
    }
    setstate(newState);
  };
  return (
    <div className="blog">
      <p>Battery Charge : {state}%</p>
      <button className="btnDown" onClick={batteryHandalar}>
        Baterry Down
      </button>
    </div>
  );
}

// to do api call

export default App;
