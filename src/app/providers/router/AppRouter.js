import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { publicRoutes } from "./routes";
import { privateRoutes } from "./routes";

const AppRouter = () => {
  const userIsLogged = useSelector((state) => state.authReducer.userIsLogged);

  return userIsLogged ? (
    <Switch>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to="/main" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to="/signIn" />
    </Switch>
  );
};

export default AppRouter;
