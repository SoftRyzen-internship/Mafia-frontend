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

export const GET_HALLFAME_CARDS = gql`
  query {
    flipCards {
      data {
        id
        attributes {
          title
          description
          cups {
            id
            competition_name
            place_number
          }
          img {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`;
