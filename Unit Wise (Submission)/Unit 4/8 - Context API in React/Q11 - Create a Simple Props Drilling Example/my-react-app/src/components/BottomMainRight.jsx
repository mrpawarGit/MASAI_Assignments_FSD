import React from "react";

function BottomMainRight({ name }) {
  return (
    <div>
      <h3>Hello, {name || "Enter Name in Input Box"}!</h3>
    </div>
  );
}

export default BottomMainRight;