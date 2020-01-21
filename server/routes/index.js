const UserRoutes = require('./UserRoutes');
const ExersiceRoutes = require('./ExerciseRoutes');

module.exports = (app) => {
  app.use('/users', UserRoutes);
  app.use('/exercises', ExersiceRoutes);
};
