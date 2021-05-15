
import { useState, createContext, useContext } from "react";

let userData = null
let userDataString = localStorage.getItem("user")
if (userDataString) {
  userData = JSON.parse(userDataString)
}

const userContext = createContext();

export function UserProvider({ children }) {
  const user = useState(userData);
  return <userContext.Provider value={user}>{children}</userContext.Provider>;
}

export const useUserContext = () => {
  let [user, setUser] = useContext(userContext);
  return {user, setUser};
};
