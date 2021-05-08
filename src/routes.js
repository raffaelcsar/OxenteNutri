const { FoodController } = require('./controller/FoodController');
const { MealController } = require('./controller/MealController');

const routes = require('express').Router();

// ROUTES FOOD 

routes.get("/foods/", FoodController.get)

routes.post("/foods/", FoodController.post)

routes.put("/foods/:id/", FoodController.update)

routes.delete("/foods/:id/", FoodController.del)

// ROUTES MEAL

routes.get("/meals/", MealController.get)

routes.post("/meals/", MealController.post)

routes.put("/meals/:id/", MealController.update)

routes.delete("/meals/:id/", MealController.del)

module.exports = routes;