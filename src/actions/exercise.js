import {
  GET_EXERCISES,
  SET_LOADING,
  DELETE_EXERCISE,
  CREATE_EXERCISE,
} from '../constants/actions/Exercise';
import * as ExerciseService from '../service/ExerciseService';

export const getExercises = () => async (dispatch) => {
  try {
    const exercises = await ExerciseService.getExercises();

    dispatch(setLoading());

    dispatch({
      type: GET_EXERCISES,
      payload: exercises,
    });
  } catch (e) {
    console.log(e.message);
  }
};

export const createExercise = (exercise) => async (dispatch) => {
  try {
    const newExercise = await ExerciseService.createExercise(exercise);

    dispatch({
      type: CREATE_EXERCISE,
      payload: newExercise,
    })
  } catch (e) {
    console.log(e.message);
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const deleteExerciseById = (id) => async (dispatch) => {
  try {
    await ExerciseService.deleteExercise(id);

    dispatch({
      type: DELETE_EXERCISE,
      payload: id,
    })
  } catch (e) {
    console.log(e.message);
  }
};
