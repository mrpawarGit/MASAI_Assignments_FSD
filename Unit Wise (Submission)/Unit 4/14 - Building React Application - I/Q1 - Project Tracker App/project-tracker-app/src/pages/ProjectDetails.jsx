import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjects, updateTask, deleteTask } from "../services/firebaseAPI";
import Navbar from "../components/Navbar";
import TaskItem from "../components/TaskItem";

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchProject = async () => {
      const data = await getProjects();
      const p = data?.[id];
      if (p) {
        setProject(p);
        const taskList = Object.entries(p.tasks || {}).map(([tid, val]) => ({
          id: tid,
          ...val,
        }));
        setTasks(taskList);
      }
    };
    fetchProject();
  }, [id]);

  const handleToggle = async (taskId) => {
    const updated = tasks.map((t) =>
      t.id === taskId ? { ...t, completed: !t.completed } : t
    );
    setTasks(updated);
    const task = updated.find((t) => t.id === taskId);
    await updateTask(id, taskId, { completed: task.completed });
  };

  const handleDelete = async (taskId) => {
    const filtered = tasks.filter((t) => t.id !== taskId);
    setTasks(filtered);
    await deleteTask(id, taskId);
  };

  return (
    <div>
      <Navbar />
      {project ? (
        <div>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <h3>Tasks</h3>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
