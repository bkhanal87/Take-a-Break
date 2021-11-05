const router = require('express').Router();
const { Category, Food, Review  } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all categories for homepage
router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
    });
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

// Drinks Route
router.get('/drinks', async (req, res) => {
  try {
    const drinkData = await Food.findAll({
      where: {
        category_id: 4
      },
    });

    const foods = drinkData.map((food) =>
      food.get({ plain: true })
    );

    res.render('drinks', {
      foods,
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