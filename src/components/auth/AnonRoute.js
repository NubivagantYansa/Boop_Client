import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const AnonRoute = ({
  component: Component,
  authenticated,
  authenticate,
  ...rest
}) => {
  return (
    <Route
      render={(props) =>
        authenticated === false ? (
          <Component {...props} authenticate={authenticate} />
        ) : (
          <Redirect to='/profilesBoard' />
        )
      }
      {...rest}
    />
  );
};

export default AnonRoute;
