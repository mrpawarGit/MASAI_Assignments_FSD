import "./App.css";
import useToggleItems from "./hooks/useToggleItems";

function App() {
  const [currentItem, toggleItem] = useToggleItems(["A", "B", "C"], 1);
  return (
    <>
      <div>
        <h1>Current Item: {currentItem}</h1>
        <button onClick={toggleItem}>Toggle</button>
      </div>
    </>
  );
}

export default App;
