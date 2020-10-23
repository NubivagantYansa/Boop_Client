import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  authenticated,
  user,
  features,
  ...rest
}) => {
  return (
    <Route
      render={(props) =>
        authenticated ? (
          <Component {...props} user={user} />
        ) : (
          <Redirect to='/login' />
        )
      }
      {...rest}
    />
  );
};
export default PrivateRoute;
