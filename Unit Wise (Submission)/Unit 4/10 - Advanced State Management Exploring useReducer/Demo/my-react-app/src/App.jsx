import { useContext, useState } from "react";
import "./App.css";
import { createContext } from "react";
import Parent from "./components/Parent";

const UserContext = createContext();

function App() {
  const [name, setName] = useState("Raju");
  const [age, setAge] = useState(25);

  return (
    <>
      <UserContext.Provider value={{ name, age }}>
        <Parent>
        <Child />
        </Parent>
      </UserContext.Provider>
    </>
  );
}

function Child() {
  const name = useContext(UserContext);
  return (
    <div>
      <h2>
        Hello From Chlild, {name.name} ({name.age})
      </h2>
    </div>
  );
}

export default App;
