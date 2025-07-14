import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProject } from "../services/firebaseAPI";
import Navbar from "../components/Navbar";

export default function AddProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProject = {
      title,
      description,
      createdAt: Date.now(),
    };
    await addProject(newProject);
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="add-project-container">
        <h2>Add New Project</h2>
        <form className="add-project-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <br />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <br />
          <button type="submit">Add Project</button>
        </form>
      </div>
    </>
  );
}
