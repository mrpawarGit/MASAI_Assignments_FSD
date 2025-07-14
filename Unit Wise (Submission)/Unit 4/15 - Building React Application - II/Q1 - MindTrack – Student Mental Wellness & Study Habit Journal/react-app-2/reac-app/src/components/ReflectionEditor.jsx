import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useAuth } from "../context/AuthContext";

export default function ReflectionEditor({ log, onUpdate }) {
  const { user } = useAuth();
  const [reflection, setReflection] = useState(log.reflection || "");
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSave = async () => {
    if (!user || !log.id) return;

    setLoading(true);
    try {
      const logRef = doc(db, "users", user.uid, "logs", log.id);
      await updateDoc(logRef, { reflection });
      setSuccess("Reflection updated!");
      setIsEditing(false);
      onUpdate?.(); // Refresh parent if needed
    } catch (err) {
      console.error("Failed to update reflection:", err);
      setSuccess("Failed to update.");
    }
    setLoading(false);
  };

  return (
    <div className="mt-2">
      {isEditing ? (
        <>
          <textarea
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            rows="4"
            className="w-full border rounded p-2"
          />
          <div className="flex gap-2 mt-2">
            <button
              onClick={handleSave}
              disabled={loading}
              className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
            >
              {loading ? "Saving..." : "Save"}
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-300 px-4 py-1 rounded"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="mt-2 text-blue-600 underline text-sm"
        >
          ✏️ Edit Reflection
        </button>
      )}

      {success && <p className="text-green-600 mt-1 text-sm">{success}</p>}
    </div>
  );
}
