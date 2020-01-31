import {useState, useEffect} from 'react';

import * as ExerciseService from '../../../../service/ExerciseService';

export const useSetExercises = () => {
  const [exercises, setExercises] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const exercises = await ExerciseService.getExercises();

      setLoading(false);
      setExercises(exercises);
    })();
  }, []);

  return { exercises, loading, setExercises }
};
