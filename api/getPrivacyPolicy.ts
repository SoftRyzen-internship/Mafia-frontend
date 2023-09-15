import { gql } from 'graphql-request';

export const getPrivacyPolicy = gql`
  query {
    privacyPolicy {
      data {
        attributes {
          text
        }
      }
    }
  }
`;
