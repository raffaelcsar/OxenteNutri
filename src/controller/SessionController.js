const { User } = require("../app/models/User")
const sequelize = require("../app/models/index")
const bcrypt = require("bcryptjs")
const authService = require('../app/services/auth-service')

async function authenticate(req, res){
    try{

        const {email, password} = req.body;
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
            id: user.id
        });
    
     
        return res.status(200).json({
            user,
            token: token,
        })
    }catch(e){
        res.status(500).send({ 
            message: 'Falha ao processar sua requisição',
            erro: e
    });
    }
    
}

module.exports.SessionController = {
    authenticate
}