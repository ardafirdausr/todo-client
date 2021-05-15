
import { useState, createContext, useContext } from "react";

const userData = JSON.parse(localStorage.getItem("user"))

const userContext = createContext();

export function UserProvider({ children }) {
  const user = useState(userData);
  return <userContext.Provider value={user}>{children}</userContext.Provider>;
}

export const useUserContext = () => {
  let [user, setUser] = useContext(userContext);
  return {user, setUser};
};
