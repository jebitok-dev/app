import CarContainer from '../containers/CarContainer';
import history from '../containers/History';

const getAllCars = () => {
  const request = (car) => ({ type: 'GET_ALL_CARS_REQUEST', car });
  const success = (car) => ({ type: 'GET_ALL_CARS_SUCCESS', car });
  const failure = (error) => ({ type: 'GET_ALL_CARS_FAILURE', error });

  return (dispatch) => {
    dispatch(request());

    CarContainer.getAllCars()
      .then(
        (cars) => {
          dispatch(success(cars));
        },
        (error) => dispatch(failure(error.toString())),
      );
  };
};

const getAllFavorites = (id) => {
  const request = (car) => ({ type: 'GET_ALL_FAVORITES_REQUEST', car });
  const success = (car) => ({ type: 'GET_ALL_FAVORITES_SUCCESS', car });
  const failure = (error) => ({ type: 'GET_ALL_FAVORITES_FAILURE', error });

  return (dispatch) => {
    dispatch(request());

    CarContainer.getAllFavorites(id)
      .then(
        (favorites) => {
          dispatch(success(favorites));
        },
        (error) => dispatch(failure(error.toString())),
      );
  };
};

const addToFavorites = (userId, carId) => {
  const request = (car) => ({ type: 'ADD_TO_FAVORITES_REQUEST', car });
  const success = (car) => ({ type: 'ADD_TO_FAVORITES_SUCCESS', car });
  const failure = (error) => ({ type: 'ADD_TO_FAVORITES_FAILURE', error });

  return (dispatch) => {
    dispatch(request());

    CarContainer.addToFavorites(userId, carId)
      .then(
        (favorites) => {
          history.push('/favorites');
          dispatch(success(favorites));
        },
        (error) => dispatch(failure(error.toString())),
      );
  };
};

const removeFromFavorites = (userId, carId) => {
  const request = (favorites) => ({ type: 'REMOVE_FAVORITE_REQUEST', favorites });
  const success = (favorites) => ({ type: 'REMOVE_FAVORITE_SUCCESS', favorites });
  const failure = (error) => ({ type: 'REMOVE_FAVORITE_FAILURE', error });

  return (dispatch) => {
    dispatch(request());

    CarContainer.deleteFavorite(userId, carId)
      .then(
        (favorites) => {
          history.push('/reset');
          dispatch(success(favorites));
        },
        (error) => dispatch(failure(error.toString())),
      );
  };
};

const Car = {
  getAllCars,
  addToFavorites,
  getAllFavorites,
  removeFromFavorites,
};

export default Car;
