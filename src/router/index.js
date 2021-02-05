import React from "react";
import isAuthenticated from "./auth";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import Home from '../Home/containers/HomeContainer'

import * as history from "./history";

const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
