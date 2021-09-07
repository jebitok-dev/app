import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Car from './CarReducer';
import Authentication from './AuthReducer';
import Registration from './Registration';
import Favorite from './FavReducer';
import Notification from './Notification';

const combinedReducers = combineReducers({
  Authentication,
  Car,
  Registration,
  Favorite,
  Notification,
});

const store = createStore(combinedReducers, applyMiddleware(thunk));

export default store;
