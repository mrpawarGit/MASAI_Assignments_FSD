import { useEffect, useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);

  useState(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUsers(data);
  }

  return (
    <>
      <h1>User Profiles</h1>
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          city={user.address.city}
        />
      ))}
    </>
  );
}

export default App;
