import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask, toggleTask } from "../features/taskSlice";
import TaskItem from "./TaskItem";

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  const handleRemove = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={handleToggle}
            onRemove={handleRemove}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
