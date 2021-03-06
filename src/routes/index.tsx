import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup/index';
import Dashboard from '../pages/Dashboard/index';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Signin} />
    <Route path="/signup" component={Signup} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
