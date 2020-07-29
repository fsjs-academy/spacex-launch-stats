const repository = require('./repository');
const { getAllRockets, getRocketById } = require('./actions');

module.exports = {
  getAllRockets: getAllRockets({ repository }),
  getRocketById: getRocketById({ repository }),
};
