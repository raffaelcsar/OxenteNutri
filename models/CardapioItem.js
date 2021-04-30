module.exports = class CardapioItem {

    constructor(alimento, quant) {
        this._alimento = alimento
        this._quant = quant
    }

    getAlimento() {
        return this._alimento
    }

    setAlimento(alimento) {
        this._alimento = alimento
    }

    getQuant() {
        return this._quant
    }

    setQuant(quant) {
        this._quant = quant
    }


}