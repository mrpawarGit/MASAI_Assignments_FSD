import useTimer from "../hooks/useTimer";

export default function TimerDisplay() {
  const { timer, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <div>
      <h1>{timer} </h1>
      <p>
        <b> {isRunning ? "Running" : "Stopped"} </b>
      </p>

      <button onClick={resetTimer}>Reset</button>
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        Stop
      </button>
    </div>
  );
}
