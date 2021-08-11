import Actions from './index';
import CarContainer from '../containers/CarContainer';
import history from '../containers/History';

const login = (name, password, from = '/') => {
  const request = (user) => ({ type: 'LOGIN_REQUEST', user });
  const success = (user) => ({ type: 'LOGIN_SUCCESS', user });
  const failure = (error) => ({ type: 'LOGIN_FAILURE', error });

  return (dispatch) => {
    dispatch(request({ name }));
    CarContainer.login(name, password).then(
      async (user) => {
        if (user.status !== undefined && user.status !== 200) {
          dispatch(failure(user.data.message));
          dispatch(Actions.error(user.data.message));
        } else {
          dispatch(success(user));
          history.push(from);
          dispatch(Actions.success('Login Successful'));
        }
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(Actions.error(error.toString()));
      },
    );
  };
};

const logout = () => {
  CarContainer.logout();
  return { type: 'LOGOUT' };
};

const register = (user) => {
  const request = (user) => ({ type: 'REGISTER_REQUEST', user });
  const success = (user) => ({ type: 'REGISTER_SUCCESS', user });
  const failure = (error) => ({ type: 'REGISTER_FAILURE', error });

  return (dispatch) => {
    dispatch(request(user));

    CarContainer.register(user)
      .then(
        async (user) => {
          if (user.status !== undefined && user.status === 500) {
            dispatch(failure('Email is already used!'));
            dispatch(Actions.error('Email is already used!'));
          } else if (user.status !== undefined && user.status !== 200 && user.status !== 500) {
            dispatch(failure(user.data.message));
            dispatch(Actions.error(user.data.message));
          } else {
            dispatch(success(user));
            const location = {
              pathname: '/',
              state: { fromLogin: true },
            };

            history.push(location);
            dispatch(Actions.success(user.message));
          }
        },
        (error) => {
          dispatch(failure(error.toString()));
          dispatch(Actions.error(error.toString()));
        },
      );
  };
};

const User = {
  login,
  logout,
  register,
};

export default User;
