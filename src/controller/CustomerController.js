const { Customer } = require("../app/models/Customer");
const validateCPF = require("../utils/cpf");
const validateEmail = require("../utils/email");
const chalk = require('chalk');
const validateName = require("../utils/name");
const validateDate = require("../utils/date");

const log = console.log.bind(console)

/**
 * Controller para um Customer
 * Gerencia requisições/operações com um Customer
 * 
 * @namespace Customer
 */

/**
 * Retorna todos os Customers do banco
 * 
 * @param {Request} req objeto Request da requisição
 * @param {Response} res objeto Response da requisição
 * @return Lista de Customers
 */
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

/**
 * Cria um Customer
 * 
 * @method post
 * @param {Request} req objeto Request da requisição
 * @param {Response} res objeto Response da requisição
 * @returns Customer ID
 */
function post(req, res) {
  /**
   * Propriedades no body da requisição
   * 
   * @property {String} name nome do Customer
   * @property {String} email email do Customer
   * @property {String} govId cpf do Customer
   * @property {String} birthdate data de nascimento do Customer (yyyy-mm-dd)
   */
  let {
    name,
    email,
    govId,
    birthdate
  } = req.body


  /**
   * Remove espaços à esquerda e à direita de name
   */
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
  
  if(!validateDate(birthdate)) {
    log(chalk.bgRed("ERRO: Date invalid => USER: ", name, " Date: ", birthdate))
    return res.status(422).send("Formato de Data invalido")
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

/**
 * Atualiza dados de um Customer
 * 
 * @method update
 * @param {Request} req objeto Request da requisição
 * @param {Response} res objeto Response da requisição
 * @returns {Customer}
 */
function update(req, res) {
  /**
   * Dados do body da requisição
   * 
   * @property {String} name nome do Customer
   * @property {String} email email do Customer
   * @property {String} govId cpf do Customer
   * @property {String} birthdate (yyyy-mm-dd)
   */
  let {
    name,
    email,
    govId,
    birthdate
  } = req.body
  
  /**
   * Id do Customer que sofrerá a mudança
   * 
   * @param {String} id
   */
  const { id } = req.params

  /**
   * Remove espaços à esquerda e à direita de name
   */
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
   
   if(!validateDate(birthdate)) {
     log(chalk.bgRed("ERRO: Date invalid => USER: ", name, " Date: ", birthdate))
     return res.status(422).send("Formato de Data invalido")
   }

   Customer.update({
     name: name,
     email: email,
     govId: govId,
     birthdate: birthdate
   },{
     where: {
       id: id
     }
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
  post,
  update
}