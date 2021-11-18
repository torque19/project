import React from 'react';
import {Router, Route, Switch} from "react-router-dom";
import App from "./App";
import Normal_entry from "./Normal_entry";
import {useState, useEffect} from 'react';
import { createBrowserHistory } from 'history';
function Routes(){
  const history = createBrowserHistory();
  return (
      <div>
          <Router history={history}>
              <Route path="/login" component={App} />
              <Route path="/home" component={Normal_entry} />
          </Router>
      </div>
  );
  }

export default Routes;