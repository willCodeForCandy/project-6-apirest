const {
  getFoods,
  getFoodById,
  postFood,
  updateFood,
  deleteFood
} = require('../controllers/food');

const foodRouter = require('express').Router();

foodRouter.get('/:id', getFoodById);
foodRouter.get('/', getFoods);
foodRouter.post('/', postFood);
foodRouter.put('/:id', updateFood);
foodRouter.delete('/:id', deleteFood);
module.exports = foodRouter;
