import React from "react";
import { Route, Redirect } from "react-router-dom";
import { publicRoutes } from "./routes";

const AppRouter = () => {
  return (
    <>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to="/signIn" />
    </>
  );
};

export default AppRouter;
