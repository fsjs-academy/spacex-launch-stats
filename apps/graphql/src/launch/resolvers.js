import { Launch } from '@spacex-stats/domain';

export const launchResolvers = {
  Query: {
    launches: async () => await Launch.getAllLaunches(),
    launch: async (_, { flight_number }) => await Launch.getLaunchByFlightNumber(flight_number),
  },
};
