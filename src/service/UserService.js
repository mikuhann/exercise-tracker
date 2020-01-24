import ExerciseTrackerApi from './ExerciseTrackerApi';
import { userEndpoints } from '../constants/endpoints';

export const createUser = async (user) => {
  try {
    const res = await ExerciseTrackerApi.post(userEndpoints.CREATE, user);

    return res.data.payload;
  } catch (e) {
    console.log(e.message)
  }
};

export const getUsers = async () => {
  try {
    const res = await ExerciseTrackerApi.get(userEndpoints.GET_USERS);

    return res.data.payload;
  } catch (e) {
    console.log(e.message);
  }
};
