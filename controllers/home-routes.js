const router = require('express').Router();
const { Category, Food, Review  } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all categories for homepage
router.get('/', async (req, res) => {
  try {
    res.render('homepage', 
      { 
        loggedIn: req.session.loggedIn
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Appetizers Route
router.get('/appetizers', async (req, res) => {
  try {
    const appetizerData = await Food.findAll({
      where: {
        category_id: 1
      },
    });

    const foods = appetizerData.map((food) =>
      food.get({ plain: true })
    );

    res.render('appetizers', {
      foods,
    })
  }
  catch (err) {
    res.status(500).json(err);
  }
})

// Entree Route
router.get('/entrees', async (req, res) => {
  try {
    const entreeData = await Food.findAll({
      where: {
        category_id: 2
      },
    });

    const foods = entreeData.map((food) =>
      food.get({ plain: true })
    );

    res.render('entrees', {
      foods,
    })
  }
  catch (err) {
    res.status(500).json(err);
  }
})

// Desserts Route
router.get('/desserts', async (req, res) => {
  try {
    const dessertData = await Food.findAll({
      where: {
        category_id: 3
      },
    });

    const foods = dessertData.map((food) =>
      food.get({ plain: true })
    );

    res.render('desserts', {
      foods,
    })
  }
  catch (err) {
    res.status(500).json(err);
  }
})

// Appetizers-Reviews Route
router.get('/appetizers-reviews', async (req, res) => {
  try {
    const reviewData = await Review.findAll({
      include: [
        {
          model: Food,
          attributes: ['food_name', 'food_description'],
        },
      ],
      where: {
        category_id: 1
      },
    });

    const reviews = reviewData.map((food) =>
      food.get({ plain: true })
    );

    res.render('appetizers-reviews', {
      reviews,
    })
  }
  catch (err) {
    res.status(500).json(err);
  }
})

// Entrees-Reviews Route
router.get('/entrees-reviews', async (req, res) => {
  try {
    const reviewData = await Review.findAll({
      include: [
        {
          model: Food,
          attributes: ['food_name', 'food_description'],
        },
      ],
      where: {
        category_id: 2
      },
    });

    const reviews = reviewData.map((food) =>
      food.get({ plain: true })
    );

    res.render('entrees-reviews', {
      reviews,
    })
  }
  catch (err) {
    res.status(500).json(err);
  }
})

// Desserts Review Routes
router.get('/desserts-reviews', async (req, res) => {
  try {
    const reviewData = await Review.findAll({
      include: [
        {
          model: Food,
          attributes: ['food_name', 'food_description'],
        },
      ],
      where: {
        category_id: 3
      },
    });

    const reviews = reviewData.map((food) =>
      food.get({ plain: true })
    );

    res.render('desserts-reviews', {
      reviews,
    })
  }
  catch (err) {
    res.status(500).json(err);
  }
})


// Login route
router.get('/login', (req, res)=> {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});


module.exports = router;