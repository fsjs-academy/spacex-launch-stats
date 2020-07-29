const getAllRockets = ({ repository }) => async () => {
  return await repository.getAll();
}

const getRocketById = ({ repository }) => async (id) => {
  return await repository.getBy(id);
}

module.exports = {
  getAllRockets,
  getRocketById,
};
