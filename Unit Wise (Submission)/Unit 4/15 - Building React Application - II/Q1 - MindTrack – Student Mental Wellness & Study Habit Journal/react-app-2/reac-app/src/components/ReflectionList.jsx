import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import ReactMarkdown from "react-markdown";
import ReflectionEditor from "./ReflectionEditor";

export default function ReflectionList() {
  const { user } = useAuth();
  const [logs, setLogs] = useState([]);

  const fetchLogs = async () => {
    if (!user) return;
    const logsRef = collection(db, "users", user.uid, "logs");
    const q = query(logsRef, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setLogs(data);
  };

  useEffect(() => {
    fetchLogs();
  }, [user]);

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 mt-10 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">📝 Your Reflections</h2>
      {logs.length === 0 ? (
        <p className="text-gray-600">No entries yet.</p>
      ) : (
        <ul className="space-y-4">
          {logs.map((log) => (
            <li key={log.id} className="border-b pb-3">
              <p className="text-sm text-gray-500 mb-1">
                {log.date} | Study: {log.studyHours}h | Sleep: {log.sleepHours}h
                | Stress: {log.stressLevel} | Focus: {log.focusLevel}
              </p>

              <ReactMarkdown className="prose mb-2">
                {log.reflection || "_No reflection_"}
              </ReactMarkdown>

              <ReflectionEditor log={log} onUpdate={fetchLogs} />

              {log.mentorComment && (
                <p className="text-green-600 mt-2 text-sm font-medium">
                  💬 Mentor: {log.mentorComment}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
