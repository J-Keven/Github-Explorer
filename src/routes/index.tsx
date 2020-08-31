import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/repository" component={Repository} />
    </Switch>
  );
};

export default Router;