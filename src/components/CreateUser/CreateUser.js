import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Input from '../Input';

import { createUser } from '../../actions/users';
import { routing } from '../../constants/routing';

const CreateUser = ({ history }) => {
  const [user, setUser] = useState({ userName: '', });
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setUser({...user, [e.target.name]: e.target.value });
    setError(false);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (user.userName === '') {
      setError(true);
    } else {
      dispatch(createUser(user));

      setUser({
        userName: ''
      });

      history.push(routing.HOME)
    }
  };

  return (
    <div>
      <h3>Create new User</h3>
      <form onSubmit={onSubmitHandler}>
        <Input
          name='userName'
          label='Username'
          value={user.userName}
          onChangeHandler={onChangeHandler}
          error={error}
        />
        <input type="submit" value='Create new User' className='btn btn-primary mt-3' />
      </form>
    </div>
  );
};

export default CreateUser;
