import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ExercisesListItem from './ExercisesListItem';
import { useSetExercises } from './hooks/useSetExercises';
import { selectExercises, selectLoading } from '../../../constants/selectors/exercise';
import { deleteExerciseById } from '../../../actions/exercise';


const ExercisesList = () => {
  const exercises = useSelector(selectExercises);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useSetExercises();

  if (loading || exercises.length === 0) {
    return <div className='text-center'>Loading...</div>
  }

  const removeExerciseById = (id) => {
    dispatch(deleteExerciseById(id));
  };

  return (
    <div>
      <h3>Exercises list</h3>
      <table className='table'>
        <thead className='thead-light'>
        <tr>
          <th>User name</th>
          <th>Description</th>
          <th>Duration (in minutes)</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {exercises.map((exercise, index) =>
          <ExercisesListItem
            key={index}
            exercise={exercise}
            deleteExercise={removeExerciseById}
          />)
        }
        </tbody>
      </table>
    </div>
  );
};

export default ExercisesList;
