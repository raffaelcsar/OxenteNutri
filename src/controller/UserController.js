const { User } = require("../app/models/User")
const sequelize = require("../app/models/index")
const validateCPF = require("../utils/cpf");
const validateEmail = require("../utils/email");
const chalk = require('chalk');
const validateName = require("../utils/name");
const validateDate = require("../utils/date");
const { createUser } = require("../app/services/new-auth-service");

async function post(req, res) {


        /**
   * Propriedades no body da requisição
   * 
   * @property {String} name nome do USUARIO
   * @property {String} email email do USUARIO
   * @property {String} password password do USUARIO
   * @property {String} crn crn do USUARIO
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
    name: name,
    email: email,
    password_hash: password,
    crn: crn
  }).then(resp => {
    createUser({
      name,
      email,
      password,
      crn
    }).then(() => {
      res.status(200).json(resp).send()
    })
  })
  .catch(err => {
    console.log(err)
    res.status(400).json({erro:err})
  })
        

    
}

module.exports.UserController = {
    post
}