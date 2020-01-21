const ExerciseRouter = require('express').Router();
const ExerciseController = require('../controllers/ExerciseController');

ExerciseRouter.route('/').get(ExerciseController.getExercises);
ExerciseRouter.route('/add').post(ExerciseController.create);

module.exports = ExerciseRouter;
