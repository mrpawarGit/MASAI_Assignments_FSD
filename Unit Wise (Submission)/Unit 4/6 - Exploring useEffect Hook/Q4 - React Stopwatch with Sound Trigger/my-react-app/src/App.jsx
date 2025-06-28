import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning && timer < 10) {
      intervalId = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }

    // Stop 
    if (timer === 10) {
      console.log("Sound::: 10sec");
      setIsRunning(false);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, timer]);

  function timerStart() {
    if (!isRunning && timer < 10) {
      setIsRunning(true);
    }
  }

  return (
    <>
      <h2>Timer: {timer}</h2>
      <button onClick={timerStart}>Start Timer</button>
    </>
  );
}

export default App;
