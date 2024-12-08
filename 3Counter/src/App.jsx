import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>React Session</h1>
      <h4>COUNTER VALUE : {counter}</h4>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        ADD
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        SUBTRACT
      </button>
      <button onClick={() => setCounter(0)}>RESET</button>
    </div>
  );
};

export default App;
