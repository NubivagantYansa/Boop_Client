import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUser } from "../context/userContext";

const AnonRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, authenticate } = useUser();
  return (
    <Route
      render={(props) =>
        isAuthenticated === false ? (
          <Component {...props} {...rest} authenticate={authenticate} />
        ) : (
          <Redirect to='/board' />
        )
      }
      {...rest}
    />
  );
};

export default AnonRoute;
