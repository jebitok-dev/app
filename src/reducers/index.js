import { combineReducers } from 'redux';
import getAppointments from './CarReducer';

const combinedReducers = combineReducers({ getAppointments });

export default combinedReducers;
