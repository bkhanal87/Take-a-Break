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

// GET one category
// Use the custom middleware before allowing the user to access the gallery
router.get('/category/:id', withAuth, async (req, res) => {
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
// Use the custom middleware before allowing the user to access the food
router.get('/food/:id', withAuth, async (req, res) => {
  try {
    const dbFoodData = await Food.findByPk(req.params.id);

    const food = dbFoodData.get({ plain: true });

    res.render('food', { food });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one review
// Use the custom middleware before allowing the user to access the review
router.get('/review/:id', withAuth, async (req, res) => {
  try {
    const dbReviewData = await Review.findByPk(req.params.id);

    const review = dbReviewData.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('review', { review, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// // GET one user
// // Use the custom middleware before allowing the user to access the user
// router.get('/user/:id', withAuth, async (req, res) => {
//   try {
//     const dbUserData = await User.findByPk(req.params.id);

//     const user = dbUserData.get({ plain: true });

//     res.render('user', { user });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

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