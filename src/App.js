import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App-first">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          mi primera app en reactjs{" "}
          <code>
            https://triico.net/wp-content/uploads/2020/04/7-Mejores-foros-de-programadores.png
          </code>{" "}
          cambiando sus contenidos.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
