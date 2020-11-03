import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUser } from "../context/userContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, user, loading } = useUser();
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Route
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} {...rest} user={user} />
        ) : (
          <Redirect to='/login' />
        )
      }
      {...rest}
    />
  );
};
export default PrivateRoute;
