const Food = require('../models/food');

const getFoods = async (req, res, next) => {
  try {
    const allFoods = await Food.find();
    return res.status(200).json(allFoods);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getFoodById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const foodById = await Food.findById(id);
    return res.status(200).json(foodById);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getFoods, getFoodById };
