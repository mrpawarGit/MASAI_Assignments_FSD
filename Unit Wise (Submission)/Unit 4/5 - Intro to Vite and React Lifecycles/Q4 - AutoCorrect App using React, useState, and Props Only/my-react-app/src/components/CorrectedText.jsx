import React from "react";

const CorrectedText = ({ text, corrections }) => {
  const correctedText = text
    .split(" ")
    .map((word) => corrections[word] || word)
    .join(" ");

  return (
    <div>
      <h4>Corrected Text :</h4>
      <p>{correctedText}</p>
    </div>
  );
};

export default CorrectedText;
