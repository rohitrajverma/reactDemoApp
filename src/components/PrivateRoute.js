import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function PrivateRoute({ component: LoadComponent, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          <LoadComponent />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location.pathname },
            }}
          />
        )
      }
    />
  );
}
const mapStoreToProps = (store) => {
  return {
    isAuthenticated: !!store.userSession.user,
  };
};
export default connect(mapStoreToProps)(PrivateRoute);
