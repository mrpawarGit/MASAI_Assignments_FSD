import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProjects, updateProject } from "../services/firebaseAPI";
import Navbar from "../components/Navbar";

export default function EditProject() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjects();
      const project = data?.[id];
      if (project) {
        setTitle(project.title);
        setDescription(project.description);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProject(id, { title, description });
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="edit-project-container">
        <h2>Edit Project</h2>
        <form className="edit-project-form" onSubmit={handleSubmit}>
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
          <button type="submit">Update Project</button>
        </form>
      </div>
    </>
  );
}
