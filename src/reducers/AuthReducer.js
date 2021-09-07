const user = JSON.stringify(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

const Authentication = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        loggedIn: true,
        user: action.user,
      };
    case 'LOGIN_SUCCESS':
      return {
        loggedIn: true,
        user: action.user,
      };
    case 'LOGIN_FAILURE':
      return {};
    case 'LOGOUT':
      return {
        loggedIn: false,
        user: {},
      };
    default:
      return state;
  }
};

export default Authentication;
