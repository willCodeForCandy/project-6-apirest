require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db');
const foodRouter = require('./src/api/routes/food');

const app = express();
connectDB();
app.use(express.json());
app.use('/food', foodRouter);
//Error handling
app.use('*', (req, res, next) => {
  const error = new Error('Route not found');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  return res.status(err.status || 500).json(err.message || 'Unexpected error');
});
app.listen(3000, () => {
  console.log('Listening on port http://localhost:3000 👂');
});
