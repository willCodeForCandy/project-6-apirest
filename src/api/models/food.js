const mongoose = require('mongoose');

const foosSchema = new mongoose.Schema(
  {
    img: { type: String },
    name: { type: String, required: true },
    energy: { type: Number, required: true },
    carbs: { type: Number, required: true },
    protein: { type: Number, required: true },
    fat: { type: Number, required: true },
    sodium: { type: Number },
    type: { type: String }
  },
  {
    timestamps: true,
    collection: 'foods'
  }
);

const Food = mongoose.model('food', foosSchema, 'foods');

module.exports = Food;
