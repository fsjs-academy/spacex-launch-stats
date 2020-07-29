const axios = require('axios');
const { API_URL } = require('../../config');

module.exports = {
  async getAll() {
    const res = await axios.get(`${API_URL}/launches`);
    return res.data;
  },

  async getBy(flightNumber) {
    const res = await axios.get(`${API_URL}/launches/${flightNumber}`);
    return res.data;
  },
};
