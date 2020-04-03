const Contact = require('./controller');

module.exports = (router) => {
  router.get('/contacts', Contact.index)
  router.post('/contacts', Contact.createContact)
}