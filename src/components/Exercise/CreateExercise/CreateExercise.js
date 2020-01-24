import React from 'react';
import DatePicker from 'react-datepicker';

import useSetCurrentUser from './hooks/useSetCurrentUser';

import 'react-datepicker/dist/react-datepicker.css';

const CreateExercise = () => {
  const { exercise, setExercise } = useSetCurrentUser();

  const onChangeHandler = (e) => setExercise({ ...exercise, [e.target.name]: e.target.value });
  const onChangeDate = (date) => setExercise({...exercise, date: date});
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(exercise);
  };

  return (
    <div>
      <h3>Create New exercise</h3>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label>User Name:</label>
          <select
            className='form-control'
            name='userName'
            value={exercise.userName}
            onChange={onChangeHandler}>
            {
              exercise.users.map((user, index) => <option key={index} value={user}>{user}</option>)
            }
          </select>
        </div>
        <div className='form-group'>
          <label>Description:</label>
          <input
            type="text"
            className='form-control'
            name='description'
            value={exercise.description}
            onChange={onChangeHandler} />
        </div>
        <div className='form-group'>
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className='form-control'
            name='duration'
            value={exercise.duration}
            onChange={onChangeHandler} />
        </div>
        <div className='form-group'>
          <label>Date:</label>
          <div>
            <DatePicker
              name='date'
              selected={exercise.date}
              onChange={onChangeDate} />
          </div>
        </div>
        <div className='form-group'>
          <input type="submit" value='Create Exercise' className='btn btn-primary'/>
        </div>
      </form>
    </div>
  );
};

export default CreateExercise;
