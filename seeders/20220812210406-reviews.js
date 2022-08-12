'use strict';
const { User, Movie, sequelize } = require('../models');
const { Op } = require('sequelize');
const falso = require('@ngneat/falso');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const reviews = await Promise.all(
      [...Array(100)].map(async () => {
        let user = await User.findOne({ order: sequelize.random(), raw: true });
        let movie = await Movie.findOne({
          order: sequelize.random(),
          raw: true
        });
        return {
          rating: Math.floor((Math.random() * 5) + 1),
          body: falso.randParagraph(),
          user_id: user.id,
          movie_id: movie.id,
          createdAt: new Date(),
          updatedAt: new Date()
        };
      })
    );
    return queryInterface.bulkInsert('reviews', reviews);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('reviews');
  }
};