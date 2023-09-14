import { gql } from 'graphql-request';

export const GET_TOURNAMENTS = gql`
  query {
    tournaments(sort: "id:asc") {
      data {
        id
        attributes {
          title
          type
          playersInTeam
          description
          image {
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
