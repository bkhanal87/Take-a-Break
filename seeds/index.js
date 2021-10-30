const sequelize = require('../config/connection');
const seedCategory = require('./categoryData');
const seedFood = require('./foodData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCategory();

  await seedFood();

  process.exit(0);
};

seedAll();
