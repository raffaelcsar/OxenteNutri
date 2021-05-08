const Meal = require("../app/models/Meal")
const sequelize = require("../app/models/index")

function get(req, res) {
    const meals = Meal.findAll({
            attributes: ["time", "quanty", "type"]
        })
        .then(resp => {
            return res.status(200).json(resp).send()
        })
}



/**
 * cria um meal(Refeição)
 * 
 * @method post
 * @param {Request} req requisição recebida 
 * @param {Response} res resposta da requisição
 * @return {Response} responde a requisição
 */
function post(req, res) {
    const { time, quanty, type } = req.body
    const meal = Meal.create({
            time: time,
            quanty: quanty,
            type: type
        })
        .then(resp => {
            return res.status(200).json(resp).send()
        })
}

function update(req, res) {
    const { time, quanty, type } = req.body
    const { id } = req.params
    const mealup = Meal.update({
            time: time,
            quanty: quanty,
            type: type
        }, {
            where: { id: id }
        })
        .then(resp => {
            return res.status(200).json(resp).send()
        })
}

function del(req, res) {
    const { id } = req.params
    const mealdel = Meal.destroy({
            where: { id: id }
        })
        .then(resp => {
            return res.status(200).json(resp).send()
        })
}

module.exports.MealController = {
    get,
    post,
    update,
    del
}