const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Food extends Model {}

Food.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        food_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        food_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        food_price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },

        food_img: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        
        category_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'category',
              key: 'id',
            },
        },
    },

    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'category',
      }
)

module.exports = Food;