import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoutes = (RouteProps) => {
  const { component: Component, restricted = false, ...rest } = RouteProps;

  const render = (props) => {
    if (localStorage.getItem('user') && restricted) {
      return <Redirect to="/" />;
    }
    /* eslint-disable*/ 
    return <Component {...props} />;
  };

  return <Route {...rest} render={render} />;
};

export default PublicRoutes;
