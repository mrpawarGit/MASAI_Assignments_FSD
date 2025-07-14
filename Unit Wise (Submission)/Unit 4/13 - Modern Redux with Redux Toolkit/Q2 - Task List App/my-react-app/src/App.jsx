import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Redux Task List</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
