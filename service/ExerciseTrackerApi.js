import axios from 'axios';

const ExerciseTrackerApi = axios.create({
  baseURL: process.env.REACT_APP_APU_URL,
});

export const configHeaders = (config) => {
  config.headers['Content-Type'] = 'application/json';
};

ExerciseTrackerApi.interceptors.request.use(configHeaders, (error) => {
  Promise.reject(error);
});

export default ExerciseTrackerApi;
