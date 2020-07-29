const axios = require('axios');
const { API_URL } = require('../../config');

module.exports = {
  async getAll() {
    const res = await axios.get(`${API_URL}/rocket`);
    return res.data;
  },

  async getBy(id) {
    const res = await axios.get(`${API_URL}/rocket/${id}`);
    return res.data;
  },
};
