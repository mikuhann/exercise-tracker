import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from '../../../actions/users';
import { selectUsers, selectUsersLoading } from '../../../constants/selectors/exercise';

const UsersOptionList = ({ onChangeHandler, userName }) => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const loading = useSelector(selectUsersLoading);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <select
      className='form-control'
      name='userName'
      onChange={ onChangeHandler }
      value={userName}
    >
      {users.map((user) => <option key={user._id}>{user.userName}</option>)}
    </select>
  );
};

export default UsersOptionList;
