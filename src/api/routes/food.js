const {
  getFoods,
  getFoodById,
  postFood,
  updateFood
} = require('../controllers/food');

const foodRouter = require('express').Router();

foodRouter.get('/:id', getFoodById);
foodRouter.get('/', getFoods);
foodRouter.post('/', postFood);
foodRouter.put('/:id', updateFood);
module.exports = foodRouter;
