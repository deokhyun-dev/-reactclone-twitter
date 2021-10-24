/* eslint-disable */

import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";

import Home from "../routes/Home";
import Navigation from "./Navigation";
import Profile from "./Profile";

const AppRouter = props => {
  console.log(props);
  const { isLoggedIn } = props;
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact patch="/">
              <Home />
            </Route>
            <Route exact patch="/profile">
              <Profile />
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
