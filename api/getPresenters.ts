import { gql } from 'graphql-request';

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
