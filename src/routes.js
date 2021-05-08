const { CustomerController } = require('./controller/CustomerController');

const routes = require('express').Router();

routes.get('/customers/', CustomerController.get)
routes.post('/customers/', CustomerController.post)

module.exports = routes;