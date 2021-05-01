const NutriController = require("./controller/NutriController")
const User = require("./models/User")
const Antropometry = require("./models/Antropometry")
const Alimento = require("./models/Alimento")

const controller = new NutriController()
const user = controller.addUser("Victor", "victor@gmail.com", "78931245632", "14/11/1995")

const chuchu = new Alimento("Chuchu", 100)
const cenoura = new Alimento("Cenoura", 300)
controller.addAlimento(chuchu, cenoura)
const alimentos = controller.getAlimentos()
console.log(alimentos);