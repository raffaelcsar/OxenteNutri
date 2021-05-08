const { FoodController } = require('./controller/FoodController');

const routes = require('express').Router();

routes.get("/foods/", FoodController.get)

routes.post("/foods/", FoodController.post)

module.exports = routes;