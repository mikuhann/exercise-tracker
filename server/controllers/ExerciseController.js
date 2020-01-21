const Exercise = require('../models/ExerciseSchema');

module.exports = {
  getExercises: async (req, res) => {
    try {
      const exercises = await Exercise.find();

      if (exercises.length === 0) {
        return res.json({
          message: 'No exercises found',
        })
      }

      return res.json({
        payload: exercises,
      })
    } catch (e) {
      console.log(e.message);
    }
  },
  create: async (req, res) => {
    try {
      const { userName, description, duration, date } = req.body;

      const newExercise = new Exercise({
        userName,
        description,
        duration,
        date,
      });

      await newExercise.save();

      return res.json({
        message: 'Exercise added!',
        payload: newExercise,
      });
    } catch (e) {
      console.log(e.message);
    }
  }
}
