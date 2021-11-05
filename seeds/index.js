const sequelize = require('../config/connection');
const seedCategory = require('./categoryData');
const seedFood = require('./foodData');
const seedReview = require('./reviewData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCategory();

  await seedFood();

  await seedReview();

  process.exit(0);
};

seedAll();
