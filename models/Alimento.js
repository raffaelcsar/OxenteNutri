module.exports = class Alimento {
    constructor(name, cal) {
        this._name = name
        this._cal = cal
    }

    getName() {
        return this._name
    }

    setName(name) {
        this._name = name
    }

    getQuant() {
        return this._quant
    }

    setQuant(quant) {
        this._quant = quant
    }
}