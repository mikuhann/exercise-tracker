import React, { useState } from 'react';

import Input from '../Input';

const CreateUser = () => {
  const [user, setUser] = useState({
    userName: '',
  });

  const onChangeHandler = (e) => setUser({...user, [e.target.name]: e.target.value });

  const onSubmitHandler = (e) => {
    e.preventDefault();

  };

  return (
    <div>
      <h3>Create new User</h3>
      <form onSubmit={onSubmitHandler}>
        <Input
          name='userName'
          label='Username'
          value={user.userName}
          onChangeHandler={onChangeHandler}/>
      </form>
    </div>
  );
};

export default CreateUser;
