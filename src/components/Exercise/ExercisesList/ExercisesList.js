import React from 'react';

import ExercisesListItem from './ExercisesListItem';
import { useSetExercises } from './hooks/useSetExercises';
import * as ExerciseServise from '../../../service/ExerciseService';


const ExercisesList = () => {
  const { exercises, loading, setExercises } =  useSetExercises();

  if (loading || exercises === null) {
    return <div className='text-center'>Loading...</div>
  }

  const onDeleteExercise = async (id) => {
    await ExerciseServise.deleteExercise(id);

    setExercises(exercises.map((exercise) => exercise._id !== id && exercise))
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
            deleteExercise={onDeleteExercise}
          />)
        }
        </tbody>
      </table>
    </div>
  );
};

export default ExercisesList;
