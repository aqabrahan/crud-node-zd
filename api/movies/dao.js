const mongoose = require('mongoose');
const moviesSchema = require('./model');

moviesSchema.static = {
  create: (data, cb) => {
    const movie = new this(data);
    movie.save(cb);
  },

  get: (query, cb) => {
    this.find(query, cb);
  },

  getByName: (query, cb) => {
    this.find(query, cb);
  },

  update: (query, updateData, cb) => {
    this.findAndUpdate(query, {$set: updateData}, {new: true}, cb);
  },

  delete: (query, cb) => {
    this.findOneAndDelete(query, cb);
  }
}

const movieModel = mongoose.model('Movies', moviesSchema);

module.exports = movieModel;


