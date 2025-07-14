export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span className={task.completed ? "completed" : ""}>
        {task.title} ({task.priority})
      </span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}
