import { combineReducers } from 'redux';
import exerciseReducer from './exercise';
import usersReducer from './users';

export default combineReducers({
  exercise: exerciseReducer,
  users: usersReducer,
});
