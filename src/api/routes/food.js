const { getFoods, getFoodById } = require('../controllers/food');

const foodRouter = require('express').Router();

foodRouter.get('/:id', getFoodById);
foodRouter.get('/', getFoods);

module.exports = foodRouter;
