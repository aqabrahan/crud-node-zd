const Movies = require('./dao');

exports.createMovie = (req, res, next) => {
  const movie = {
    name: req.body.name,
    description: req.body.description
  }

  Movies.create(movie, (err, movie) => {
    if (err) {
      res.json({
        error: err
      })
    }
    res.json({
      message : "Movie created successfully"
    })
  })
}