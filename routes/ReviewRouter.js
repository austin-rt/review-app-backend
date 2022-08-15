const Router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/ReviewController')

Router.get('/', controller.GetAllReviews)
Router.post(
  '/:movie_id/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateReview
)
Router.put(
  '/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateReview
)
Router.delete(
  '/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteReview
)

module.exports = Router
