import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';

import Input from '../../Input';
import UsersOptionList from './UsersOptionList';
import { createExercise } from '../../../actions/exercise';
import { routing } from '../../../constants/routing';

import 'react-datepicker/dist/react-datepicker.css';

const CreateExercise = ({ history }) => {
  const [exercise, setExercise] = useState({
    userName: '',
    description: '',
    duration: 0,
    date: new Date(),
  });
  const dispatch = useDispatch();

  const { description, duration, date, userName } = exercise;

  const onChangeHandler = (e) => {
    console.log(exercise)
    setExercise({ ...exercise, [e.target.name]: e.target.value })

  };
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
          <UsersOptionList userName={userName} onChangeHandler={onChangeHandler} />
        </div>
        <Input
          label='Description'
          type='text'
          name='description'
          value={description}
          onChangeHandler={onChangeHandler}
        />
          <Input
            value={duration}
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
              selected={date}
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
