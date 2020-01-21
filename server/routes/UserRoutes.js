const UserRouter = require('express').Router();
const UserController = require('../controllers/UserController');

UserRouter.route('/').get(UserController.getUsers);
UserRouter.route('/add').post(UserController.create);
