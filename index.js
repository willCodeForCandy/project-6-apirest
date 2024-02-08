require('dotenv').config();
const express = require('express');

const app = express();

app.listen(3000, () => {
  console.log('Listening on port http://localhost:3000');
});
