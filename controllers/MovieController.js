const { Movie } = require('../models')
const movie = require('../models/movie')

const GetMovieDetails = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.movie_id)
    res.send(movie)
  } catch (error) {
    throw error
  }
}

const GetAllMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll()
    res.send(movies)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetMovieDetails,
  GetAllMovies
}
