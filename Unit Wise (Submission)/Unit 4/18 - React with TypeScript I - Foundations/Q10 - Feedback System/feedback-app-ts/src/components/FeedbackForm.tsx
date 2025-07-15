import React, { useState } from "react";
import { Rating } from "../types/feedback";
import type { FeedbackEntry } from "../types/feedback";

interface Props {
  onSubmit: (entry: FeedbackEntry) => void;
}

const FeedbackForm: React.FC<Props> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [rating, setRating] = useState<Rating>(Rating.GOOD);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    const newEntry: FeedbackEntry = {
      id: Date.now().toString(),
      name,
      email,
      comments,
      rating,
    };

    onSubmit(newEntry);
    setName("");
    setEmail("");
    setComments("");
    setRating(Rating.GOOD);
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <h2>Feedback Form</h2> */}
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ width: "300px" }}
      />
      <br />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ width: "300px" }}
      />
      <br />
      <select
        value={rating}
        onChange={(e) => setRating(e.target.value as Rating)}
        style={{ width: "300px" }}
      >
        {Object.values(Rating).map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
      <br />
      <br />
      <textarea
        placeholder="Comments"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        style={{ width: "300px", height: "150px" }}
      />
      <br />
      <br />
      <button type="submit">Submit</button>
      {submitted && <p>Thanks for your feedback!</p>}
    </form>
  );
};

export default FeedbackForm;
