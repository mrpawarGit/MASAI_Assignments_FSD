import React from "react";

export default function Parent({ children }) {
  return <div style={{ border: "1px solid red" }}>{children}</div>;
}
