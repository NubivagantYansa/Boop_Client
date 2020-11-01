import React from "react";
import { Redirect, Route } from "react-router-dom";

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
