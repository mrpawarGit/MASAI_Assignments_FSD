import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebase";

export default function MentorComment({ userId, log, onUpdate }) {
  const [comment, setComment] = useState(log.mentorComment || "");
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const handleSave = async () => {
    if (!userId || !log.id) return;
    setSaving(true);
    try {
      const logRef = doc(db, "users", userId, "logs", log.id);
      await updateDoc(logRef, { mentorComment: comment });
      setMessage("✅ Comment saved!");
      setIsEditing(false);
      onUpdate?.(); // Refresh list if needed
    } catch (err) {
      console.error("Failed to save mentor comment:", err);
      setMessage("❌ Failed to save comment.");
    }
    setSaving(false);
  };

  return (
    <div className="mt-2">
      {isEditing ? (
        <>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="2"
            placeholder="Write your encouragement or guidance..."
            className="w-full border p-2 rounded"
          />
          <div className="flex gap-2 mt-2">
            <button
              onClick={handleSave}
              disabled={saving}
              className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
            >
              {saving ? "Saving..." : "Save"}
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
          className="text-sm text-blue-500 underline"
        >
          💬 {comment ? "Edit Mentor Comment" : "Add Mentor Comment"}
        </button>
      )}
      {comment && !isEditing && (
        <p className="text-green-600 text-sm mt-1">{comment}</p>
      )}
      {message && <p className="text-xs text-gray-500 mt-1">{message}</p>}
    </div>
  );
}
