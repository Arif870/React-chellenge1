import "./App.css";

function App() {
  return (
    <div className="App">
      <Blog heading="Padma nodir maji" author="jahir rayhan" />
      <Blog heading="Mackbeth" author="sexpiar" />
      <Blog heading="Miracle morning" author="will smith" />
    </div>
  );
}

function Blog(props) {
  return (
    <div className="blog">
      <h1>{props.heading}</h1>
      <p>Author : {props.author}</p>
    </div>
  );
}
export default App;
