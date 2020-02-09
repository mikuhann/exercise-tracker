import React from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';

import useSetCurrentExercise from './hooks/useSetCurrentExercise';
import Input from '../../Input';
import { createExercise } from '../../../actions/exercise';
import { routing } from '../../../constants/routing';

import 'react-datepicker/dist/react-datepicker.css';

const CreateExercise = ({ history }) => {
  const { exercise, setExercise } = useSetCurrentExercise();
  const dispatch = useDispatch();

  const onChangeHandler = (e) => setExercise({ ...exercise, [e.target.name]: e.target.value });
  const onChangeDate = (date) => setExercise({...exercise, date: date});
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(createExercise(exercise));
    history.push(routing.HOME)
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
        <Input
          label='Description'
          type='text'
          name='description'
          value={exercise.description}
          onChangeHandler={onChangeHandler}
        />
          <Input
            value={exercise.duration}
            name='duration'
            label='Duration (in minutes)'
            onChangeHandler={onChangeHandler}
            type='number'
          />
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
