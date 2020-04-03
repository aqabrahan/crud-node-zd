const mongoose = require('mongoose');
const moviesSchema = require('./model');

moviesSchema.statics = {
  create: function(data, cb) {
    const movie = new this(data);
    movie.save(cb);
  },

  get: function(query, cb) {
    this.find(query, cb);
  },

  getByName: function(query, cb) {
    this.find(query, cb);
  },

  update: function(query, updateData, cb) {
    this.findById(query, {$set: updateData}, {new: true}, cb);
  },

  delete: function(query, cb) {
    this.findOneAndDelete(query, cb);
  }
}

const moviesModel = mongoose.model('Movies', moviesSchema);
module.exports = moviesModel;


