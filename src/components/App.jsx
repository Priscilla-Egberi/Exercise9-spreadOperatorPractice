import React, { useState } from "react";
// import Items from "./items";

function App() {
  const [item, items] = useState([]);
  const [text, setText] = useState("");

  function getText(event) {
    setText(event.target.value);
  }

  function addText() {
    items((item) => [...item, text]);
    setText("")
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={getText} value={text} />
        <button onClick={addText}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((x) => (
            <li>{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
