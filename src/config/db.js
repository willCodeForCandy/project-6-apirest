const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('Connected to the food database 🍓🥝🍌🍗');
  } catch (error) {
    console.log('DB is down 🥲');
  }
};

module.exports = { connectDB };
