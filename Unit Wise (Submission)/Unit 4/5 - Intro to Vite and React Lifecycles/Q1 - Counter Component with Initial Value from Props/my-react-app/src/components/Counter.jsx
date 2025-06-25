import { useState } from "react";

function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
    // if (count <= initialValue) setCount(initialValue);
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} disabled={count == initialValue}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
