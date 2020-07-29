import axios from 'axios';

export const rocketResolvers = {
  Query: {
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
  }
};
