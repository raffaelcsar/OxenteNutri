const Antropometry = require("../app/models/antropometry")
const sequelize = require("../app/models/index")

function get(req, res) {
    const antropometrys = Antropometry.findAll({
            attributes: ["weight", "height", "bodyFatPercent", "bodyMusclePercent"]
        })
        .then(resp => {
            return res.status(200).json(resp).send()
        })
}



/**
 * cria um Antropometry
 * 
 * @method post
 * @param {Request} req requisição recebida 
 * @param {Response} res resposta da requisição
 * @return {Response} responde a requisição
 */
function post(req, res) {
    const { userId, weight, height, bodyFatPercent, bodyMusclePercent } = req.body
    const antropometry = Antropometry.create({
            userId,
            weight,
            height,
            bodyFatPercent,
            bodyMusclePercent
        })
        .then(resp => {
            return res.status(200).json(resp).send()
        })
}

function update(req, res) {
    const { weight, height, bodyFatPercent, bodyMusclePercent } = req.body
    const { id } = req.params
    const antropometryup = Antropometry.update({
            weight,
            height,
            bodyFatPercent,
            bodyMusclePercent
        }, {
            where: { id: id }
        })
        .then(resp => {
            return res.status(200).json(resp).send()
        })
}

function del(req, res) {
    const { id } = req.params
    const antropometrydel = Antropometry.destroy({
            where: { id: id }
        })
        .then(resp => {
            return res.status(200).json(resp).send()
        })
}

module.exports.AntropometryController = {
    get,
    post,
    update,
    del
}