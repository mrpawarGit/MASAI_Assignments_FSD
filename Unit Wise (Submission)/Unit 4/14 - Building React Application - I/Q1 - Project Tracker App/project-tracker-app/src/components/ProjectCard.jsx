import { useNavigate } from "react-router-dom";

export default function ProjectCard({ id, title, description, createdAt }) {
  const navigate = useNavigate();
  const date = new Date(createdAt).toLocaleDateString();

  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <small>Created At: {date}</small>
      </p>
      <button onClick={() => navigate(`/project/${id}`)}>View Details</button>
    </div>
  );
}
