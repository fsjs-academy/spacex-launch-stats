const repository = require('./repository');
const { getAllLaunches, getLaunchByFlightNumber } = require('./actions');

module.exports = {
  getAllLaunches: getAllLaunches({ repository }),
  getLaunchByFlightNumber: getLaunchByFlightNumber({ repository }),
};
