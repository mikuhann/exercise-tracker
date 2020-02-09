import {
  DELETE_EXERCISE,
  GET_EXERCISES,
  SET_LOADING,
  CREATE_EXERCISE,
} from '../constants/actions/Exercise';

import { removeItemById } from './helpers/removeItemById';

const initialState = {
  exercises: [],
  current: null,
  loading: true,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_EXERCISES: {
      return {
        ...state,
        exercises: payload,
      };
    }
    case CREATE_EXERCISE: {
      return {
        ...state,
      };
    }
    case DELETE_EXERCISE: {
      return {
        ...state,
        exercises: removeItemById(state.exercises, payload),
      }
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state
  }
};
