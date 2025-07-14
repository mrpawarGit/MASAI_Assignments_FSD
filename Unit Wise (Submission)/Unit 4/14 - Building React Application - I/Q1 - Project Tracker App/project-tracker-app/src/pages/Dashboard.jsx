import { useEffect, useState } from "react";
import { getProjects } from "../services/firebaseAPI";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjects();
      const formatted = Object.entries(data || {}).map(([id, val]) => ({
        id,
        ...val,
      }));
      setProjects(formatted);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <h2>All Projects</h2>
        <div className="projects-list">
          {projects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </>
  );
}
