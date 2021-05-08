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

function update(req, res) {
    const { name, kcal } = req.body
    const { id } = req.params
    const foodup = Food.update({
            name: name,
            kcal: kcal
        }, {
            where: { id: id }
        })
        .then(resp => {
            return res.status(200).json(resp).send()
        })
}

function del(req, res) {
    const { id } = req.params
    const fooddel = Food.destroy({
            where: { id: id }
        })
        .then(resp => {
            return res.status(200).json(resp).send()
        })
}

module.exports.FoodController = {
    get,
    post,
    update,
    del
}