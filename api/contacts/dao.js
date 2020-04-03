const mongoose = require('mongoose');
const contactSchema = require('./model');

contactSchema.statics = {
  get: function(query, cb) {
    this.find(query, cb);
  },
  create: function(data, cb) {
    (new this(data)).save(cb);
  }
}

const contactModel = mongoose.model('Contacts', contactSchema);
module.exports = contactModel;


