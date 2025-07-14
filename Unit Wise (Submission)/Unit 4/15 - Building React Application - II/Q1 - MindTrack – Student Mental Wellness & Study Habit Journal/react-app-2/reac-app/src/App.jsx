import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MentorDashboard from "./pages/MentorDashboard";
import ExportJournal from "./pages/ExportJournal";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mentor" element={<MentorDashboard />} />
        <Route path="/export" element={<ExportJournal />} />
      </Routes>
    </div>
  );
}

export default App;
