const { User } = require("../app/models/User")
const sequelize = require("../app/models/index")
const bcrypt = require("bcryptjs")
const authService = require('../app/services/auth-service');
const chalk = require("chalk");

async function authenticate(req, res){
    try{

        const {name, email, password, crn} = req.body;
        console.log(chalk.bgYellow.black(email))
        const user = await User.findOne({
            where: { email }
        })
        
        if(!user){
            return res.status(401).json({ message: "Usuário não encontrado" });
        }
    
        if(password != user.password_hash){
            return res.status(401).json({ message: "Senha invalida" });
        }
    
    
        const token = await authService.generateToken({ 
            id: user.id,
            name,
            email,
            password,
            crn
        });
    
     
        return res.status(200).json({
            user,
            token: token,
        })
    }catch(e){
      console.log(chalk.bgRed.white("erro ao tentar gerar token para usuario => ", e))
        res.status(500).send({ 
            message: 'Falha ao processar sua requisição',
            erro: e
    });
    }
    
}

module.exports.SessionController = {
    authenticate
}