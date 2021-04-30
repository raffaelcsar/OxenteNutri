module.exports = class User {

    constructor(name, email, govId, birth) {
        this._name = name
        this._email = email
        this._govId = govId
        this._birth = birth
    }

    getName() {
        return this._name
    }
    setName(name) {
        this._name = name
    }
    getEmail() {
        return this._email
    }
    setEmail(email) {
        this._email = email
    }
    getGovId() {
        return this._govId
    }
    setGovId(govId) {
        this._govId = govId
    }
    getBirth() {
        return this._birth
    }
    setBirth(birth) {
        this._birth = birth
    }
}