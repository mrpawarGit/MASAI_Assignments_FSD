import React, { useState } from "react";
import BottomMainRight from "./components/BottomMainRight";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Props Drilling !!</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <GrandFather name={name} />
    </div>
  );
}

function GrandFather({ name }) {
  return (
    <div>
      <Father />
      <Son name={name} />
    </div>
  );
}

function Father() {
  return (
    <div>
      <p>Father Component (not using props)</p>
    </div>
  );
}

function Son({ name }) {
  return (
    <div>
      <p>Son Component</p>
      <BottomMainRight name={name} />
    </div>
  );
}

export default App;
