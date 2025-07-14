import { useState } from "react";
import "./App.css";
import { Priority, type Task } from "./types";

type Filter = "all" | "completed" | "incomplete";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<Priority>(Priority.MEDIUM);
  const [filter, setFilter] = useState<Filter>("all");

  const addTask = () => {
    if (!description.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      description,
      priority,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setDescription("");
    setPriority(Priority.MEDIUM);
  };

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <>
      <div>
        <h1>Task Manager</h1>

        <input
          type="text"
          placeholder="Enter task"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as Priority)}
        >
          {Object.values(Priority).map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>

        <button onClick={addTask}>Add Task</button>

        <div>
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("completed")}>Completed</button>
          <button onClick={() => setFilter("incomplete")}>Incomplete</button>
        </div>

        <ul>
          {filteredTasks.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              [{task.priority}] {task.description} {task.completed && "(Done)"}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
