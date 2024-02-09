const Food = require('../models/food');
//GET
const getFoods = async (req, res, next) => {
  try {
    const allFoods = await Food.find();
    if (allFoods.length) {
      return res.status(200).json(allFoods);
    } else {
      return res.status(200).json('The food database is empty 🍴');
      //pongo status 200 porque el request no da error pero la db está vacía
      //? debería usar otro? debería no poner nada?
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getFoodById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const foodById = await Food.findById(id);
    if (foodById) {
      return res.status(200).json(foodById);
    } else {
      return res.status(404).json('Food not found 🦖');
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};
//POST
const postFood = async (req, res, next) => {
  try {
    const newFood = new Food(req.body);
    const savedFood = await newFood.save();
    return res.status(201).json(savedFood);
  } catch (error) {
    return res.status(500).json(error);
  }
};
//PUT
const updateFood = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newFood = new Food(req.body);
    newFood._id = id;
    const updatedFood = await Food.findByIdAndUpdate(id, newFood, {
      new: true
    });
    return res.status(200).json(updatedFood);
  } catch (error) {
    return res.status(500).json(error);
  }
};
//DELETE
const deleteFood = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedFood = await Food.findByIdAndDelete(id);
    return res.status(200).json(deletedFood);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getFoods, getFoodById, postFood, updateFood, deleteFood };
