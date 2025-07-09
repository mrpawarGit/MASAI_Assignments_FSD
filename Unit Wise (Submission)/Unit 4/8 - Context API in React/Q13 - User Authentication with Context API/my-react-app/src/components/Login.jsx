import React, { useContext, useState } from "react";
import { UserContext } from "./DataProvider";

export default function Login() {
  const { user, setUser } = useContext(UserContext);
  const [isLog, setIsLog] = useState(false);

  const btnColor = {
    backgroundColor: isLog ? "red" : "green",
  };
  return (
    <div>
      <h2>{isLog ? `Hello, ${user}` : "Login Please"}</h2>
      <button onClick={() => setIsLog((prev) => !prev)} style={btnColor}>
        {isLog ? "Logout" : "Login"}
      </button>
    </div>
  );
}
