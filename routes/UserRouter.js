const Router = require('express').Router();
const controller = require('../controllers/UserController');

Router.get('/', controller.GetUsers);
Router.get('/:user_id', controller.GetUserById);
Router.post('/register', controller.RegisterUser);
Router.put('/:user_id', controller.UpdateUser);
Router.delete('/:user_id', controller.DeleteUser);

module.exports = Router;
