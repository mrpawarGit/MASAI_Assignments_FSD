import React, { useState } from "react";
import { DataProvider, UserContext } from "./DataProvider";

export default function Login() {
  const [user, setUser] = useState(UserContext);
  return (
    <DataProvider>
      <h2>Hello User,{user}</h2>
      <button></button>
    </DataProvider>
  );
}
