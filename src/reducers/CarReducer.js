const Car = (state = {}, action) => {
  switch (action.type) {
    case 'GET_ALL_CARS_REQUEST':
      return {
        loading: true,
      };
    case 'GET_ALL_CARS_SUCCESS':
      return {
        cars: action.cars,
      };
    case 'GET_ALL_CARS_FAILURE':
      return {
        error: action.error,
      };
    default:
      return state;
  }
};

export default Car;
