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
  });
}

exports.getMovies = (req, res, next) => {
  Movies.get({}, (err, movies) => {
    if (err) {
      res.json({
        error: err
      });
    }
    res.json({
      movies
    });
  })
}

exports.getMovie = (req, res, next) => {
  const name = req.params.name;
  Movies.getByName({name}, (err, movie) => {
    if (err) {
      res.json({
        message: 'Error in get'
      })
    }
    res.json({
      movie
    });
  })
}

exports.updateMovie = (req, res, next) => {
  const movie = {
    name: req.body.name,
    description: req.body.description,
  }
  const id = req.params.id;
  Movies.update({_id: id}, movie, (err, movie) => {
    if (err) {
      res.json({
        message: 'error update'
      });
    }
  })
}

exports.deleteMovie = (req, res, next) => {
  const id = req.params.id;

  Movies.delete({_id: id}, (err, movie) => {
    if (err) {
      res.json({
        message: 'error on delete'
      })
    }

    res.json({
      movie
    });
  });
}