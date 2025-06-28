import { useState } from "react";
import "./App.css";
import Paragraphs from "./components/Paragraphs";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className={theme} id="theme-div">
        <button onClick={toggleTheme}>
          {theme === "light" ? "Light" : "Dark"}
        </button>
        <br />
        <Paragraphs />
      </div>
    </>
  );
}

export default App;
