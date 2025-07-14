import React from "react";

function TaskItem({ task, onToggle, onRemove }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <span
        onClick={() => onToggle(task.id)}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {task.text}
      </span>
      <button onClick={() => onRemove(task.id)} style={{ marginLeft: "10px" }}>
        Remove
      </button>
    </div>
  );
}

export default TaskItem;
