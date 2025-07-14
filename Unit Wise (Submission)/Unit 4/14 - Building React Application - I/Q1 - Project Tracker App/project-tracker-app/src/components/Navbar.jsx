import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <Link to="/">Dashboard</Link>
      {user && (
        <>
          <Link to="/add" style={{ marginLeft: "1rem" }}>
            Add Project
          </Link>
          <button style={{ marginLeft: "1rem" }} onClick={logout}>
            Logout
          </button>
        </>
      )}
      {!user && (
        <>
          <Link to="/login" style={{ marginLeft: "1rem" }}>
            Login
          </Link>
          <Link to="/signup" style={{ marginLeft: "1rem" }}>
            Signup
          </Link>
        </>
      )}
    </nav>
  );
}
