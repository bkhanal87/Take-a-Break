const router = require('express').Router();
const { Category, Food, Review, User  } = require('../models');

// GET all categories for homepage
router.get('/', async (req, res) => {
  try {
    const dbCategoryData = await Category.findAll({
      include: [
        {
          model: Food,
          attributes: ['food_name', 'food_description'],
        },
      ],
    });

    const categories = dbCategoryData.map((category) =>
      category.get({ plain: true })
    );

    res.render('homepage', {
      categories,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one category
router.get('/category/:id', async (req, res) => {
  try {
    const dbCategoryData = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Food,
          attributes: [
            'id',
            'food_name',
            'food_description',
            'food_price',
            'food_img',
          ],
        },
      ],
    });

    const category = dbCategoryData.get({ plain: true });
    res.render('category', { category });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one food
router.get('/food/:id', async (req, res) => {
  try {
    const dbFoodData = await Food.findByPk(req.params.id);

    const food = dbFoodData.get({ plain: true });

    res.render('food', { food });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;