const antropometry = require('./app/models/antropometry');
const { AntropometryController } = require('./controller/AntropometryController');
const { FoodController } = require('./controller/FoodController');
const { MealController } = require('./controller/MealController');
const { MealFoodController } = require('./controller/MealFoodController');
const { CustomerController } = require('./controller/CustomerController');
const { SessionController } = require('./controller/SessionController');
const { UserController } = require('./controller/UserController');
const authService = require('./app/services/auth-service');

const routes = require('express').Router();

/**
 * Gerencia rotas para os devidos Controllers
 */

// ROUTES SESSION
routes.post('/session/', SessionController.authenticate);

// ROUTES USUARIO
routes.post('/user/',UserController.post)

// ROUTES customers 
routes.get('/customers/',authService.authorize, CustomerController.get)

routes.post('/customers/',authService.authorize, CustomerController.post)

routes.put('/customers/:id/',authService.authorize, CustomerController.update)

// ROUTES FOOD 

routes.get("/foods/",authService.authorize, FoodController.get)

routes.post("/foods/",authService.authorize, FoodController.post)

routes.put("/foods/:id/",authService.authorize, FoodController.update)

routes.delete("/foods/:id/",authService.authorize, FoodController.del)

// ROUTES MEAL

routes.get("/meals/",authService.authorize, MealController.get)

routes.post("/meals/",authService.authorize, MealController.post)

routes.put("/meals/:id/",authService.authorize, MealController.update)

routes.delete("/meals/:id/",authService.authorize, MealController.del)

// ROUTES MEALFOOD

routes.get("/mealfoods/",authService.authorize, MealFoodController.get)

routes.get("/mealfoods/:id/",authService.authorize, MealFoodController.getById)

routes.post("/mealfoods/",authService.authorize, MealFoodController.post)

routes.put("/mealfoods/:id/",authService.authorize, MealFoodController.update)

routes.delete("/mealfoods/:id/",authService.authorize, MealFoodController.del)

// ROUTES ANTROPOMETRY

routes.get("/antropometrys/",authService.authorize, AntropometryController.get)

routes.post("/antropometrys/",authService.authorize, AntropometryController.post)

routes.put("/antropometrys/:id/",authService.authorize, AntropometryController.update)

routes.delete("/antropometrys/:id/",authService.authorize, AntropometryController.del)

module.exports = routes;