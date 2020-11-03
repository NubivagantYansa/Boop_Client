import React, { useState, createContext, useContext, useEffect } from "react";
import { userLogout, validateSession } from "../../services/userService";

const UserContext = createContext({});

export function UserWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState("");

  const isAuthenticated = Boolean(user);
  console.log("LIFTOFF", isAuthenticated, loading);

  useEffect(() => {
    setLoading(true);
    const localAccessToken = localStorage.getItem("accessToken");
    if (localAccessToken) {
      validateSession(localAccessToken)
        .then(({ session }) => {
          setUser(session.userId);
          setAccessToken(localAccessToken);
          setLoading(false);
        })
        .catch((err) => console.log("Access token error", err));
    }
  }, []);

  function authenticate(userFromInput) {
    setUser(userFromInput);
  }

  async function handleLogout() {
    await userLogout(accessToken);
    localStorage.clear();
    setUser(null);
  }

  if (loading) {
    return <div>loading... </div>;
  }

  return (
    <UserContext.Provider
      value={{ user, isAuthenticated, handleLogout, authenticate, loading }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
