import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [state, setState] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    !state.includes(inputValue) && setState([...state, inputValue]);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        Enter Url:{" "}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Enter</button>
      </form>

      <ul>
        <b>Shortened links will appear here:</b>
        {state.map((elem, index) => {
          return (
            <li key={index}>
              <a target="_blank" rel="noreferrer" href={`${elem}`}>
                http://localhost:3000/{index + 1}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
