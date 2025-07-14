import React, { useEffect, useState } from "react";
import FeedbackForm from "./FeedbackForm";
import FeedbackList from "./FeedbackList";
import type { FeedbackEntry } from "../types/feedback";

const STORAGE_KEY = "feedback_entries";

const Feedback: React.FC = () => {
  const [entries, setEntries] = useState<FeedbackEntry[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setEntries(JSON.parse(saved));
    } catch {
      setEntries([]);
    }
  }, []);

  const handleNewEntry = (entry: FeedbackEntry) => {
    const updated = [...entries, entry];
    setEntries(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return (
    <div>
      <h1>Feedback System</h1>
      <FeedbackForm onSubmit={handleNewEntry} />
      <FeedbackList entries={entries} />
    </div>
  );
};

export default Feedback;
