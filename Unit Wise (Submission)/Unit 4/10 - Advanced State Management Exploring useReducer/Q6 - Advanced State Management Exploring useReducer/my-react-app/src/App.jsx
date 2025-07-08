import React, { useReducer } from "react";
import "./App.css";

const initialState = {
  theme: "light",
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dark = {
    backgroundColor: "black",
    color: "white",
  };

  const light = {
    backgroundColor: "white",
    color: "black",
  };

  return (
    <div style={state.theme === "dark" ? dark : light}>
      <h1>Theme: {state.theme}</h1>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Change Theme
      </button>
    </div>
  );
}
