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
  },
  getExerciseById: async (req, res) => {
    try {
      const exercise = await Exercise.findById(req.params.id);

      if (!exercise) {
        return res.json({
          message: `Exercise with that ${req.params.id} doesn't exist`
        })
      }

      return res.json({
        payload: exercise,
      })
    } catch (e) {
      console.log(e.message);
    }
  },
  delete: async (req, res) => {
    try {
      await Exercise.findByIdAndDelete(req.params.id);

      return res.json({
        message: `Exercise with ${req.params.id} has been deleted`,
      })
    } catch (e) {
      console.log(e.message);
    }
  },
  update: async (req, res) => {
    try {
      const { userName, description, duration, date } = req.body;

      let exercise = await Exercise.findByIdAndUpdate(req.params.id);

      if (!exercise) {
        return res.json({
          message: `Exercise with ${req.params.id} was not found`,
        })
      }

      exercise = {
        userName,
        description,
        duration,
        date
      };

      await exercise.save();

      return res.json({
        payload: exercise,
      })
    } catch (e) {
      console.log(e.message);
    }
  }

};
