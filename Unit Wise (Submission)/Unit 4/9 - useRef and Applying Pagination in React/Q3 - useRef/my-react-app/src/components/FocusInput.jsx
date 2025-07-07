import React, { useRef, useState } from "react";

function FocusInput() {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);

  function handleFocus() {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.style.backgroundColor = "lightyellow";
      setFocused(true);
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Focus Input Example</h2>
      <input type="text" ref={inputRef} style={{ padding: "8px" }} />
      <button onClick={handleFocus} style={{ marginLeft: "10px" }}>
        Focus Input
      </button>
      {focused && <p>Focused...</p>}
    </div>
  );
}

export default FocusInput;
