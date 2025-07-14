import { useEffect, useState } from "react";
import {
  collectionGroup,
  getDocs,
  updateDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../utils/firebase";
import ReactMarkdown from "react-markdown";

export default function MentorDashboard() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [commentMap, setCommentMap] = useState({});

  useEffect(() => {
    const fetchLogs = async () => {
      // Get all logs from users who have opted in
      const q = query(collectionGroup(db, "logs")); // Assumes mentors can view all logs
      const snapshot = await getDocs(q);
      const data = snapshot.docs
        .map((docSnap) => ({
          id: docSnap.id,
          path: docSnap.ref.path,
          ...docSnap.data(),
        }))
        .filter((log) => log.shareWithMentor); // only if student opted in
      setLogs(data);
      setLoading(false);
    };
    fetchLogs();
  }, []);

  const handleCommentSubmit = async (logId, logPath) => {
    const comment = commentMap[logId];
    if (!comment) return;
    try {
      const logRef = doc(db, logPath);
      await updateDoc(logRef, {
        mentorComment: comment,
      });
      alert("Comment added!");
      setCommentMap((prev) => ({ ...prev, [logId]: "" }));
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading logs...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 mt-8 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-6">👨‍🏫 Mentor Dashboard</h2>

      {logs.length === 0 && (
        <p className="text-gray-600 text-center">No shared logs yet.</p>
      )}

      {logs.map((log) => (
        <div key={log.id} className="mb-6 border-b pb-4">
          <p className="text-sm text-gray-500 mb-1">
            <strong>Date:</strong> {log.date} | Study: {log.studyHours}h |
            Sleep: {log.sleepHours}h | Stress: {log.stressLevel} | Focus:{" "}
            {log.focusLevel}
          </p>
          <ReactMarkdown className="prose">{log.reflection}</ReactMarkdown>

          {log.mentorComment && (
            <p className="mt-2 text-green-700 font-medium">
              💬 Mentor: {log.mentorComment}
            </p>
          )}

          <textarea
            placeholder="Write a positive comment or suggestion"
            className="w-full border rounded p-2 mt-2"
            rows={2}
            value={commentMap[log.id] || ""}
            onChange={(e) =>
              setCommentMap((prev) => ({ ...prev, [log.id]: e.target.value }))
            }
          />
          <button
            onClick={() => handleCommentSubmit(log.id, log.path)}
            className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
          >
            Add Comment
          </button>
        </div>
      ))}
    </div>
  );
}
