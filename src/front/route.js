import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

import ProtectedRoute from './services/protectedRoute';

import Auth from './pages/Auth';
import Home from './pages/Home';
import Project from './pages/admin/Project';
import ProjectNewEdit from './pages/admin/ProjectNewEdit';
import About from './pages/About';
import Contact from './pages/Contact';

export default function RouteApp() {
  return (
    <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Auth} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <ProtectedRoute path="/admin" exact component={Project} />
          <ProtectedRoute path="/admin/new" component={ProjectNewEdit} />
          <ProtectedRoute path="/admin/message" component={Message} />
          <ProtectedRoute path="/admin/message/:slug" component={MessageView} />
          <ProtectedRoute path="/admin/project/:slug" component={ProjectNewEdit} />
          <Redirect to="/" />
    </Switch>
  );
}
