const { Customer } = require("../app/models/Customer");

function get(req, res) {
  Customer.findAll({
    attributes: [
      'name',
      'email',
      'govId',
      'birthdate'
    ]
  })
    .then(resp => {
      res.status(200).json(resp).send()
    })
    .catch(err => {
      console.log(err)
      res.status(400).send()
    })
}

function post(req, res) {
  const {
    name,
    email,
    govId,
    birthdate
  } = req.body

  Customer.create({
    name: name,
    email: email,
    govId: govId,
    birthdate: birthdate
  })
    .then(resp => {
      res.status(200).json(resp).send()
    })
    .catch(err => {
      res.status(400).json(err).send()
    })
}

module.exports.CustomerController = {
  get,
  post
}