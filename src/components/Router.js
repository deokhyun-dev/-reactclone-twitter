/* eslint-disable */

import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";

import Home from "../routes/Home";

const AppRouter = props => {
  console.log(props);
  const { isLoggedIn } = props;
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact patch="/">
              <Home />
            </Route>
          </>
        ) : (
          <Route exact patch="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
