import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { useAuth } from "../context/AuthContext";
import { collection, getDocs } from "firebase/firestore";

export default function InsightEngine() {
  const { user } = useAuth();
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    if (!user) return;
    const fetchLogs = async () => {
      const snapshot = await getDocs(collection(db, "users", user.uid, "logs"));
      const logs = snapshot.docs.map((doc) => doc.data());

      if (logs.length < 7) return;

      const avg = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

      const sleepAvg = avg(logs.map((l) => l.sleepHours || 0));
      const stressAvg = avg(logs.map((l) => l.stressLevel || 0));
      const breakAvg = avg(logs.map((l) => l.breakTime || 0));
      const focusAvg = avg(logs.map((l) => l.focusLevel || 0));

      const newInsights = [];

      if (sleepAvg >= 8)
        newInsights.push("🛌 You focus better after 8+ hours of sleep.");
      if (breakAvg >= 30 && stressAvg <= 5)
        newInsights.push("☕ Longer breaks seem to reduce your stress levels.");
      if (focusAvg >= 7)
        newInsights.push("🎯 You’ve been consistently focused. Keep it up!");

      setInsights(newInsights);
    };
    fetchLogs();
  }, [user]);

  if (!user || insights.length === 0) return null;

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">🧠 Weekly Insights</h2>
      <ul className="list-disc list-inside space-y-2">
        {insights.map((item, idx) => (
          <li key={idx} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
