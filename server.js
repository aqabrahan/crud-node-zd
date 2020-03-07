const express = require('express');
const config = require('./config/properties');
const db = require('./config/database');

const app = express();

db();

app.listen(config.PORT, (req, res) => {
  console.log(`Server is running on port : ${config.PORT}`);
})