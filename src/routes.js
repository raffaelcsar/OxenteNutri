const { FoodController } = require('./controller/FoodController');

const routes = require('express').Router();

routes.get("/foods/", FoodController.get)

routes.post("/foods/", FoodController.post)

routes.put("/foods/:id/", FoodController.update)

routes.delete("/foods/:id/", FoodController.del)


module.exports = routes;