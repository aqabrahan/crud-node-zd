const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactsSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String
    },
    gender: String,
    address: String,
    create_date: {
      type: Date,
      default: Date.now
    }
  }
)

module.exports = contactsSchema;
/* const Contact = module.exports = mongoose.model('contact', contactsSchema);

module.exports.get = function(callback, limit) {
  Contact.find(callback).limit(limit);
} */
