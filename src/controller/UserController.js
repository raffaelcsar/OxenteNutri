const { User } = require("../app/models/User");
const validateEmail = require("../utils/email");
const chalk = require('chalk');
const validateName = require("../utils/name");

const log = console.log.bind(console)

/**
 * Controller para um User
 * Gerencia requisições/operações com um User
 * 
 * @namespace User
 */

/**
 * Retorna todos os User do banco
 * 
 * @param {Request} req objeto Request da requisição
 * @param {Response} res objeto Response da requisição
 * @return Lista de Usuarios
 */
function get(req, res) {
  User.findAll({
    attributes: [
      'name',
      'email',
      'password_hash',
      'crn'
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
 * Cria um usuário
 * 
 * @method post
 * @param {Request} req objeto Request da requisição
 * @param {Response} res objeto Response da requisição
 * @returns User ID
 */
function post(req, res) {
  /**
   * Propriedades no body da requisição
   * 
   * @property {String} name nome do User
   * @property {String} email email do User
   * @property {String} password password do User
   * @property {String} crn CRN do User
   */
  let {
    name,
    email,
    password,
    crn
  } = req.body


  /**
   * Remove espaços à esquerda e à direita de name
   */
  name = name.trim()

  if (!validateName(name)) {
    log(chalk.bgRed("ERRO: Name invalid => USER: ", name))
    return res.status(422).send("Formato de Nome invalido")
  }

  
  if(!validateEmail(email)) {
    log(chalk.bgRed("ERRO: EMAIL invalid => USER: ", name, " EMAIL: ", email))
    return res.status(422).send("Formato de Email invalido")
  }
  
 
  
  User.create({
    name,
    email,
    password_hash: password,
    crn
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
 * Atualiza dados de um User
 * 
 * @method update
 * @param {Request} req objeto Request da requisição
 * @param {Response} res objeto Response da requisição
 * @returns {User}
 */
function update(req, res) {
  /**
   * Dados do body da requisição
   * 
   * @property {String} name nome do User
   * @property {String} email email do User
   * @property {String} password password do User
   * @property {String} crn crn
   */
  let {
    name,
    email,
    password,
    crn
  } = req.body
  
  /**
   * Id do User que sofrerá a mudança
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
 
   
   if(!validateEmail(email)) {
     log(chalk.bgRed("ERRO: EMAIL invalid => USER: ", name, " EMAIL: ", email))
     return res.status(422).send("Formato de Email invalido")
   }
   


   User.update({
     name,
     email,
     password_hash: password,
     crn
   },{
     where: {
       id
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

module.exports.UserController = {
  get,
  post,
  update
}