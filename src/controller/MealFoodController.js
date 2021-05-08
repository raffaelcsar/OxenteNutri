const MealFood = require("../app/models/MealFood")
const sequelize = require("../app/models/index")

function get(req, res) {
    const mealfoods = MealFood.findAll({
            attributes: ["meal", "food"]
        })
        .then(resp => {
            return res.status(200).json(resp).send()
        })
}



/**
 * cria um MealFood ()
 * 
 * @method post
 * @param {Request} req requisição recebida 
 * @param {Response} res resposta da requisição
 * @return {Response} responde a requisição
 */
function post(req, res) {
    const { mealId, foodId } = req.body
    const mealfood = MealFood.create({
            mealId: mealId,
            foodId: foodId
        })
        .then(resp => {
            return res.status(200).json(resp).send()
        })
}

function update(req, res) {
    const { mealId, foodId } = req.body
    const { id } = req.params
    const mealfoodup = MealFood.update({
            mealId: mealId,
            foodId: foodId
        }, {
            where: { id: id }
        })
        .then(resp => {
            return res.status(200).json(resp).send()
        })
}

function del(req, res) {
    const { id } = req.params
    const mealfooddel = MealFood.destroy({
            where: { id: id }
        })
        .then(resp => {
            return res.status(200).json(resp).send()
        })
}

module.exports.MealFoodController = {
    get,
    post,
    update,
    del
}