const router = require('express').Router();
const { Food } = require('../../models');


router.get('/', async (req, res) => {
  try {
    const foodData = await Food.findAll({
    });

    const foods = foodData.map((food) =>
      food.get({ plain: true })
    );

    res.status(200).json(foodData);
  } 
    catch (err) {
    
    res.status(500).json(err);
  }
})

module.exports = router;
