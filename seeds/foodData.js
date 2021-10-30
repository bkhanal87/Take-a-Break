const { Food } = require('../models');

const foodData = [
  {
    food_name: 'Cheese Pizza',
    food_description: '4 slice of an 8-inch oven baked cheeze pizza',
    food_price: 5.99,
    food_img: 'foodiesfeed.com_pizza-close-up.jpg',
    category_id: 1
  },

  {
    food_name: 'Grissini and Cheese',
    food_description: 'Cheese served with Grissini, a pizza crust-like dough covered in olive oil',
    food_price: 7.99,
    food_img: 'foodiesfeed.com_grissini-and-cheese.jpg',
    category_id: 1
  },
  {
    food_name: 'Korean Noodles',
    food_description: 'A Korean-inspired dish served with cold noodles, vegetables and topped with a fried egg',
    food_price: 14.99,
    food_img: 'foodiesfeed.com_noodles-with-egg-and-vegetables.jpg',
    category_id: 2
  },
  {
    food_name: 'Ham Sub',
    food_description: 'A 12-inch ham sub servered with a wide array of vegetables, including onions, lettuce, and tomatoes',
    food_price: 12.99,
    food_img: 'foodiesfeed.com_sub-sandwiches-with-a-ham.jpg',
    category_id: 2
  },
  {
    food_name: 'Pulled-pork Tacos',
    food_description: 'Fresh soft tacos topped with pulled-pork and an added array of vegetables for a sweet yet tangy flavor',
    food_price: 13.99,
    food_img: 'foodiesfeed.com_tacos-with-pulled-pork-fresh-vegetables-and-cream.jpg',
    category_id: 2
  },
  {
    food_name: 'Egg and Avocado Toast',
    food_description: '2 pieces of toast topped with our homemade guacamole and fried eggs',
    food_price: 10.99,
    food_img: 'foodiesfeed.com_fried-egg-with-guacamole-sandwiches.jpg',
    category_id: 2
  },
  {
    food_name: 'Strawberry Cake',
    food_description: 'A sweet and savorly piece of strawberry cake topped with whipped cream',
    food_price: 6.99,
    food_img: 'foodiesfeed.com_detail-of-pavlova-strawberry-piece-of-cake.jpg',
    category_id: 3
  },
  {
    food_name: 'Raspberry Donut',
    food_description: 'Our homemade donut servered with a raspberry filling and topped with a fresh raspberry and whipped cream',
    food_price: 7.99,
    food_img: 'foodiesfeed.com_small-donut-with-raspberry-on-top.jpg',
    category_id: 3
  },
  {
    food_name: 'Poppyseed Cake',
    food_description: 'Homemade sourdough bread topped with powdered sugar and a poppy seed baked inside',
    food_price: 6.99,
    food_img: 'foodiesfeed.com_sourdough-cake-bun-with-poppy-seed-inside.jpg',
    category_id: 3
  },
];

const seedFood = () => Food.bulkCreate(foodData);

module.exports = seedFood;
