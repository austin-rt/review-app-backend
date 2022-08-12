'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user_reviews',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      Review.belongsTo(models.Movie, {
        foreignKey: 'movie_id',
        as: 'movie_reviews',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  Review.init(
    {
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      movieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'movie_id',
        onDelete: 'CASCADE',
        references: {
          model: 'movies',
          key: 'id'
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Review',
      tableName: 'reviews'
    }
  );
  return Review;
};
