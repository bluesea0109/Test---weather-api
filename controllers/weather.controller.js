const axios = require('axios');
const { API_BASE_URL, API_KEY } = require('../config');

module.exports = {
  getWeatherInfo: async (req, res, next) => {
    try {
      const weatherInfo = await axios({
        method: 'GET',
        url: API_BASE_URL + `/weather`,
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
        params: {
          id: req.query.currentCityId,
          appid: API_KEY,
        },
      });

      res.json({ result: weatherInfo.data });
    } catch (error) {
      next(error);
    }
  },
};
