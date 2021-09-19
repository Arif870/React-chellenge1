import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Mobile />
      <Todo />
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

function Todo() {
  let [lists, setList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => setList(data));
  }, []);

  return (
    <div>
      {lists.map(list => (
        <p>
          <span>{list.id} : </span> {list.title}
        </p>
      ))}
    </div>
  );
}

export default App;
