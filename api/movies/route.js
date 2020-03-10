const Movies = require('./controller');

module.exports = (router) => {
  router.post('/create', Movies.createMovie);
}