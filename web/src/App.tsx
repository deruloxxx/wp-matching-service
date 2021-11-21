import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAsync } from "react-use";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);

  const state = useAsync<() => Promise<string>>(async () => {
    const { data } = await axios.get<string>("http://127.0.0.1:8000");
    return data;
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{state.loading ? "Loading..." : state.value}</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
