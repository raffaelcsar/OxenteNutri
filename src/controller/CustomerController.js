const { Customer } = require("../app/models/Customer");
const validateCPF = require("../utils/cpf");
const validateEmail = require("../utils/email");
const chalk = require('chalk')

const log = console.log.bind(console)

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

  if (!validateCPF(govId)) {
    log(chalk.bgRed("ERRO: CPF invalid => USER: ", name, " CPF: ", govId))
    return res.status(422).send("Formato de CPF invalido")
  }

  if(!validateEmail(email))
    return res.status(422).send("Formato de Email invalido")

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