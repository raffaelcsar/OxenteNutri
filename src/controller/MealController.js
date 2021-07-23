const { Meal } = require("../app/models/Meal")
const sequelize = require("../app/models/index")
const chalk = require("chalk")

function get(req, res) {
    const meals = Meal.findAll({
            attributes: ["time", "quanty", "type"]
        })
        .then(resp => {
            return res.status(200).json(resp).send()
        })
        .catch((err) => {
          console.log(chalk.bgRed.white("MEAL - FINDALL => ", err))
          res.status(500).json({msg: "somethins get wrong, try again later"}).send()
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
    Meal.create({
        time,
        quanty,
        type
    })
    .then(resp => {
        return res.status(200).json(resp).send()
    })
    .catch((err) => res.status(500).json(err).send())
}

function update(req, res) {
    const { time, quanty, type } = req.body
    const { id } = req.params
    const mealup = Meal.update({
            time,
            quanty,
            type
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