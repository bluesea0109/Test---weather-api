const express = require('express');
const router = express.Router();
const controller = require('../controllers/weather.controller');
const { rateLimiter } = require('../middlewares');

router.get('/', rateLimiter, controller.getWeatherInfo);

module.exports = router;
