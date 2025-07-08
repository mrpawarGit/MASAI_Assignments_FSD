import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#f0f0f0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <h1>Simple Counter</h1>
      <h2>Count: {state.count}</h2>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          style={{ marginRight: "10px", padding: "10px 20px" }}
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          style={{ padding: "10px 20px" }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
