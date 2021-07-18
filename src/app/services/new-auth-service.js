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
 * @returns
 */
module.exports.createUser = async function authCreateUser(user) {
  return await axios.post('http://localhost:4000/auth/create/user/', {...user})
    .catch((err) => {
      console.log(chalk.bgRed.white("Erro ao tentar criar usuário => ", err))
      return err
    })
    .then(resp => {
      console.log(chalk.bgGreen.white("authservice success, token => ", resp.data.token))
      resp.data.token
    })
  
}

module.exports.loginUser = async function authLoginUser(user) {
  return await axios.post('http://localhost:4000/auth/login/', {...user})
    .catch((err) => {
      console.log(chalk.bgRed.white("Erro ao tentar loggar usuário => ", err))
      return err
    })
    .then(resp => {
      console.log(chalk.bgGreen.white("authservice success"))
      return resp.data.token
    })
}
