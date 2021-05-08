const Food = require("../app/models/Food")
const sequelize = require("../app/models/index")

function get(req, res) {
    const foods = Food.findAll({
            attributes: ["name", "kcal"]
        })
        .then(resp => {
            return res.status(200).json(resp).send()
        })
}

function post(req, res) {
    const { name, kcal } = req.body
    const food = Food.create({
            name: name,
            kcal: kcal,
        })
        .then(resp => {
            return res.status(200).json(resp).send()
        })
}

module.exports.FoodController = {
    get,
    post,
}