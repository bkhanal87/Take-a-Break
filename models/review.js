const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        review_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter the name of your review'
                },
                isAlphanumeric: true

            }
        },

        review_description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter the name of your review'
                },
                isAlphanumeric: true,
                max: 100,
            }
        },
        
        category_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'category',
              key: 'id',
            },
        },

        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            },
        },

        food_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'food',
              key: 'id',
            },
        },
    },

    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'review',
      }
)

module.exports = Review;