const Antropometry = require("../models/Antropometry");
const CardapioItem = require("../models/CardapioItem");
const Refeicao = require("../models/Refeicao");
const User = require("../models/User");

module.exports = class NutriController {
    constructor() {
        this._alimentos = []
        this._cardapio = []
        this._refeicao = []

    }

    addUser(name, email, govId, birth) {

        const user = new User(name, email, govId, birth)
        return user
            //TODO: save user in BD
    }

    addAntropometry(user, created, weight, height, bodyFatPercent, bodyMusclePercent) {
        const antropometry = new Antropometry(user, created, weight, height, bodyFatPercent, bodyMusclePercent)
        return antropometry
    }

    addAlimento(...alimento) {
        alimento.map(a => this._alimentos.push(a))
    }

    getAlimentos() {
        //Previne a quebra do encapsulamento
        return this._alimentos.map(al => ({...al }))
    }

    createCardapio(alimento, quant) {
        const cardapio = new CardapioItem(alimento, quant)
        this._cardapio.push(cardapio)

    }

    createRefeicao(time, ...cardapio) {
        const refeicao = new Refeicao(time, ...cardapio)
        this._refeicao.push(refeicao)
    }






}