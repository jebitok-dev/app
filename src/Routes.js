import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Switch, Router } from 'react-router';
import Routes from './components/Routes';
import PublicRoutes from './components/PublicRoutes';
import history from './containers/History';
import Actions from './actions/index';
import App from './components/App';
import Details from './components/Details';
import Favorites from './components/Favorite';
import Login from './components/Login';
import Signup from './components/SignUp';

const AppRoutes = () => {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  /* eslint-disable*/
  useEffect(() => {
    history.listen(({ actions, location }) => {
      dispatch(Actions.clear());
    });
  }, []);

  return (
    <div className="m-auto w-4/4 lg:w-3/4">
      {
                alert
                && <div className={`alert ${alert.type}`}>{alert}</div>
            }
      <Router history={history}>
        <Switch>
          <PublicRoutes restricted component={Signup} path="/register" exact />
          <PublicRoutes restricted component={Login} path="/login" exact />
          <Routes component={App} path="/" exact />
          <Routes component={Details} path="/details/:id/:favorite" exact />
          <Routes component={Favorites} path="/favorites" exact />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default AppRoutes;
