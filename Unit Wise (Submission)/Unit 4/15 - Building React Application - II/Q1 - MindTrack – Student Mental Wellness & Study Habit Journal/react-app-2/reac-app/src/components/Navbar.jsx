import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between">
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Dashboard
        </Link>
        <Link to="/mentor" className="hover:underline">
          Mentor
        </Link>
        <Link to="/export" className="hover:underline">
          Export
        </Link>
      </div>
      <div className="space-x-4">
        {!user ? (
          <>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/register" className="hover:underline">
              Register
            </Link>
          </>
        ) : (
          <button onClick={logout} className="hover:underline">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
