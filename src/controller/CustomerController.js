const { Customer } = require("../app/models/Customer");
const validateCPF = require("../utils/cpf");
const validateEmail = require("../utils/email");
const chalk = require('chalk');
const validateName = require("../utils/name");

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
  let {
    name,
    email,
    govId,
    birthdate
  } = req.body

  name = name.trim()

  if (!validateName(name)) {
    log(chalk.bgRed("ERRO: Name invalid => USER: ", name))
    return res.status(422).send("Formato de Nome invalido")
  }

  if (!validateCPF(govId)) {
    log(chalk.bgRed("ERRO: CPF invalid => USER: ", name, " CPF: ", govId))
    return res.status(422).send("Formato de CPF invalido")
  }
  
  if(!validateEmail(email)) {
    log(chalk.bgRed("ERRO: EMAIL invalid => USER: ", name, " EMAIL: ", email))
    return res.status(422).send("Formato de Email invalido")
  }
  
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
    log(chalk.bgRed("ERRO: ", err))
    res.status(500).send("erro interno, tente novamente em alguns instantes")
  })
}

module.exports.CustomerController = {
  get,
  post
}