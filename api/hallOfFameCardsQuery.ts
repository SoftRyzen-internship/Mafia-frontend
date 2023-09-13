import { gql } from 'graphql-request';

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
