const Contact = require('./dao');

exports.index = (req, res) => {
  Contact.get((err, contacts) => {
    if (err) {
      res.status(500).json({
        message: 'error'
      })
    }
    res.json({
      contacts
    })
  })
}

exports.createContact = (req, res) => {
  const { name, email } = req.body;
  const rb = {
    name,
    email
  }
  Contact.create(rb, (err, contact) => {
    if (err) {
      res.status(500).json({
        message: 'error'
      })
    }
    res.json({
      contact
    })
  })
}