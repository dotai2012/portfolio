import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from './pages/Auth';
import Home from './pages/Home';
import ProtectedRoute from './services/protectedRoute';
import Project from './pages/admin/Project';
import ProjectNewEdit from './pages/admin/ProjectNewEdit';

export default function RouteApp() {
  return (
    <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Auth} />
          <ProtectedRoute path="/admin" exact component={Project} />
          <ProtectedRoute path="/admin/new" component={ProjectNewEdit} />
    </Switch>
  );
}
