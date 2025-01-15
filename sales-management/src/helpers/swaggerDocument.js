const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'sales-management',
      version: '1.0.0',
      description: "sales-management api"
    },
  },
  apis: ['./src/routes/*.js'], 
};

const swaggerJsdocs = swaggerJsdoc(options);

module.exports = swaggerJsdocs;