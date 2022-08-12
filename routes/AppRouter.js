const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const MovieRouter = require('./MovieRouter')
const ReviewRouter = require('./ReviewRouter')
Router.use('/users', UserRouter)
Router.use('/movies', MovieRouter)
Router.use('/reviews', ReviewRouter)
module.exports = Router
