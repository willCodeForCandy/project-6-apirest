const { getFoods, getFoodById, postFood } = require('../controllers/food');

const foodRouter = require('express').Router();

foodRouter.get('/:id', getFoodById);
foodRouter.get('/', getFoods);
foodRouter.post('/', postFood);

module.exports = foodRouter;
