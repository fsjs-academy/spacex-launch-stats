import axios from 'axios';

export const launchResolvers = {
  Query: {
    launches: () => {
      return axios
        .get('https://api.spacexdata.com/v3/launches')
        .then(res => res.data);
    },
    launch: (_, { flight_number }) => {
      return axios
        .get(`https://api.spacexdata.com/v3/launches/${flight_number}`)
        .then(res => res.data);
    },
  }
};
