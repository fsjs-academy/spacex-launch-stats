import { gql } from 'apollo-server-express';

export const RocketTypeDefs = gql`
  type Rocket {
    rocket_id: String
    rocket_name: String
    rocket_type: String
  }

  extend type Query {
    rockets: [Rocket]
    rocket: Rocket
  }
`;