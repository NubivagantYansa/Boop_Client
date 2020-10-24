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
          <Component {...props} {...rest} user={user} features={features} />
        ) : (
          <Redirect to='/login' />
        )
      }
      {...rest}
    />
  );
};
export default PrivateRoute;
