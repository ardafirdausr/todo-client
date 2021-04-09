
import React, { useState, useContext, createContext } from "react";

const authContext = createContext();

function useProvideAuth() {
  const [user, setUser] = useState(null);
  return { user, setUser};
}

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};
