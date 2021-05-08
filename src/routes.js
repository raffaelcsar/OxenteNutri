const antropometry = require('./app/models/antropometry');
const { AntropometryController } = require('./controller/AntropometryController');
const { FoodController } = require('./controller/FoodController');
const { MealController } = require('./controller/MealController');
const { MealFoodController } = require('./controller/MealFoodController');
const { CustomerController } = require('./controller/CustomerController');

const routes = require('express').Router();

/**
 * Gerencia rotas para os devidos Controllers
 */

routes.get('/customers/', CustomerController.get)

routes.post('/customers/', CustomerController.post)

routes.put('/customers/:id/', CustomerController.update)

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

// ROUTES MEALFOOD

routes.get("/mealfoods/", MealController.get)

routes.post("/mealfoods/", MealFoodController.post)

routes.put("/mealfoods/:id/", MealFoodController.update)

routes.delete("/mealfoods/:id/", MealFoodController.del)

// ROUTES ANTROPOMETRY

routes.get("/antropometrys/", AntropometryController.get)

routes.post("/antropometrys/", AntropometryController.post)

routes.put("/antropometrys/:id/", AntropometryController.update)

routes.delete("/antropometrys/:id/", AntropometryController.del)

module.exports = routes;