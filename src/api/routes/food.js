const { getFoods } = require('../controllers/food');

const foodRouter = require('express').Router();

foodRouter.get('/', getFoods);

module.exports = foodRouter;
