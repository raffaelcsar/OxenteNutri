require('dotenv').config({
    path: process.env.NODE_ENV == "test" ? ".env.test" : ".env"
})

const express = require("express");
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use(require("./routes"))
// class AppController {
//     constructor(){
//         this.express = express();

//         this.middlewares();
//         this.routes();
//     }

//     middlewares(){
//         this.express.use(express.json());
//     }

//     routes(){
//         this.express.use(require("./routes"));
//     }
// }

// module.exports = new AppController().express;
module.exports = app;