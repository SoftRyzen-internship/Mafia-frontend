import { gql } from 'graphql-request';

export const GET_SCHEDULE = gql`
  query {
    schedule {
      data {
        attributes {
          schedules {
            id
            day
            time_start
            time_end
          }
        }
      }
    }
  }
`;
