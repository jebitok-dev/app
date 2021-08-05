import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import BookAppointment from './BookAppontment';
import Homepage from './Homepage';
import Login from './auth/Login';
import Logout from './auth/Logout';
import Registration from './auth/Registration';
import Model from '../containers/Models';
import Shop from '../containers/Shop';
import Book from '../containers/Book';
import '../styles/App.css';
import CarComponent from './CarComponent';

const App = () => {
  const [loggedInStatus, setLoggedInStatus] = useState('NOT_LOGGED_IN');
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState('');

  const handleLogin = (data) => {
    const login = 'LOGGED_IN';
    setLoggedInStatus(login);
    localStorage.setItem('token', data.token);
    localStorage.setItem('id', data.user.id);
    localStorage.setItem('username', data.user.username);
    setUser(localStorage.username);
    setUserId(localStorage.id);
  };

  const handleLogout = () => {
    const logout = 'NOT_LOGGED_IN';
    setLoggedInStatus(logout);
    setUser({});
    localStorage.clear();
  };

  return (
    <div className="App">
      <Router>
        {
          localStorage.length >= 1 ? (
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Home
                    {...props}
                    loggedInStatus={loggedInStatus}
                    handleLogin={handleLogin}
                    handleLogout={handleLogout}
                  />
                )}
              />
              <Route
                exact
                path="/model"
                render={(props) => (
                  <Model
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path="/book/:model_id"
                render={(props) => (
                  <BookAppointment
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path="/shop"
                render={(props) => (
                  <Shop
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path="/book"
                render={(props) => (
                  <Book
                    {...props}
                    user={user}
                    userId={userId}
                  />
                )}
              />
              <Route
                path="/model/:model_id"
                component={CarComponent}
              />
              <Route
                exact
                path="/configure"
                component={Configure}
              />

            </Switch>
          )
            : (
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Homepage
                      {...props}
                      loggedInStatus={loggedInStatus}
                      handleLogin={handleLogin}
                      handleLogout={handleLogout}
                    />
                  )}
                />
                <Route
                  exact
                  path="/signup"
                  render={(props) => (
                    <Registration
                      {...props}
                      loggedInStatus={loggedInStatus}
                      handleLogin={handleLogin}
                      handleLogout={handleLogout}
                    />
                  )}
                />
                <Route
                  exact
                  path="/login"
                  render={(props) => (
                    <Login
                      {...props}
                      loggedInStatus={loggedInStatus}
                      handleLogin={handleLogin}
                      handleLogout={handleLogout}
                    />
                  )}
                />
              </Switch>
            )
        }
      </Router>
    </div>
  );
};

export default App;
