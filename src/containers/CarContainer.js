import axios from 'axios';
import auth from './Auth';
import history from './History';

const login = async (name, password) => {
  const options = {
    method: 'POST',
    url: 'https://young-falls-88019.herokuapp.com/auth/login',
    params: {},
    headers: {},
    data: {
      email: name,
      password,
    },
  };

  let user = {};

  return axios.request(options)
    .then((response) => {
      user = response.data;
      user.name = name;
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    })
    .catch((error) => error.response);
};

const logout = async () => {
  const options = {
    method: 'DELETE',
    url: 'https://young-falls-88019.herokuapp.com/users/sign_out',
    headers: auth(),
  };

  return axios.request(options)
    .then((response) => {
      localStorage.removeItem('user');
      history.push('/login');

      return response;
    })
    .catch((error) => error.response);
};

const register = async (user) => {
  const options = {
    method: 'POST',
    url: 'https://young-falls-88019.herokuapp.com/signup',
    params: {},
    headers: { },
    data: {
      name: user.name,
      email: user.email,
      password: user.password,
      password_confirmation: user.password_confirmation,
    },
  };

  return axios.request(options)
    .then((response) => {
      const loggedUser = response.data;
      loggedUser.name = user.name;

      localStorage.setItem('user', JSON.stringify(loggedUser));
      return loggedUser;
    })
    .catch((error) => error.response);
};

const getAllCars = async () => {
  const options = {
    method: 'GET',
    url: 'https://young-falls-88019.herokuapp.com/cars',
    headers: auth(),
  };

  return axios.request(options)
    .then((response) => response.data)
    .catch((error) => error.response);
};

const getAllFavorites = async (user) => {
  const options = {
    method: 'GET',
    url: `https://young-falls-88019.herokuapp.com/users/${user}/favorites`,
    headers: auth(),
  };

  return axios.request(options)
    .then((response) => response.data)
    .catch((error) => error.response);
};

const addToFavorites = async (user, carId) => {
  const options = {
    method: 'POST',
    url: `https://young-falls-88019.herokuapp.com/users/${user}/favorites`,
    headers: auth(),
    data: {
      card_id: carId,
    },
  };

  return axios.request(options)
    .then((response) => response.data)
    .catch((error) => error.response);
};

const deleteFavorite = async (user, id) => {
  const options = {
    method: 'DELETE',
    url: `https://young-falls-88019.herokuapp.com/users/${user}/favorites/${id}`,
    headers: auth(),
  };

  return axios.request(options)
    .then((response) => response.data)
    .catch((error) => error.response);
};

const CarContainer = {
  login,
  logout,
  register,
  getAllCars,
  deleteFavorite,
  addToFavorites,
  getAllFavorites,
};

export default CarContainer;
