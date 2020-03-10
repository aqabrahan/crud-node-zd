const mongoose = require('mongoose');
const chalk = require('chalk');
const dbConfig = require('./properties');

const connected = chalk.bold.green;
const error = chalk.bold.red;
const disconnected = chalk.bold.yellow;
const termination = chalk.bold.magenta;

const db = () => {
  mongoose.connect(dbConfig.DB);

  mongoose.connection.on('connected', () => {
    console.log(connected("Mongoose default connection is open to ==> ", dbConfig.DB));
  });

  mongoose.connection.on('error', (err) => {
    console.log(error(`Mongoose default connection failed: ${err}`));
  });


  mongoose.connection.on('disconnected', () => {
    console.log(disconnected('Mongoose was disconected'));
  });
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log(termination('Mongoose terminated'));
      process.exit(0);
    });
  })
}

module.exports = db;