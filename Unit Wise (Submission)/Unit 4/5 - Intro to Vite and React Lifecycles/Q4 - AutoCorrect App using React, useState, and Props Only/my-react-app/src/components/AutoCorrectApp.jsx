import React, { useState } from "react";
import CorrectedText from "./CorrectedText";

const AutoCorrectApp = () => {
  const [inputText, setInputText] = useState("");

  const corrections = {
    teh: "the",
    recieve: "receive",
    adress: "address",
    wierd: "weird",
    thier: "their",
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Auto Correct</h2>
      <input
        type="text"
        placeholder="Type here"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        style={{ height: "30px", width: "250px" }}
      />
      <CorrectedText text={inputText} corrections={corrections} />
    </div>
  );
};

export default AutoCorrectApp;
