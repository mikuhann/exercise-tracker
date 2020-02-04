import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getExercises } from '../../../../actions/exercise';

export const useSetExercises = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExercises())
  }, []);
};
