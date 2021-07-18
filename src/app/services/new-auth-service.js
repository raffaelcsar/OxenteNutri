const axios = require('axios')
const chalk = require('chalk')

/**
 * Serviço de autenticação
 * /


/**
  * Propriedades de user
  * 
  * @param user
  * @prop {string} name
  * @prop {string} email
  * @prop {string} pass
  * @prop {string} crn
*/


/**
 * Gera um JWT para um usuário
 * 
 * @param {Object} user
 */
module.exports.createUser = async function authCreateUser(user) {
  const resp = await axios.post('http://localhost:4000/auth/create/user/', {...user})
    .catch((err) => {
      console.log(chalk.bgRed.white("Erro ao tentar criar usuário => ", err))
      return err
    })
  
  return resp
}

module.exports.loginUser = async function authLoginUser(user) {
  const resp = await axios.post('http://localhost:4000/auth/login/', {...user})
    .catch((err) => {
      console.log(chalk.bgRed.white("Erro ao tentar loggar usuário => ", err))
      return err
    })
  
  return resp
}
