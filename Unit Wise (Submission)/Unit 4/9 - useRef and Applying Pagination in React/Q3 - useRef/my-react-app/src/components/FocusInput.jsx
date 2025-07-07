import React, { useRef, useState } from "react";

function FocusInput() {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);

  function handleF() {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.style.backgroundColor = "red";
      setFocused(true);
    }
  }

  return (
    <div>
      <h2>Focus Input</h2>
      <input type="text" ref={inputRef} style={{ padding: "10px" }} />
      <button onClick={handleF} style={{ margin: "10px" }}>
        Focus Input
      </button>
    </div>
  );
}

export default FocusInput;
