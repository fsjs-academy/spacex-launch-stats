import { gql } from 'apollo-server-express';

export const LaunchTypeDefs = gql`
  type Launch {
    flight_number: Int
    mission_name: String
    launch_year: String
    launch_date_local: String
    launch_success: Boolean
    rocket: Rocket
  }

  extend type Query {
    launches: [Launch]
    launch: Launch
  }
`;