const Favorite = (state = {}, action) => {
  switch (action.type) {
    case 'GET_ALL_FAVORITES_REQUEST':
      return {
        loading: true,
      };
    case 'GET_ALL_FAVORITES_SUCCESS':
      return {
        favorites: action.car,
      };
    case 'GET_ALL_FAVORITES_FAILURE':
      return {
        error: action.error,
      };
    case 'ADD_TO_FAVORITES_REQUEST':
      return {
        loading: true,
      };
    case 'ADD_TO_FAVORITES_SUCCESS':
      return {
        favorites: action.favorite,
      };
    case 'ADD_TO_FAVORITES_FAILURE':
      return {
        error: action.error,
      };
    case 'REMOVE_FAVORITE_REQUEST':
      return {
        loading: true,
      };
    case 'REMOVE_FAVORITE_SUCCESS':
      return {
        favorite: action.favorite,
      };
    case 'REMOVE_FAVORITE_FAILURE':
      return {
        error: action.error,
      };
    default:
      return state;
  }
};

export default Favorite;
