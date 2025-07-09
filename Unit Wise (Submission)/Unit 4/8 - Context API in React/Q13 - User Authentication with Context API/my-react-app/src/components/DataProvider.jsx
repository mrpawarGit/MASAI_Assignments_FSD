import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function DataProvider({ children }) {
  const [user, setUser] = useState("Jimmy");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
