import { useState } from "react";
import { db } from "../utils/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";

export default function DailyLogForm() {
  const { user } = useAuth();

  const [studyHours, setStudyHours] = useState("");
  const [breakTime, setBreakTime] = useState("");
  const [sleepHours, setSleepHours] = useState("");
  const [stressLevel, setStressLevel] = useState(5);
  const [focusLevel, setFocusLevel] = useState(5);
  const [reflection, setReflection] = useState("");
  const [shareWithMentor, setShareWithMentor] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    try {
      await addDoc(collection(db, "users", user.uid, "logs"), {
        studyHours: Number(studyHours),
        breakTime: Number(breakTime),
        sleepHours: Number(sleepHours),
        stressLevel: Number(stressLevel),
        focusLevel: Number(focusLevel),
        reflection,
        shareWithMentor,
        createdAt: Timestamp.now(),
        date: new Date().toISOString().slice(0, 10), // YYYY-MM-DD
      });
      setSuccess("Log saved successfully!");
      setStudyHours("");
      setBreakTime("");
      setSleepHours("");
      setStressLevel(5);
      setFocusLevel(5);
      setReflection("");
      setShareWithMentor(false);
    } catch (err) {
      console.error("Error saving log:", err);
      setSuccess("Failed to save log.");
    }
    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded shadow max-w-2xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">Daily Wellness Log</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="number"
          placeholder="Study Hours"
          value={studyHours}
          onChange={(e) => setStudyHours(e.target.value)}
          required
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Break Time (in minutes)"
          value={breakTime}
          onChange={(e) => setBreakTime(e.target.value)}
          required
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Sleep Hours"
          value={sleepHours}
          onChange={(e) => setSleepHours(e.target.value)}
          required
          className="border p-2 rounded"
        />

        <div className="flex justify-between gap-4">
          <label className="w-full">
            Stress Level: {stressLevel}
            <input
              type="range"
              min="1"
              max="10"
              value={stressLevel}
              onChange={(e) => setStressLevel(e.target.value)}
              className="w-full"
            />
          </label>
          <label className="w-full">
            Focus Level: {focusLevel}
            <input
              type="range"
              min="1"
              max="10"
              value={focusLevel}
              onChange={(e) => setFocusLevel(e.target.value)}
              className="w-full"
            />
          </label>
        </div>

        <textarea
          placeholder="Reflection (Markdown supported)"
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          rows="4"
          className="border p-2 rounded resize-y"
        ></textarea>

        <label className="flex items-center space-x-2 mt-2">
          <input
            type="checkbox"
            checked={shareWithMentor}
            onChange={(e) => setShareWithMentor(e.target.checked)}
          />
          <span>Share this log with mentor</span>
        </label>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Saving..." : "Submit Log"}
        </button>
      </form>

      {success && (
        <p className="text-green-600 mt-4 text-sm font-medium">{success}</p>
      )}
    </div>
  );
}
