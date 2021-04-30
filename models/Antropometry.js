module.exports = class Antropometry {
    constructor(user, created, weight, height, bodyFatPercent, bodyMusclePercent) {
        this._user = user
        this._created = created
        this._weight = weight
        this._height = height
        this._bodyFatPercent = bodyFatPercent
        this._bodyMusclePercent = bodyMusclePercent
    }

    getUser() {
        return this._user
    }

    setUser(user) {
        this._user = user
    }

    getCreated() {
        return this._created
    }

    setCreated(created) {
        this._created = created
    }
    getWeight() {
        return this._weight
    }

    setWeight(weight) {
        this._weight = weight
    }
    getHeight() {
        return this._height
    }

    setHeight(height) {
        this._height = height
    }
    getBodyFatPercent() {
        return this._bodyFatPercent
    }

    setBodyFatPercent(bodyFatPercent) {
        this._bodyFatPercent = bodyFatPercent
    }
    getBodyMusclePercent() {
        return this._bodyMusclePercent
    }

    setBodyMusclePercent(bodyMusclePercent) {
        this._bodyMusclePercent = bodyMusclePercent
    }
}