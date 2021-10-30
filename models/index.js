const User = require('./User');
const Category = require('./Category');
const Food = require('./Food');
const Review = require('./Review');

// Creating relations, Categories can have multiple foods, but foods have one category
Category.hasMany(Food, {
    foreignKey: 'category_id'
});

Food.belongsTo(Category, {
    foreignKey: 'category_id'
});

// Creating relations, Users can have multiple reviews, but reviews can have one user
User.hasMany(Review, {
    foreignKey: 'user_id'
});

Review.belongsTo(User, {
    foreignKey: 'user_id'
});

// Creating Relations, Food can have multiple reivews, but reviews can have only one food
Food.hasMany(Review, {
    foreignKey: 'food_id'
});

Review.belongsTo(Food, {
    foreignKey: 'food_id'
});

module.exports = { User, Category, Food, Review };
