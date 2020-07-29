const getAllLaunches = ({ repository }) => async () => {
  return await repository.getAll();
}

const getLaunchByFlightNumber = ({ repository }) => async (flightNumber) => {
  return await repository.getBy(flightNumber);
}

module.exports = {
  getAllLaunches,
  getLaunchByFlightNumber,
};
