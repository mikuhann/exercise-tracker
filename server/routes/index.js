const UserRoutes = require('./UserRoutes');

module.exports = (app) => {
  app.use('/users', UserRoutes);
};
