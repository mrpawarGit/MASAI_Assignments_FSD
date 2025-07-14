import { useNavigate } from "react-router-dom";

export default function ProjectCard({ id, title, description, createdAt }) {
  const navigate = useNavigate();
  const date = new Date(createdAt).toLocaleDateString();

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <small>Created At: {date}</small>
      </p>
      <button onClick={() => navigate(`/project/${id}`)}>View Details</button>
    </div>
  );
}
