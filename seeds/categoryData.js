const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Appetizers',

  },
  {
    category_name: 'Entree',
  },
  {
    category_name: 'Desserts',
  },
];

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;
