'use strict';
const chalk = require('chalk');
const jwt = require('jsonwebtoken');
const authservice = require('./new-auth-service')

exports.generateToken = async (data) => {
  return authservice.loginUser(data)
    .catch(err => {
      console.log(chalk.bgRed.white("erro no authservice ao tentar fazer login do usuario ", JSON.stringify(data)))
      return err
    })
    .then(resp => {
      console.log(chalk.bgGreen("login realizado com sucesso ", JSON.stringify(data)))
      return resp
    })
  // return jwt.sign(data, process.env.APP_SECRET, { expiresIn: '1d' });
}

exports.decodeToken = async (token) => {
    var data = await jwt.verify(token, process.env.APP_SECRET);
    return data;
}

exports.authorize = function (req, res, next) {
    var token = req.headers['Authorization'];

    if (!token) {
        res.status(401).json({
            message: 'Acesso Restrito'
        });
    } else {
        jwt.verify(token, process.env.APP_SECRET, function (error, decoded) {
            if (error) {
                res.status(401).json({
                    message: 'Token Inválido'
                });
            } else {
                next();
            }
        });
    }
};

exports.isAdmin = function (req, res, next) {
    var token = req.headers['Authorization'];

    if (!token) {
        res.status(401).json({
            message: 'Token Inválido'
        });
    } else {
        jwt.verify(token, process.env.APP_SECRET, function (error, decoded) {
            if (error) {
                res.status(401).json({
                    message: 'Token Inválido'
                });
            } else {
                if (decoded.roles.includes('admin')) {
                    next();
                } else {
                    res.status(403).json({
                        message: 'Esta funcionalidade é restrita para administradores'
                    });
                }
            }
        });
    }
};