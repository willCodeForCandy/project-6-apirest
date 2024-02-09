require('dotenv').config();
const mongoose = require('mongoose');
const Food = require('../api/models/food');
const healthyFoods = [
  {
    name: 'Apple',
    energy: 52,
    carbs: 13.8,
    protein: 0.3,
    fat: 0.2,
    sodium: 1,
    type: 'fruit'
  },
  {
    img: 'https://exoticfruitbox.com/wp-content/uploads/2015/10/aguacate.jpg',
    name: 'Avocado',
    energy: 160,
    carbs: 8.5,
    protein: 2,
    fat: 14.7,
    sodium: 7,
    type: 'fruit'
  },
  {
    name: 'Banana',
    energy: 89,
    carbs: 22.8,
    protein: 1.1,
    fat: 0.3,
    sodium: 1,
    type: 'fruit'
  },
  {
    name: 'Blueberry',
    energy: 57,
    carbs: 14.5,
    protein: 0.7,
    fat: 0.3,
    sodium: 1,
    type: 'fruit'
  },
  {
    name: 'Orange',
    energy: 47,
    carbs: 11.8,
    protein: 0.9,
    fat: 0.1,
    sodium: 0,
    type: 'fruit'
  },
  {
    img: 'https://allmanhall.co.uk/wp-content/uploads/2019/06/Strawberries-on-white-background.jpg',
    name: 'Strawberry',
    energy: 32,
    carbs: 7.7,
    protein: 0.7,
    fat: 0.3,
    sodium: 1,
    type: 'fruit'
  },
  {
    name: 'Egg',
    energy: 155,
    carbs: 1.1,
    protein: 13,
    fat: 11,
    sodium: 124,
    type: 'egg'
  },
  {
    name: 'Lean beef',
    energy: 250,
    carbs: 0,
    protein: 26.1,
    fat: 15,
    sodium: 72,
    type: 'meat'
  },
  {
    name: 'Chicken breast',
    energy: 165,
    carbs: 0,
    protein: 31,
    fat: 3.6,
    sodium: 74,
    type: 'meat'
  },
  {
    name: 'Lamb',
    energy: 294,
    carbs: 0,
    protein: 25.6,
    fat: 21.4,
    sodium: 69,
    type: 'meat'
  },
  {
    name: 'Almond',
    energy: 579,
    carbs: 21.7,
    protein: 21.2,
    fat: 49.9,
    sodium: 1,
    type: 'nut'
  },
  {
    name: 'Walnut',
    energy: 654,
    carbs: 13.7,
    protein: 15.2,
    fat: 65.2,
    sodium: 2,
    type: 'nut'
  },
  {
    img: 'https://d131k5wuh4trw5.cloudfront.net/uploads/9-1-1024x1024.png',
    name: 'Peanut',
    energy: 567,
    carbs: 16.1,
    protein: 25.8,
    fat: 49.2,
    sodium: 18,
    type: 'nut'
  },
  {
    name: 'Sunflower seed',
    energy: 584,
    carbs: 20,
    protein: 20.8,
    fat: 51.5,
    sodium: 9,
    type: 'seed'
  },
  {
    name: 'Broccoli',
    energy: 34,
    carbs: 6.6,
    protein: 2.8,
    fat: 0.4,
    sodium: 33,
    type: 'vegetable'
  }
];

const foodsDocuments = healthyFoods.map((food) => new Food(food));

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    const allFoods = await Food.find(); //busco datos previos
    if (allFoods.length) {
      //hay datos previos?
      await Food.collection.drop(); //si hay, los borro
    }
  })
  .catch((error) => console.log(`Error deleting data: ${error}`))
  .then(async () => {
    await Food.insertMany(foodsDocuments); //subo nuevos datos
  })
  .catch((error) => console.log(`Error creating data: ${error}`))
  .finally(() => mongoose.disconnect());
