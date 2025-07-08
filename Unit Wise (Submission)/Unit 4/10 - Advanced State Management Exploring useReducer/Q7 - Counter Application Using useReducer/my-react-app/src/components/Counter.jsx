import React, { useReducer } from "react";

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
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>Counter</h1>
      <h2>Count: {state.count}</h2>
      <div>
        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          disabled={state.count == 0}
        >
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
      </div>
    </div>
  );
}
