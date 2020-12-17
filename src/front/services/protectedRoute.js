import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { getUser } from './localStorage';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token') && localStorage.getItem('token').replace('Bearer ', '');
  if (token && jwtDecode(token).exp < Date.now() / 1000) {
    localStorage.clear();
  }
  return (
    <Route
      {...rest}
      render={(props) => (getUser() && getUser().token ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      ))}
    />
  );
};

export default ProtectedRoute;
