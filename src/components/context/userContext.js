import React, { useState, createContext, useContext, useEffect } from "react";
import { userLogout, validateSession } from "../../services/userService";

const UserContext = createContext({});

export function UserWrapper({ children }) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState("");

  const isAuthenticated = Boolean(user);

  useEffect(() => {
    setLoading(true);
    const localAccessToken = localStorage.getItem("accessToken");
    if (localAccessToken) {
      setAccessToken(localAccessToken);
      validateSession(localAccessToken)
        .then(({ session }) => {
          setUser(session.userId);
          setLoading(false);
        })
        .catch((err) => {
          console.log("Access token error", err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  function authenticate(userFromInput) {
    setUser(userFromInput);
  }

  async function handleLogout() {
    await userLogout(accessToken);
    localStorage.clear();
    return setUser(null);
  }

  console.log("LOAAAAD", loading);

  if (loading) {
    return <div>loading... </div>;
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        handleLogout,
        authenticate,
        loading,
        setLoading,
        accessToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
