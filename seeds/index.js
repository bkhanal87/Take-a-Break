const { Category } = require('../models');

const categorydata = [
  {
    name: 'Appetizers',

  },
  {
    name: 'Entree',
  },
  {
    name: 'Appetizers',
  },
];

const seedCategory = () => Category.bulkCreate(categorydata);

module.exports = seedCategory;
