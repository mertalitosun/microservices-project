const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../helpers/swaggerDocument');

router.use('/api-docs', swaggerUi.serve,swaggerUi.setup(swaggerDocument));

module.exports = router;
