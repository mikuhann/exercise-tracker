import { GET_USERS, CREATE_USER, SET_LOADING } from '../constants/actions/Users';

const initialState = {
  users: [],
  loading: true,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS: {
      return {
        ...state,
        users: payload,
      }
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }
    case CREATE_USER: {
      return {
        ...state,
      }
    }
    default:
      return state;
  }
}
