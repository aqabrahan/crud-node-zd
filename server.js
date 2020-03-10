const express = require('express');
const log = require('morgan')('dev');
const bodyParser = require('body-parser');

const config = require('./config/properties');
const db = require('./config/database');

//routes
const movieRoutes = require('./api/movies/route');

const app = express();

//configure bodyparser
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({extended:true});

//initialize express router
const router = express.Router();

// call the database connectivity function
db();

app.use(log);
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");

  next();
});

//use express router
app.use('/api', router);

//call movie router
movieRoutes(router);

app.listen(config.PORT, (req, res) => {
  console.log(`Server is running on port : ${config.PORT}`);
})