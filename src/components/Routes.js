import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Routes = (RouteProps) => {
  const { component: Component, ...rest } = RouteProps;

  const render = (props) => {
    if (!localStorage.getItem('user')) {
      return <Redirect to="/login" />;
    }
    /* eslint-disable*/ 
    return <Component {...props} />;
  };

  return <Route {...rest} render={render} />;
};

export default Routes;
