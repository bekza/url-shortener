import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [state, setState] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [existingText, setExistingText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    inputValue &&
      !state.includes(inputValue) &&
      setState([...state, inputValue]);

    state.includes(inputValue)
      ? setExistingText(`${inputValue} has been added already...`)
      : setExistingText("");

    setInputValue("");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h2>Enter Url:</h2>
        <input
          type="text"
          value={inputValue}
          placeholder="https://www.apple.com/"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        <i>Shortened links will appear here:</i>
        <hr />
        {state.map((elem, index) => {
          return (
            <li key={index}>
              <span>{elem}:</span> &nbsp;&nbsp;
              <a target="_blank" rel="noreferrer" href={elem}>
                http://localhost:3000/{index + 1}
              </a>
            </li>
          );
        })}
      </ul>

      <small>{existingText}</small>
    </div>
  );
};

export default App;
