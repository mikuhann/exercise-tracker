import { useEffect, useState } from 'react';

const useSetCurrentUser = () => {
  const [exercise, setExercise] = useState({
    userName: '',
    description: '',
    duration: 0,
    date: new Date(),
    users: [],
  });

  useEffect(() => {
    setExercise({...exercise, userName: 'BlaBla', users: ['BlaBla', 'Kek Kek']})
  }, []);

  return { exercise, setExercise };
};

export default useSetCurrentUser;
