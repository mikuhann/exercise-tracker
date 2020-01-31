import ExerciseTrackerApi from './ExerciseTrackerApi';
import { exerciseEndpoints } from '../constants/endpoints';
import { endpointWithParams } from '../helpers/endpointWithParams';

export const getExercises = async () => {
  try {
    const res = await ExerciseTrackerApi.get(exerciseEndpoints.EXERCISES);

    return res.data.payload;
  } catch (e) {
    console.log(e.message);
  }
};

export const getExercise = async (id) => {
  try {
    const res = await ExerciseTrackerApi.get(endpointWithParams(exerciseEndpoints.EXERCISE, { id }));

    return res.data.payload;
  } catch (e) {
    console.log(e.message);
  }
};

export const editExercise = async (exercise) => {
  try {
    const res = await ExerciseTrackerApi.post(
      endpointWithParams(exerciseEndpoints.EXERCISE, { id: exercise.id }), exercise );

    return res.data.payload;
  } catch (e) {
    console.log(e.message);
  }
};


export const deleteExercise = async (id) => {
  try {
    const res = await ExerciseTrackerApi.delete(endpointWithParams(exerciseEndpoints.EXERCISE, { id }));

    return res.data.message;
  } catch (e) {
    console.log(e.message)
  }
};
