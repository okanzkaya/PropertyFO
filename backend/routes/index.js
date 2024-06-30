const express = require('express');
const router = express.Router();

const tenantsRouter = require('./tenants');
const propertiesRouter = require('./properties');
const ticketsRouter = require('./tickets');

router.use('/tenants', tenantsRouter);
router.use('/properties', propertiesRouter);
router.use('/tickets', ticketsRouter);

module.exports = router;
