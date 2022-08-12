const Router = require('express').Router()
const controller = require('../controllers/ReviewController')


Router.get('/', controller.GetAllReviews)
Router.post('/:user_id/:movie_id', controller.CreateReview)
Router.put('/:review_id',controller.UpdateReview)
Router.delete('/:review_id',controller.DeleteReview)

module.exports = Router
