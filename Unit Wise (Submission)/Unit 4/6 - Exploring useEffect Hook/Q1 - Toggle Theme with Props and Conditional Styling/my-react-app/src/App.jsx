import { useState } from "react";
import "./App.css";

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
      </div>
    </>
  );
}

export default App;
