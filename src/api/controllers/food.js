const Food = require('../models/food');

const getFoods = async (req, res, next) => {
  try {
    const allFoods = await Food.find();
    return res.status(200).json(allFoods);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getFoods };
