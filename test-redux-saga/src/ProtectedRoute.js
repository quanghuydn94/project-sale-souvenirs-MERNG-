import React, { useContext, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./context/auth";
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);
  const [auth, setAuth] = useState(null);
  if (user.roleName === "admin") {
    setTimeout(() => setAuth(true), 1000);
  } else {
    setTimeout(() => {
      setAuth(false);
    }, 1000);
  }
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) return <Component {...props} />;
        if (!auth)
          return (
            <Redirect to={{ path: "/", state: { from: props.location } }} />
          );
      }}
    />
  );
};

export default ProtectedRoute;
