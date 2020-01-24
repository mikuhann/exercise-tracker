import ExerciseTrackerApi from './ExerciseTrackerApi';
import { userEndpoints } from '../constants/endpoints';

export const createUser = async (user) => {
  const res = await ExerciseTrackerApi.post(userEndpoints.CREATE, user);

  return res.data.payload;
};
