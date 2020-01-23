const ExerciseRouter = require('express').Router();
const ExerciseController = require('../controllers/ExerciseController');

ExerciseRouter.route('/').get(ExerciseController.getExercises);
ExerciseRouter.route('/add').post(ExerciseController.create);
ExerciseRouter.route('/:id')
  .get(ExerciseController.getExerciseById)
  .put(ExerciseController.update)
  .delete(ExerciseController.delete);

module.exports = ExerciseRouter;
