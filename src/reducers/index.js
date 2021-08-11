import { combineReducers } from 'redux';
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

export default combinedReducers;
