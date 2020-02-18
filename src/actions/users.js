import { GET_USERS, SET_LOADING, CREATE_USER } from '../constants/actions/Users';
import * as UserService from '../service/UserService';

export const getUsers = () => async (dispatch) => {
  try {
    const users = await UserService.getUsers();

    dispatch(setLoading());

    dispatch({
      type: GET_USERS,
      payload: users,
    });
  } catch (e) {
    console.log(e.message);
  }
};

export const createUser = (user) => async (dispatch) => {
  try {
    const newUser = await UserService.createUser(user);

    dispatch({
      type: CREATE_USER,
      payload: newUser,
    });
  } catch (e) {
    console.log(e.message);
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
