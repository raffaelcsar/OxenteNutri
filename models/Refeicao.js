module.exports = class Refeicao {

    constructor(time) {
        this._time = time
        this._cardapio = []
    }

    getTime() {
        return this._time
    }

    setTime(time) {
        this._time = time
    }

    getAlimentos() {
        return this._alimentos
    }




    addCardapioItem(cardapioItem) {
        this._cardapio.push(cardapioItem)
    }


}