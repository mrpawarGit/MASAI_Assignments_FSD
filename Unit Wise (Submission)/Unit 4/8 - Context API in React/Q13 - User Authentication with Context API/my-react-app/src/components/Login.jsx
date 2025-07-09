import React, { useContext, useState } from "react";
import { UserContext } from "./DataProvider";

export default function Login() {
  const { user, setUser } = useContext(UserContext);
  const [isLog, setIsLog] = useState(false);

  return (
    <div>
      <h2>{isLog ? `Hello, ${user}` : "Login Please"}</h2>
      <button onClick={() => setIsLog((prev) => !prev)}>
        {isLog ? "Logout" : "Login"}
      </button>
    </div>
  );
}
