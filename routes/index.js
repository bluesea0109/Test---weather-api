const express = require('express');
const router = express.Router();

const weatherRoute = require('./weather.routes');

router.use('/weather', weatherRoute);

module.exports = router;
