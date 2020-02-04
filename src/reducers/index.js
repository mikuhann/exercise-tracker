import { combineReducers } from 'redux';
import exerciseReducer from './exercise';

export default combineReducers({
  exercise: exerciseReducer,
});
