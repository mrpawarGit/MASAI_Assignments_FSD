import React from "react";
import type { FeedbackEntry } from "../types/feedback";

interface Props {
  entries: FeedbackEntry[];
}

const FeedbackList: React.FC<Props> = ({ entries }) => {
  if (entries.length === 0) return <p>No feedback yet.</p>;

  return (
    <div>
      <h2>All Feedback</h2>
      <ul>
        {entries.map((f) => (
          <li key={f.id}>
            <strong>{f.name}</strong> ({f.email}) - {f.rating}
            <br />
            {f.comments}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
