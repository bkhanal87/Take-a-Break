const { Review } = require('../models');

const reviewData = [
  {
    review_name: 'Strawberry Goodness',

    review_description: 'Best Food EVER!',

    category_id: 1,

    food_id: 7,
  },

];

const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;
