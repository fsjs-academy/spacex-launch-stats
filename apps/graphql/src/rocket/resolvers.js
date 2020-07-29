import { Rocket } from '@spacex-stats/domain';

export const rocketResolvers = {
  Query: {
    rockets: async () => await Rocket.getAllRockets(),
    rocket: async (_, { id }) => await Rocket.getRocketById(id),
  }
};
