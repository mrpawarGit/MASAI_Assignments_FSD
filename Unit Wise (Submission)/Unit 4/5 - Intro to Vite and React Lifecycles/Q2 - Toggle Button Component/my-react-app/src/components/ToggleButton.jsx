import { useState } from "react";

function ToggleButton() {
  const [isButtonOn, setIsButtonOn] = useState(false);

  function toogle() {
    setIsButtonOn((prev) => !prev);
  }

  const style = {
    color: isButtonOn ? "green" : "red",
  };

  return (
    <div>
      <button onClick={toogle} style={style}>
        {isButtonOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default ToggleButton;
