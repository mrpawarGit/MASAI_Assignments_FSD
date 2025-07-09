import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext()

export function DataProvider({children}){
  const [user,setUser] = useState("Jimmy");
  return(
    
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
    
  )
}