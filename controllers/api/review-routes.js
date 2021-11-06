const router = require('express').Router();
const { Review } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const dbReviewData = await Review.create({
        review_name: req.body.review_name,
        review_description: req.body.review_description,
        food_id: req.body.food_id,
      });

      res.status(200).json(dbReviewData)

    } 
        catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
  })

  module.exports = router;
