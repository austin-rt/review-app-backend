const { Movie, Review } = require('../models');
const movie = require('../models/movie');

const GetMovieDetails = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.movie_id, {
      include: [{ model: Review, as: 'movie_reviews' }]
    });
    res.send(movie);
  } catch (error) {
    throw error;
  }
};

const GetAllMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll({
      include: [{ model: Review, as: 'movie_reviews' }]
    });
    res.send(movies);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetMovieDetails,
  GetAllMovies
};
