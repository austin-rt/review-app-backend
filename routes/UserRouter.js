const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.GetUsers)
Router.get('/:user_id', controller.GetUserById)
Router.post('/create', controller.CreateUser)


module.exports = Router
