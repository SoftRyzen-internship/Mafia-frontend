import { gql } from 'graphql-request';

export const getPrices = gql`
  query {
    prices(sort: "id") {
      data {
        id
        attributes {
          rateType
          amount
          presenters
          duration
          extraPlayerPrice
          playersInTeam
          maxPlayersInTeam
        }
      }
    }
  }
`;
