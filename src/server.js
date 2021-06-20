const app = require('./app');
const chalk = require('chalk')
const os = require('os')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(process.env.PORT || 3000, () => {
  const arch = os.arch()
  const plataform = os.platform()
  const type = os.type()
  const mem = os.totalmem()
  const cpus = os.cpus()
  console.log(chalk.bgCyan.black(`SO: ${type} ${plataform} ${arch}`))
  console.log(chalk.bgCyan.black(`RAM: ${Math.floor(mem * (10 ** -9))} GB`))
  console.log(chalk.bgCyan.black(`CORES: ${cpus.length}`))
  console.log(chalk.bgCyan.black(`CPU: ${cpus[0].model}`))
});

