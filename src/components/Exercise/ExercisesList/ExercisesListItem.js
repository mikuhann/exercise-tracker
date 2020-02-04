import React from 'react';

const ExercisesListItem = ({ exercise, deleteExercise }) => {
  const { _id, userName, description, duration, date } = exercise;

  return (
    <tr>
      <td>{userName}</td>
      <td>{description}</td>
      <td>{duration}</td>
      <td>{date}</td>
      <td>
        <button
          className='btn btn-danger'
          onClick={() => deleteExercise(_id)}>
        Delete
        </button>
      </td>
    </tr>
  );
};

export default ExercisesListItem;
