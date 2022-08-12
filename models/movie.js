'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.hasMany(models.Review, {
        foreignKey: 'movie_id',
        as: 'movies',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  }
  Movie.init(
    {
      image: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Movie',
      tableName: 'movies'
    }
  )
  return Movie
}
