export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        style={{ marginRight: "0.5rem" }}
      />
      <div style={{ flexGrow: 1 }}>
        <span
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.title} ({task.priority})
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        style={{ marginLeft: "0.5rem" }}
      >
        Delete
      </button>
    </div>
  );
}
