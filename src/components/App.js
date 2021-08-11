import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Router, Switch } from 'react-router';
import Routes from './Routes';
import PublicRoutes from './PublicRoutes';
import Actions from '../actions/index';
import history from '../containers/History';

const App = () => (
  <div>
    <h1>Find Car App</h1>
  </div>
);

export default App;
