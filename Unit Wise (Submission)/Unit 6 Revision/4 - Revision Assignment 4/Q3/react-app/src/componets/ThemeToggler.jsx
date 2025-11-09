import React, { useState } from "react";

export default function ThemeToggler() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <div
        className={`border w-2xl h-15 justify-center ${
          isDark ? "bg-black" : "bg-white"
        } `}
      >
        <button
          className="border m-2 p-2 bg-white"
          onClick={() => setIsDark((prev) => !prev)}
        >
          {isDark ? "Dark" : "Light"}
        </button>
      </div>
      <div className="bg-white dark:bg-black  w-2xl h-15"></div>
    </>
  );
}
