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

export const GET_PRESENTERS = gql`
  query {
    presenters {
      data {
        attributes {
          name
          description
          img {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
