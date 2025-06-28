import React from "react";

function shortBio(text, maxLength = 100) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "… Read More";
}

function ProfileCard({
  name = "Monaco GG",
  age,
  bio = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, suscipit vitae sint ipsum eos rem. Dolorum quae neque in numquam temporibus, enim doloribus soluta deserunt autem, dicta cupiditate, quas ipsam?",
}) {
  return (
    <div style={card}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{shortBio(bio)}</p>
    </div>
  );
}

const card = {
  // textAlign: "center",
  padding: "20px",
  margin: "10px",
  border: "2px solid",
};

export default ProfileCard;
