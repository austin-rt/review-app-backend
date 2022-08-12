const Router = require('express').Router()
const controller = require('../controllers/MovieController')

Router.get('/:movie_id', controller.GetMovieDetails)
Router.get('/', controller.GetAllMovies)
module.exports = Router
