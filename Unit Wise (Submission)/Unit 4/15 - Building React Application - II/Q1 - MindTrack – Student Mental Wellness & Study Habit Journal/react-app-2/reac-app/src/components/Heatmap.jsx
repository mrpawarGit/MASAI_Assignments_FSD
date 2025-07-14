import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { useAuth } from "../context/AuthContext";
import { collection, getDocs } from "firebase/firestore";

export default function Heatmap() {
  const { user } = useAuth();
  const [dates, setDates] = useState([]);

  useEffect(() => {
    if (!user) return;
    const fetchLogs = async () => {
      const snapshot = await getDocs(collection(db, "users", user.uid, "logs"));
      const days = snapshot.docs.map((doc) => doc.data().date);
      setDates(days);
    };
    fetchLogs();
  }, [user]);

  const today = new Date();
  const past30Days = Array.from({ length: 30 }).map((_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    return date.toISOString().slice(0, 10);
  });

  return (
    <div className="bg-white p-6 rounded shadow max-w-2xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">📆 Productivity Heatmap</h2>
      <div className="grid grid-cols-10 gap-2">
        {past30Days.reverse().map((day) => (
          <div
            key={day}
            title={day}
            className={`w-6 h-6 rounded-sm ${
              dates.includes(day) ? "bg-green-500" : "bg-gray-200"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
