const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
      version: "1.0.0",
      title: "My API",
      description: "Documentation automatically generated by the <b>swagger-autogen</b> module."
  },
  host: "localhost:3000",
  basePath: "/",
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
      {
          "name": "User",
          "description": "Endpoints"
      }
  ],
  securityDefinitions: {
      api_key: {
          type: "apiKey",
          name: "api_key",
          in: "header"
      },
      petstore_auth: {
          type: "oauth2",
          authorizationUrl: "https://petstore.swagger.io/oauth/authorize",
          flow: "implicit",
          scopes: {
              read_pets: "read your pets",
              write_pets: "modify pets in your account"
          }
      }
  },
}

const outputFile = './swagger_output.json'
const endpointsFile = ['./src/routes.js']

swaggerAutogen(outputFile, endpointsFile, doc).then(() => {
  require('./src/server.js')
})
