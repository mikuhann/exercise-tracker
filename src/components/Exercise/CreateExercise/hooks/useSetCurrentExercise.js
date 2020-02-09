import { useEffect, useState } from 'react';

import * as UserService from '../../../../service/UserService';

const useSetCurrentExercise = () => {
  const [exercise, setExercise] = useState({
    userName: '',
    description: '',
    duration: 0,
    date: new Date(),
    users: [],
  });

  useEffect(() => {
    (async () => {
      const users = await UserService.getUsers();

      setExercise({...exercise, userName: users[0].userName, users: users.map((user) => user.userName)});
    })();
  }, []);

  return { exercise, setExercise };
};

export default useSetCurrentExercise;
