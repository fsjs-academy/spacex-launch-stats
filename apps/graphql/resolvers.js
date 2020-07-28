import axios from 'axios';

export const resolvers = {
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
    rockets: () => {
      return axios
        .get('https://api.spacexdata.com/v3/rockets')
        .then(res => res.data);
    },
    rocket: (_, { id }) => {
      return axios
        .get(`https://api.spacexdata.com/v3/rockets/${id}`)
        .then(res => res.data);
    },
  },
};
