const Movies = require('./controller');

module.exports = (router) => {
  router.post('/movies', Movies.createMovie);
  router.get('/movies', Movies.getMovies);
  router.get('/movies/:name', Movies.getMovie);
  router.put('/movies/:id', Movies.updateMovie);
  router.delete('/movies/:id', Movies.deleteMovie);
}