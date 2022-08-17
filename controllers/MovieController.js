const { Movie, Review, User } = require('../models');

const GetMovieDetails = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.movie_id, {
      include: [
        {
          model: Review,
          as: 'movie_reviews',
          include: [{ model: User, as: 'user_reviews' }]
        }
      ]
    });
    res.send(movie);
  } catch (error) {
    throw error;
  }
};

const GetAllMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll({
      include: [
        {
          model: Review,
          as: 'movie_reviews',
          include: [{ model: User, as: 'user_reviews' }]
        }
      ]
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
