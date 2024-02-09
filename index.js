require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db');

const app = express();
connectDB();
app.use(express.json());

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
