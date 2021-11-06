const router = require('express').Router();

const userRoutes = require('./user-routes');
const foodRoutes = require('./food-routes');
const reviewRoutes = require('./review-routes');

router.use('/user', userRoutes);
router.use('/food', foodRoutes);
router.use('/review', reviewRoutes);

module.exports = router;
