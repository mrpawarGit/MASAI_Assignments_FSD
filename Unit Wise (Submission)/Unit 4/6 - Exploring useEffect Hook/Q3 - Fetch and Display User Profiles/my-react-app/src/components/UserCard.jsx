import React from "react";

function UserCard({ name, email, city }) {
  const card = {
    border: "1px solid #ccc",
    padding: "16px",
    margin: "12px 0",
    borderRadius: "8px",
    display: "inline-block",
    padding: "20px",
    margin: "15px",
  };

  return (
    <div style={card}>
      <h4>{name}</h4>
      <p>Email: {email}</p>
      <p>City: {city}</p>
    </div>
  );
}

export default UserCard;
