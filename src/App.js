import "./App.css";

function App() {
  return (
    <div className="App">
      <Blog />
    </div>
  );
}

let headingStyle = {
  fontSize: "40px",
  fontWeight: 700,
  color: "skyBlue",
};

function Blog() {
  return (
    <div>
      <article className="blog">
        <h1 style={headingStyle}>This is Heading !!</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rerum
        quae obcaecati eius maxime laboriosam id consequuntur consequatur ipsam
        et.
        <p
          style={{
            textAlign: "center",
            backgroundColor: "green",
            padding: "20px",
            borderRadius: "10px",
            fontSize: "24px",
            fontWeight: "300",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, animi?
        </p>
      </article>
    </div>
  );
}
export default App;
