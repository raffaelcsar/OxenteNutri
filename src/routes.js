const { CustomerController } = require('./controller/CustomerController');

const routes = require('express').Router();

/**
 * Gerencia rotas para os devidos Controllers
 */

routes.get('/customers/', CustomerController.get)

routes.post('/customers/', CustomerController.post)

routes.put('/customers/:id/', CustomerController.update)

module.exports = routes;